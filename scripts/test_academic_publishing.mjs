// SPDX-License-Identifier: MIT
// Additional checks for the proposed Academic Publishing industry extension.
// The upstream lint remains authoritative and is not weakened by these tests.
import assert from 'node:assert/strict';
import fs from 'node:fs';
import path from 'node:path';
import YAML from 'yaml';

const directory = 'catalogue';
const index = YAML.parse(fs.readFileSync(path.join(directory, '_index.yaml'), 'utf8'));
const trees = index.files.map(file => ({ file, tree: YAML.parse(fs.readFileSync(path.join(directory, file), 'utf8')) }));
const roots = trees.filter(({ tree }) => tree.industry === 'Academic Publishing');
assert(roots.length > 0, 'Academic Publishing must be registered');
const all = new Map();
function flatten(node) {
  assert(!all.has(node.id), `Duplicate id ${node.id}`);
  all.set(node.id, node);
  node.children.forEach(flatten);
}
trees.forEach(({ tree }) => flatten(tree));
const streams = YAML.parse(fs.readFileSync(path.join(directory, '_value-streams.yaml'), 'utf8')).value_streams;
const streamIds = new Set(streams.map(stream => stream.id));
const counts = { 1: 0, 2: 0, 3: 0, 4: 0 };
const publicText = [];
function check(node, parent = null) {
  counts[node.level] += 1;
  assert.equal(node.level, parent ? parent.level + 1 : 1);
  assert(node.level <= 3, `${node.id}: this extension deliberately stops at L3`);
  assert.equal(node.industry, 'Academic Publishing');
  assert.match(node.id, /^BC-\d+(\.\d+){0,2}$/);
  if (parent) assert(node.id.startsWith(`${parent.id}.`));
  const words = node.name.split(/\s+/);
  assert(words.length >= 2 && words.length <= 5, `${node.id}: name length`);
  assert(!/^(Manage|Perform|Execute|Handle|Deliver|Process|The|A|An)\b/.test(node.name), `${node.id}: not a capability noun phrase`);
  assert(!/-to-/i.test(node.name), `${node.id}: value stream in capability tree`);
  assert(node.description?.trim().length >= 40, `${node.id}: meaningful definition`);
  for (const field of ['in_scope', 'out_of_scope', 'references']) {
    assert(Array.isArray(node[field]) && node[field].length > 0, `${node.id}: ${field} required`);
  }
  node.references.forEach(url => assert.equal(new URL(url).protocol, 'https:'));
  const m = node.metadata;
  assert.equal(m?.status, 'Proposed');
  assert.equal(m.parent_id, parent?.id ?? null);
  assert.equal(m.effective_date, null, `${node.id}: draft must not claim activation`);
  assert.equal(m.last_reviewed_date, null, `${node.id}: no fabricated approval/review date`);
  for (const field of ['strategic_importance', 'maturity', 'health']) assert.equal(m[field], null, `${node.id}: no invented enterprise assessment`);
  assert(m.capability_owner?.length > 3, `${node.id}: reference owner role`);
  assert.equal(m.owner_assignment, 'Reference role only; adopter confirmation required');
  assert.match(m.next_review_date, /^\d{4}-\d{2}-\d{2}$/);
  assert(Array.isArray(m.value_stream_ids) && m.value_stream_ids.length > 0, `${node.id}: stream context`);
  m.value_stream_ids.forEach(id => assert(streamIds.has(id), `${node.id}: unresolved stream ${id}`));
  assert.deepEqual(m.linked_applications, [], `${node.id}: no internal application export`);
  assert(m.information_objects?.length > 0, `${node.id}: information context`);
  const names = node.children.map(child => child.name.toLowerCase());
  assert.equal(new Set(names).size, names.length, `${node.id}: sibling name uniqueness`);
  node.children.forEach(child => check(child, node));
}
roots.forEach(({ file, tree }) => {
  publicText.push(fs.readFileSync(path.join(directory, file), 'utf8'));
  check(tree);
});
const publishingStreams = streams.filter(stream => stream.industries.includes('Academic Publishing'));
assert(publishingStreams.length > 0, 'Industry value-stream context required');
const usedRoots = new Set();
for (const stream of publishingStreams) {
  assert.match(stream.name, /-to-/);
  assert.equal(stream.metadata?.status, 'Proposed');
  for (const stage of stream.stages) {
    stage.capability_ids.forEach(id => {
      assert.equal(all.get(id)?.level, 1, `${stage.id}: links must resolve at L1`);
      usedRoots.add(id);
    });
  }
}
roots.forEach(({ tree }) => {
  assert(usedRoots.has(tree.id), `${tree.id}: missing value-stream use`);
  const expectedContexts = publishingStreams.filter(s => s.stages.some(stage => stage.capability_ids.includes(tree.id))).map(s => s.id).sort();
  function checkContexts(node) {
    assert.deepEqual([...node.metadata.value_stream_ids].sort(), expectedContexts, `${node.id}: inherited L1 stream context must match stage links`);
    node.children.forEach(checkContexts);
  }
  checkContexts(tree);
});
for (const id of ['BC-5200.20', 'BC-5200.30', 'BC-5220.30', 'BC-5260.40', 'BC-5280.40', 'BC-5290.20', 'BC-5310.10', 'BC-5320']) {
  assert(all.has(id), `Required publishing-use-case scope missing: ${id}`);
}
for (const id of ['VS-670', 'VS-720', 'VS-730', 'VS-740', 'VS-750']) assert(streamIds.has(id), `Required stakeholder journey missing: ${id}`);
for (const id of ['BC-5220.40', 'BC-5230.50', 'BC-5210.10', 'BC-5210.50']) {
  assert.equal(all.get(id).children.length, 0, `${id}: decision/participant variants must not reappear as child capabilities`);
}
// Include prose and value streams, not just capability nodes. Public publisher
// source URLs are legitimate evidence; private tenant URLs and identifiers are not.
for (const file of ['catalogue/_academic-publishing.md', 'catalogue/_value-streams.yaml', 'README.md', 'NOTICE', 'business-capability-governance-model.md']) {
  publicText.push(fs.readFileSync(file, 'utf8'));
}
const privateMarkers = /BCAP-\d+|APPL-\d+|springernature\.(?:atlassian\.net|sharepoint\.com)|natureally-documentation\.springernature\.com|ardoq\.com|\/opt\/(?:data|vault)|STB-REQ-\d+|gh[pousr]_[A-Za-z0-9]{20,}|github_pat_[A-Za-z0-9_]{20,}|-----BEGIN [A-Z ]*PRIVATE KEY-----/i;
assert(!privateMarkers.test(publicText.join('\n')), 'Private seed data, internal links and credentials must not be published');
if (process.argv.includes('--built')) {
  const expected = [...all.values()].filter(n => n.industry === 'Academic Publishing');
  for (const base of ['dist/api', 'dist/site/api', 'packages/py/src/turbo_ea_capabilities/data']) {
    const flat = JSON.parse(fs.readFileSync(`${base}/capabilities.json`, 'utf8'));
    const actual = flat.filter(n => n.industry === 'Academic Publishing');
    assert.deepEqual(actual.map(n => n.id).sort(), expected.map(n => n.id).sort(), `${base}: complete node parity`);
    const lookup = new Map(actual.map(n => [n.id, n]));
    for (const source of expected) {
      const target = lookup.get(source.id);
      for (const field of ['name', 'description', 'references', 'in_scope', 'out_of_scope', 'metadata']) {
        assert.deepEqual(target[field], source[field], `${base}: ${source.id} ${field} parity`);
      }
      assert.equal(target.parent_id, source.metadata.parent_id);
    }
    const builtStreams = JSON.parse(fs.readFileSync(`${base}/value-streams.json`, 'utf8'));
    assert.deepEqual(builtStreams.filter(s => s.industries.includes('Academic Publishing')).map(s => s.id).sort(), publishingStreams.map(s => s.id).sort());
  }
  for (const source of expected) {
    const html = fs.readFileSync(`dist/site/capability/${source.id}/index.html`, 'utf8');
    assert(html.includes(source.name), `${source.id}: rendered capability page`);
  }
}
console.log(JSON.stringify({ result: 'PASS', builtArtifacts: process.argv.includes('--built'), industry: 'Academic Publishing', roots: roots.length, nodesByLevel: counts, valueStreams: publishingStreams.length }, null, 2));
