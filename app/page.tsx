import Image from "next/image";
import styles from "./page.module.css";
import ButtonLink from "@/app/_components/ButtonLink";
import { News } from "@/app/_libs/microcms";
import NewsList from "./_components/NewsList";

const data: { contents: News[] } = {
	contents: [
		{
			id: "1",
			title: "渋谷にオフィスを移転しました",
			category: {
				name: "更新情報",
			},
			publishedAt: "2021-10-01",
			createdAt: "2021-10-01",
		},
		{
			id: "2",
			title: "当社CEOが業界リーダーTOP3に選出されました",
			category: {
				name: "更新情報",
			},
			publishedAt: "2021-09-01",
			createdAt: "2021-09-01",
		},
		{
			id: "3",
			title: "テストの記事",
			category: {
				name: "更新情報",
			},
			publishedAt: "2021-08-01",
			createdAt: "2021-08-01",
		},
	],
};

export default function Home() {
	return (
		<div>
			<section className={styles.top}>
				<div>
					<h1 className={styles.title}>テクノロジーの力で世界を変える</h1>
					<p className={styles.description}>
						私たちは市場をリードしているグローバルテックカンパニーです。
					</p>
					<Image
						className={styles.bgimg}
						src="/img-mv.jpg"
						alt=""
						width={4000}
						height={1200}
					/>
				</div>
			</section>
			<section className={styles.news}>
				<h2 className={styles.newsTitle}>News</h2>
				<NewsList news={data.contents} />
				<div className={styles.newsLink}>
					<ButtonLink href="/news">もっと見る</ButtonLink>
				</div>
			</section>
		</div>
	);
}
