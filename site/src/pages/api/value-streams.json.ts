// SPDX-License-Identifier: MIT
import type { APIRoute } from "astro";
import { valueStreams } from "../../data/load.ts";

export const prerender = true;

export const GET: APIRoute = () =>
  new Response(JSON.stringify(valueStreams, null, 2), {
    headers: {
      "content-type": "application/json; charset=utf-8",
      "cache-control": "public, max-age=300, s-maxage=86400",
    },
  });
