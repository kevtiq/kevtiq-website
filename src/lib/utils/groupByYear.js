export default function groupByYear(articles) {
	const grouped = {};
	articles.forEach((a) => {
		const year = a.date.toISOString().slice(0, 4);
		if (grouped[year]) grouped[year].push(a);
		else grouped[year] = [a];
	});
	return Object.entries(grouped).reverse();
}
