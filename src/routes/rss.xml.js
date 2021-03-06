import { getArticles } from '$lib/process-files';
const render = (
	items
) => `<rss xmlns:dc="http://purl.org/dc/elements/1.1/" xmlns:content="http://purl.org/rss/1.0/modules/content/" xmlns:atom="http://www.w3.org/2005/Atom" version="2.0">
<channel>
	<title>crinkles.io RSS Feed</title>
	${items
		.map(
			(item) => `
		<item>
			<title>${item.title}</title>
			<link>https://crinkles.io/writing/${item.slug}</link>
			<description>${item.description}</description>
			<pubDate>${new Date(item.date).toUTCString()}</pubDate>
		</item>
	`
		)
		.join('\n')}
</channel>
</rss>`;

export async function get() {
	const articles = await getArticles();
	const feed = render(articles);
	return {
		body: feed,
		headers: {
			'Cache-Control': `max-age=0, s-max-age=${600}`, // 10 minutes
			'Content-Type': 'application/rss+xml'
		}
	};
}
