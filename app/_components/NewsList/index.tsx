import styles from "./index.module.css";
import Image from "next/image";
import { News } from "@/app/_libs/microcms";
import Category from "@/app/_components/Category";
import Date from "@/app/_components/Date";
import Link from "next/link";

type Props = {
	news: News[];
};

export default function NewsList({ news }: Props) {
	if (news.length === 0) {
		return <p>No news found</p>;
	}
	return (
		<ul>
			{news.map((article) => (
				<li key={article.id} className={styles.list}>
					<Link href={`/news/${article.id}`} className={styles.link}>
						<Image
							className={styles.image}
							src="/no-image.png"
							alt=""
							width={1200}
							height={600}
						/>
						<dl className={styles.content}>
							<dt className={styles.title}>{article.title}</dt>
							<dd className={styles.meta}>
								<Category category={article.category} />
								<Date date={article.publishedAt ?? article.createdAt} />
							</dd>
						</dl>
					</Link>
				</li>
			))}
		</ul>
	);
}
