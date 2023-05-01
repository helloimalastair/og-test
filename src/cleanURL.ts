export default function cleanURL(urlString: string): string {
	const url = new URL(urlString);
	url.hostname = "blog.cloudflare.com";
	url.pathname = url.pathname.replace("/cdn/", "/cdn-cgi/");
	return url.toString();
}