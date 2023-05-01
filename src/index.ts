import { Resvg, initWasm } from "@resvg/resvg-wasm";
import satori, { init } from "satori";
import initYoga from "yoga-wasm-web";
import yogaWasm from "../node_modules/yoga-wasm-web/dist/yoga.wasm";
import resvgWasm from "../node_modules/@resvg/resvg-wasm/index_bg.wasm";
import generateView from "./view";
import { Roboto, OpenSans } from "./vendor";
import type { ViewData } from "./view";
import cleanURL from "./cleanURL";

let initialized = false;
const initialize = async () =>
	Promise.all([
		await initWasm(resvgWasm),
		init(await initYoga(yogaWasm)),
	]);

interface Environment {
	readonly KV: KVNamespace;
}

const cache = caches.default;

const handler: ExportedHandler<Environment> = {
	async fetch(request, env, ctx) {
		if (!initialized) {
			await initialize();
			initialized = true;
		}
		let path = new URL(request.url).pathname;
		if (path.endsWith("/")) {
			path = path.slice(0, -1);
		}
		if (path === "favicon.ico") {
			return fetch("https://www.cloudflare.com/favicon.ico");
		}
		const cached = await cache.match(request);
		if (cached) {
			return cached;
		}
		const data = await env.KV.get<ViewData>(`og${path}`, "json");
		if (!data) {
			return new Response("Post unavailable", { status: 404 });
		}
		if (data.meta) {
			data.meta = cleanURL(data.meta);
		}
		data.contributors.map(e => e.pfp && (e.pfp = cleanURL(e.pfp)));
		ctx.waitUntil(env.KV.put(`og${path}`, JSON.stringify(data)));
		const svg = await satori(generateView(data), {
			height: 630,
			width: 1200,
			fonts: [
				{
					name: "Roboto",
					data: Roboto.buffer,
					weight: 900,
					style: "normal",
				},
				{
					name: "Open Sans",
					data: OpenSans.buffer,
					weight: 300,
					style: "normal",
				}
			],
		});

		const res = new Response(new Resvg(svg).render().asPng(), {
			headers: {
				"content-type": "image/png",
				"cache-control": "public, max-age=3600",
			},
		});
		ctx.waitUntil(cache.put(request, res.clone()));
		return res;
	},
};
export default handler;
