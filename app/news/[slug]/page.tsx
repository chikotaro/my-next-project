import { notFound } from "next/navigation";
import Article from "@/app/_components/Article";
import ButtonLink from "@/app/_components/ButtonLink";
import { getNewsDetail } from "@/app/_libs/microcms";
import styles from "./page.module.css";
import SearchField from "@/app/_components/SarchField";

type Props = {
	params: {
		slug: string;
	};
	searchParams: {
		dk?: string;
	};
};

export const revalidate = 60;

export default async function Page({
	params,
	searchParams: searchParams,
}: Props) {
	const data = await getNewsDetail(params.slug, {
		draftKey: searchParams.dk,
	}).catch(notFound);
	return (
		<>
			<SearchField />
			<Article data={data} />
			<div className={styles.footer}>
				<ButtonLink href="/news">ニュース一覧へ</ButtonLink>
			</div>
		</>
	);
}
