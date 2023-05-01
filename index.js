import { readdirSync, statSync, readFileSync } from "fs";
import { join, dirname } from "path";
import { fileURLToPath } from "url";

const __dirname = dirname(fileURLToPath(import.meta.url));

const getAllFiles = (dirPath) => {
	const arr = [];
	readdirSync(dirPath).forEach((file) => {
		if (statSync(`${dirPath}/${file}`).isDirectory()) {
			arr.push(...getAllFiles(`${dirPath}/${file}`));
		} else if (!file.includes(".meta.json")) {
			arr.push(join(__dirname, dirPath, "/", file));
		}
	});
	return arr;
};

const files = getAllFiles("./.wrangler/state/kv/KV");

function sliceIntoChunks(arr, chunkSize) {
	const res = [];
	for (let i = 0; i < arr.length; i += chunkSize) {
		const chunk = arr.slice(i, i + chunkSize);
		res.push(chunk);
	}
	return res;
}
const chunks = sliceIntoChunks(files, 100);

for (const chunk of chunks) {
	const arr = await Promise.all(
		chunk.map(async (e) => [
			e
				.replace("D:\\og-test\\.wrangler\\state\\kv\\KV\\_", "")
				.replaceAll("\\", "/"),
			JSON.parse(readFileSync(e, "utf-8")),
		]),
	);

	await fetch("https://quickupload.alastair-technologies.workers.dev/", {
		method: "POST",
		body: JSON.stringify(arr),
		headers: {
			"Content-Type": "application/json",
		},
	});
}
