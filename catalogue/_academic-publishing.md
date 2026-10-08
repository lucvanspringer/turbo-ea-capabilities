# Academic Publishing: proposed industry catalogue

**Status:** Proposed reference model, not an approved enterprise operating model.

**Proposer:** Luc van Helfteren

**Draft date:** 8 October 2026
**Industry tag:** `Academic Publishing`

## Decision and intended value

Review this extension as a reusable publisher-side business-capability baseline, then adapt and ratify it before enterprise adoption. It supplies stable units for application mapping, sourcing, investment and responsibility discussions without encoding a particular publisher's organisation, products or workflow.

This is a fork contribution. It does not assert upstream acceptance, publication to the upstream website or inclusion in a released package. Existing capability identifiers and definitions remain unchanged. New catalogue identifiers are provisional within this fork until accepted into the upstream identifier space.

## Scope

The model covers scholarly journals, articles, monographs, edited books, chapters, reference works and proceedings, including society and partner publishing. Open access, subscription, hybrid and collective funding are contexts exercised by the capabilities, not parallel copies of the capability hierarchy. A small press can adopt a subset and outsource its realisation without losing accountability for the publishing outcome.

The model includes publisher-provided research comprehension, evidence synthesis and pre-submission authoring assistance. It excludes running a university, conducting the underlying research, allocating research grants, delivering teaching and unrelated research-information services. Cross-industry finance, legal, sales, pricing, procurement, supply chain, human resources, cybersecurity and technology capabilities are reused rather than recreated. Physical print manufacturing is not conflated with digital publication production.

The thirteen L1s below are distinct abilities, not steps in an end-to-end process. Their sequence here has no process meaning. YAML files are the source of truth for the full L1/L2/L3 trees.

| ID | Capability | Principal boundary |
|---|---|---|
| BC-5200 | [Scholarly Portfolio Management](L1-scholarly-portfolio-management.yaml) | Title and programme remit, commissioning opportunities, collections, publishing partnerships and title lifecycle |
| BC-5210 | [Scholarly Community Management](L1-scholarly-community-management.yaml) | Contributor, editor and reviewer participation and relationships, not employee HR or manuscript decisions |
| BC-5220 | [Manuscript Assessment Management](L1-manuscript-assessment-management.yaml) | Admissibility, peer-review evidence, editorial judgement, transfer and editorial appeals |
| BC-5230 | [Publication Integrity Management](L1-publication-integrity-management.yaml) | Ethical assurance, authenticity, integrity cases and decisions affecting the scholarly record |
| BC-5240 | [Scholarly Production Management](L1-scholarly-production-management.yaml) | Publication-ready and accessible content, manifestations, proofs and production quality |
| BC-5250 | [Scholarly Metadata Management](L1-scholarly-metadata-management.yaml) | Bibliographic description, persistent identity, attribution, relationships and semantic interoperability |
| BC-5260 | [Scholarly Rights Management](L1-scholarly-rights-management.yaml) | Incoming rights, permissions, licence conditions, reuse grants and royalty obligations |
| BC-5270 | [Publication Funding Management](L1-publication-funding-management.yaml) | Publication funding, institutional publishing benefits, charges, waivers and collective support |
| BC-5280 | [Scholarly Access Management](L1-scholarly-access-management.yaml) | Reading agreements, publication entitlements, eligibility and continuing-access obligations |
| BC-5290 | [Scholarly Dissemination Management](L1-scholarly-dissemination-management.yaml) | Publication release and delivery, discovery participation, scholarly retrieval and reader engagement |
| BC-5300 | [Scholarly Record Management](L1-scholarly-record-management.yaml) | Authoritative scholarly assets, version lineage, preservation and continuity |
| BC-5310 | [Publishing Intelligence Management](L1-publishing-intelligence-management.yaml) | Normalised usage, responsible publication metrics and institutional content-value evidence |
| BC-5320 | [Scholarly Research Assistance](L1-scholarly-research-assistance.yaml) | Customer research comprehension, evidence synthesis, working knowledge and pre-submission manuscript support |

## Evidence and expansion approach

A historical practitioner capability seed informed the initial coverage. It was treated as a set of candidate concepts, not imported verbatim and not treated as evidence of current ownership, maturity or complete industry coverage. The source crosswalk is intentionally separate from this public repository. No private identifiers, applications, people, assessments or internal links are distributed here.

Publicly available evidence broadens the seed. The capability definitions and decomposition are architectural synthesis, not an external framework's official capability taxonomy. A `references` URI means that the source informs the scope; it does not certify every child, prescribe an implementation or prove MECE completeness.

### Main additions and their evidence

- **Independent assessment and integrity:** COPE provides peer-review ethics and retraction guidance, while the transparency principles published by DOAJ describe journal policy and fee transparency. These inform reviewer conflicts, editorial independence, integrity cases and transparent record amendments.[1][2][3]
- **Scholarly identity and relationships:** Crossref describes identifier registration and metadata maintenance; the ORCID record model represents identifiers associated with people, works, funding and peer review. These inform, but are not mandated implementations of, persistent identity and attribution capabilities.[4][5]
- **Digital and book publishing:** JATS describes article structure; ONIX for Books describes book-product metadata exchange. They support different business outcomes and are not interchangeable production frameworks.[6][7]
- **Accessible publications:** EPUB Accessibility covers publication conformance and discoverability metadata; WCAG supplies testable, technology-independent success criteria for web accessibility. The model separates publication accessibility from any single file format or delivery platform.[8][15]
- **Open-access funding and agreements:** ESAC describes transformative agreements linking institutional expenditure and open-access publication; Plan S describes conditions for its participating funders. These inform publisher funding and rights capabilities without assuming that Plan S applies universally or that all open access requires an author charge.[11][12]
- **Discovery and library coverage:** KBART concerns electronic-resource title-list and coverage exchange; DOAB describes an open scholarly-book discovery role. These inform holdings accuracy and discovery participation, not a prescribed discovery vendor.[13][14]
- **Enduring record stewardship:** CLOCKSS describes long-term scholarly archiving; NISO Transfer describes continuity of journal access when publishers change. The model explicitly distinguishes preservation from current hosting and backup.[10][17]
- **Usage and responsible metrics:** COUNTER concerns normalised content-usage measurement and reporting. DORA rejects using journal-based metrics as a proxy for the quality of individual research. Usage evidence, publication-level indicators and research-quality judgement are therefore not treated as interchangeable.[9][16]

These are material additions to a typical submission-and-production map. Society publishing, collective funding, book and chapter contexts, preservation continuity, accessibility and responsible measurement remain proposed scopes for business-owner review, not claims of exhaustive coverage.

### Demand-led coverage checks

The following are reference use cases, not representations of any named enterprise project or product. They serve as acceptance scenarios across capability boundaries.

| Use case | Required capability coverage and boundary |
|---|---|
| Calls for papers and retrospective collections | BC-5200 governs remit, membership, guest participation and lifecycle; BC-5210 contributor participation; BC-5220 independent assessment; BC-5250 identity/relationships; BC-5290 discovery. A thematic collection is not a commercial licence bundle. |
| Operational commissioning | BC-5200 covers prospect fit, invitation history, proposal/synopsis appraisal, commitments and contribution continuity. BC-5210 retains contributor relationships; BC-5220 owns submitted-work assessment. An agreed commission cannot promise editorial acceptance. |
| Programmatic content consumption | BC-5260 determines purpose-specific reuse rights; BC-5280 beneficiary/delegated entitlement; BC-5290 machine-usable delivery and corpus completeness; BC-5250/5300 source and version provenance; BC-5310 consumption evidence. Reading, mining, retrieval-assisted generation, model training and redistribution are not interchangeable permissions. |
| Customer research comprehension | BC-5290 discovers material; BC-5320 supports understanding, figure/method explanation and cross-publication evidence synthesis, with source traceability and uncertainty. Finding an article is distinct from understanding it. |
| Customer authoring assistance | BC-5320 supports manuscript expression, structure and references before submission, preserving author responsibility and approval. It is separate from BC-5240 publisher production and BC-5220 independent assessment. |
| Peer review and record integrity | BC-5210 maintains contributor expertise and participation; BC-5220 reviewer assignment, confidential evidence, quality and editorial authority; BC-5230 ethics and integrity decisions. Revision, rejection and transfer remain valid outcomes. |

Public ACS guidance distinguishes newly invited special-issue content from retrospective collections, while COPE covers guest-edited collections and Routledge/Cambridge describe proposal and book-review contexts.[18][19][20]

Cambridge and the public publisher collection guidance supply further context without imposing one publisher workflow on the industry.[21][22]

Customer research-assistance scope is informed by publicly described Elicit, Scite and Scholarcy offerings, not by independently verified vendor accuracy or productivity claims.[23][24][25]

Writefull provides an authoring-support example; ICMJE supplies medical-journal authorship, human accountability and manuscript-preparation guidance, not a universal mandate across all disciplines.[26][27][28]

Published API terms and rights-reservation policies illustrate why technical access, institutional entitlement and permitted computational uses need distinct capability boundaries. They are publisher-specific contractual examples, not legal advice or a statement that all scholarly content has identical restrictions.[29][30]

### Evidence limitations

Public source pages were accessed on 8 October 2026. COPE pages include guidance summaries; CLOCKSS and DOAB pages describe infrastructure participation rather than complete process specifications. ORCID, EPUB Accessibility and WCAG retrieval used partial text windows. No detailed certification or legal-compliance conclusion is inferred from those extracts. NISO's Transfer landing page mixes recent release information and older body text; this catalogue relies on its stable continuity purpose, not an asserted current version number.

Vendor pages establish offered service categories only, not proven accuracy, safety, completeness or a required implementation. Public API terms are policy examples; applicable law, contract and content licence still require legal interpretation. Several expanded-source extracts are partial text windows; only visible evidence is used.

The source set is strongest for integrity, metadata, accessibility, discovery, preservation and usage. Detailed commercial contracting, royalty models, society economics and discipline-specific editorial practice require adopter SME validation. Where descriptions extend the public guidance, they are proposed capability design, not reported external fact.

## Boundaries requiring deliberate adoption decisions

| Boundary | Allocation in this model |
|---|---|
| Contributor relationship versus scholarly attribution | BC-5210 owns participation and expertise profiles; BC-5250 owns the contributor's attribution on the scholarly object. Generic login identity remains BC-620. |
| Reviewer community versus manuscript peer review | BC-5210 owns the reviewer community; BC-5220 owns suitability, conflicts and review evidence for an individual submission. |
| Editorial judgement versus publication integrity | BC-5220 owns merit and editorial appeals; BC-5230 owns misconduct concerns and record-amendment decisions. An integrity decision is not a replacement for an institution's research investigation. |
| Production versus metadata versus record | BC-5240 produces publication manifestations; BC-5250 governs description and identifiers; BC-5300 controls authoritative assets, versions and enduring custody. |
| Copyright versus reading access versus publication funding | BC-5260 governs rights grants and licence conditions; BC-5280 governs reading entitlements; BC-5270 governs publishing-funding benefits. A combined agreement can exercise all three without acquiring three competing contract masters. |
| Open-access eligibility versus editorial independence | Funding eligibility and charge settlement must not decide scholarly acceptance. No-author-charge and collectively funded models remain in scope. |
| Entitlement versus delivery versus preservation | BC-5280 decides permitted access; BC-5290 makes content available; BC-5300 assures the enduring record. Open material need not require identity authentication. |
| Integrity amendment versus implementation | BC-5230 authorises the decision; BC-5240, BC-5250, BC-5290 and BC-5300 realise the approved change in renditions, metadata, channels and record history. |
| Reader insight versus enterprise analytics | BC-5310 governs publishing-specific measures and interpretation. Generic analytics, data platforms, AI and enterprise reporting remain BC-610. |
| Customer assistance versus enabling AI | BC-5320 owns supported researcher outcomes, not model hosting, agent infrastructure or generic enterprise AI. Human-supported and automated realisations exercise the same business ability. |
| Manuscript development versus production | BC-5320 assists the author before submission; BC-5240 controls publisher production. Support does not transfer authorship or confer preferential acceptance. |

The adjacent Education capability `BC-4780` addresses research-institution responsibilities, not the publisher's complete operating model. The Media capability branches `BC-3700`, `BC-3720` and `BC-3740` have substantial audiovisual scope. Their industry tags have not been silently widened to Academic Publishing.

### Cross-industry reuse

| Existing capability | Publisher use |
|---|---|
| BC-200 Financial Management; BC-230 Financial Planning & Analysis | Receivables, payment, financial settlement and investment appraisal |
| BC-150 Legal Management; BC-130 Compliance Management | Legal advice, contracts and enterprise compliance controls |
| BC-300 Human Capital Management | Employee workforce management, distinct from external scholarly contributor communities |
| BC-400 Marketing Management; BC-410 Sales Management; BC-440 Pricing Management | Campaign, sales and general pricing disciplines |
| BC-420 Customer Relationship Management; BC-430 Customer Service Management | Generic customer-account and service disciplines |
| BC-500 Procurement Management; BC-510 Supplier Management; BC-520 Supply Chain Management; BC-530 Inventory Management | Supplier and physical fulfilment operations |
| BC-600 Information Technology Management; BC-610 Information & Data Management; BC-620 Cybersecurity Management | Platforms, integration, enterprise data/AI, identity and technical security |
| BC-720 Quality Management; BC-820 Product Lifecycle Management; BC-840 Intellectual Property Management | Enterprise-wide governance disciplines; publisher-specific scholarly outcomes remain in the industry branches |

Specialised scope does not mean a new organisational department or a new application is needed. Shared services can realise several capabilities. Relationships and application mappings must not be implemented as duplicate parents in the hierarchy.

## Value streams and process coverage

Ten proposed value streams in [`_value-streams.yaml`](_value-streams.yaml) supply context independently of the capability tree:

| ID | Value stream | Stakeholder outcome |
|---|---|---|
| VS-660 | Proposal-to-Publishing-Programme | A community or partner has a viable scholarly publishing programme |
| VS-670 | Submission-to-Publication | An author receives a defensible disposition and, for accepted work, a citable publication |
| VS-680 | Discovery-to-Scholarly-Use | A reader finds, accesses and can use relevant scholarly material |
| VS-690 | Agreement-to-Publishing-Benefit | An institution or sponsor receives and can account for its contracted benefits |
| VS-700 | Concern-to-Record-Resolution | A concern receives a reasoned response and any required transparent record amendment |
| VS-710 | Publication-to-Enduring-Access | The community retains a trustworthy record beyond publisher or platform change |
| VS-720 | Commission-to-Contribution | A commission produces an accountable contribution or a clear alternative disposition |
| VS-730 | Question-to-Scholarly-Evidence | A researcher receives intelligible, traceable evidence for their own judgement |
| VS-740 | Draft-to-Submission-Readiness | An author retains responsibility for a supported, submission-ready manuscript |
| VS-750 | Corpus-Request-to-Permitted-Use | A consumer obtains an identifiable corpus for an explicitly permitted machine-use purpose |

Stages link only to L1 capabilities. Capability metadata lists inherited **L1 value-stream context**, not a claim that every descendant is exercised at every stage. Exact sub-scope is described in stage notes. These streams are not mandatory linear workflows: rejection, revision, transfer, parallel work and content-type variation belong in subsequent process design.

**No new business-process taxonomy is claimed in this contribution.** Empty `process_ids` are an explicit rollout gap permitted by governance section 10.4. Existing generic business processes and value streams are unchanged. Adding publisher-specific BP nodes requires a separate domain/process review and honest framework crosswalks; no fictitious APQC, COPE or other process codes have been created.

No industry macro layer or translations are added. The source remains canonical English; future translations must follow the existing sidecar and source-hash rules.

## Governance metadata and promotion

All new nodes carry descriptions, in/out-of-scope boundaries, public references, a single reference owner role, parent identifier, lifecycle fields, assessment placeholders and information-object examples. Enterprise-specific values are deliberately not fabricated:

- `status: Proposed` is the lifecycle state throughout.
- `capability_owner` is a suggested accountable role, not an assigned person or accepted responsibility. `owner_assignment` makes that explicit.
- `strategic_importance`, `maturity` and `health` are null pending assessment. A reference catalogue cannot truthfully supply these for an adopting enterprise.
- `effective_date` and `last_reviewed_date` are null because ratification has not occurred. `drafted_date` is not an approval date.
- `next_review_date` is a proposed annual review target, subject to the adopter assigning owners. L2 owner review remains at least annual, with whole-model review every two to three years under the governance model.
- `linked_applications` is empty. No private application mappings or assessments are published.
- Relationships live in the existing schema's `metadata` escape hatch; no schema change is needed. Numeric identifiers use sparse numbering and the hierarchy stops at L3.

Passing lint proves structural validity, not complete business coverage, ownership acceptance, legal compliance or MECE correctness. Treat the reference model as a reviewable baseline, not as evidence that the capabilities are present or mature in a particular company.

### Acceptance and next decisions

1. **Model steward:** review parent-child composition, sibling boundaries and identifiers against the upstream catalogue; resolve any concurrent identifier allocation before upstream submission.
2. **Publishing domain owners:** validate journal/book/proceedings coverage and the commercial, integrity, access, metadata and preservation boundaries. Record gaps and conditional applicability rather than forcing universal adoption.
3. **Adopting enterprise:** assign accountable owners, assess value/importance, maturity and health, agree KPIs, map applications and decide the minimum decision-useful level of decomposition.
4. **Architecture review authority:** approve, reject or defer with a decision record; set effective/review dates only after approval.
5. **Repository maintainer:** merge through a reviewed, passing pull request. This is an additive capability change, so an upstream release would normally be a catalogue MINOR increment, not a schema-version change. No release tag is created by this proposal.

No ARB approval, business-owner acceptance or upstream consensus is implied by the fork or pull request.

## Validation

```bash
npm ci
npm run lint
npm run test:academic-publishing
npm run build
npm run test:academic-publishing -- --built
```

The additional test checks governance completeness, hierarchy, naming length, value-stream references and private-data markers across the new YAML and supporting documentation, without weakening repository lint or schema. Its built mode checks every new capability's definition, scope and metadata against the generated API, bundled Python data and site API, and verifies every rendered capability page. CI also exercises the Python package through the existing workflow. An additive Astro value-stream endpoint closes a pre-existing gap between the generated API and the local static site's advertised API.

**Pre-existing baseline issues:** the upstream `npm test` script references a missing `scripts/test_lint.ts`; use the explicit extension test above alongside lint and the Python suite. Dependency installation also reports audit vulnerabilities in the unchanged upstream lockfile. This catalogue-only contribution does not claim to remediate those tooling/dependency issues or publish a production deployment.

## Attribution

Adapted from **Turbo EA Capabilities by Vincent Verdet, Turbo EA**, <https://github.com/vincentmakes/turbo-ea-capabilities>, **CC BY 4.0**. This fork adds the proposed Academic Publishing capability and value-stream extension and its supporting checks and documentation. Catalogue content remains CC BY 4.0; tooling remains MIT. See [`../NOTICE`](../NOTICE) and [`../LICENSING.md`](../LICENSING.md). No endorsement by the upstream author or cited organisations is implied.

## Sources

[1] https://publicationethics.org/guidance/guideline/ethical-guidelines-peer-reviewers — Ethical guidelines for peer reviewers | COPE: Committee on Publication Ethics
[2] https://publicationethics.org/guidance/guideline/retraction-guidelines — Retraction guidelines | COPE: Committee on Publication Ethics
[3] https://doaj.org/apply/transparency — Transparency & best practice – DOAJ
[4] https://www.crossref.org/documentation/register-maintain-records — Register and maintain your records - Crossref
[5] https://info.orcid.org/documentation/integration-guide/orcid-record — ORCID Record Schema - ORCID
[6] https://jats.nlm.nih.gov — Journal Article Tag Suite
[7] https://www.editeur.org/83/Overview — EDItEUR
[8] https://www.w3.org/TR/epub-a11y-11 — EPUB Accessibility 1.1
[9] https://www.countermetrics.org/code-of-practice — Code of Practice - COUNTER Metrics
[10] https://clockss.org — Home - Digital Preservation Services - CLOCKSS
[11] https://www.esac-initiative.org/about/transformative-agreements — Transformative agreements definition – OA Forward
[12] https://www.coalition-s.org/plan_s_principles — Plan S Principles | Plan S
[13] https://www.niso.org/publications/rp-9-2026-kbart — NISO RP-9-2026, KBART: Knowledge Bases and Related Tools Recommended Practice | NISO website
[14] https://www.doabooks.org/en/publishers — Publishers | Directory of Open Access Books
[15] https://www.w3.org/TR/WCAG22 — Web Content Accessibility Guidelines (WCAG) 2.2
[16] https://sfdora.org/read — San Francisco Declaration on Research Assessment
[17] https://www.niso.org/standards-committees/transfer — NISO Transfer Code of Practice
[18] https://publicationethics.org/guidance/guideline/guest-edited-collections — Guest edited collections | COPE: Committee on Publication Ethics
[19] https://asset.routledge.com/rt-files/AUTHOR/Guidelines/Proposal+guidelines.pdf — Routledge book proposal guidelines
[20] https://researcher-resources.acs.org/publish/special_issue — Special Issue and Guest Editor Guidelines
[21] https://www.cambridge.org/core/services/aop-file-manager/file/5a1eb62839b03b2b0605becf/Refreshed-Guide-Peer-Review-Books.pdf — Cambridge guide to peer reviewing book proposals
[22] https://www.springernature.com/gp/authors/publish-an-article/collections — Springer Nature Collections I Call for Papers | Publish your research | Springer Nature
[23] https://elicit.com — Elicit: AI for research & decision-making
[24] https://scite.ai — AI for Research | Scite
[25] https://www.scholarcy.com — Scholarcy - Knowledge made simple
[26] https://writefull.com — Writefull
[27] https://www.icmje.org/recommendations/browse/roles-and-responsibilities/defining-the-role-of-authors-and-contributors.html — ICMJE | Recommendations | Defining the Role of Authors and Contributors
[28] https://www.icmje.org/recommendations/browse/manuscript-preparation/preparing-for-submission.html — ICMJE | Recommendations | Preparing a Manuscript for Submission to a Medical Journal
[29] https://dev.springernature.com/terms-conditions — Terms and conditions | Springer API
[30] https://dev.springernature.com/tdm-reservation-policy — TDM Reservation policy | Springer API
