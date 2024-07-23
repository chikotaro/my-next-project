import NewsList from "@/app/_components/NewsList";
import { getNewsList } from "../_libs/microcms";
import { NEWS_LIST_LIMIT } from "../_constants";
import Pagination from "@/app/_components/Pagination";
import SearchField from "../_components/SarchField";


export default async function Page() {
	const { contents: news, totalCount } = await getNewsList({
		limit: NEWS_LIST_LIMIT,
	});

	return (
		<div>
			<SearchField />
			<NewsList news={news} />
			<Pagination totalCount={totalCount} />
		</div>
	);
}
