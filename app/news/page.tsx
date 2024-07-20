import NewsList from "@/app/_components/NewsList";
import { getNewsList } from "../_libs/microcms";
import { NEWS_LIST_LIMIT } from "../_constants";
import Pagination from "@/app/_components/Pagination";

export default async function Page() {
	const { contents: news, totalCount } = await getNewsList({
		limit: NEWS_LIST_LIMIT,
	});

	return (
		<div>
			<NewsList news={news} />
			<Pagination totalCount={totalCount} />
		</div>
	);
}
