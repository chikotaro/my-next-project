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
						{article.thumbnail ? (
							<Image
								src={article.thumbnail.url}
								alt=""
								width={article.thumbnail.width}
								height={article.thumbnail.height}
								className={styles.image}
							/>
						) : (
							<Image
								src={"/no-image.png"}
								alt=""
								width={1200}
								height={630}
								className={styles.image}
							/>
						)}
						<dl className={styles.content}>
							<dt className={styles.title}>{article.title}</dt>
							<dd className={styles.meta}>
								{article.category ? (
									<Category category={article.category} />
								) : (
									<div className={styles.meta}>category none</div>
								)}

								<Date date={article.publishedAt ?? article.createdAt} />
							</dd>
						</dl>
					</Link>
				</li>
			))}
		</ul>
	);
}
