declare module "yoga-wasm-web" {
	export type YogaStatic = any;

	export type YogaWasm = {
		init(filepath?: string): Promise<YogaWasm>;
	} & YogaStatic;

	const init: (mod: WebAssembly.Module) => Promise<YogaWasm>;

	export default init;
}