import Link from "next/link";
import Image from "next/image";
import type { News } from "@/app/_libs/microcms";
import Date from "../Date";
import Category from "../Category";
import styles from "./index.module.css";

type Props = {
	data: News;
};

interface ArticleProps {
	data: {
		category: {
			id: string;
			// 他のカテゴリーのフィールド
		} | null;
		// 他のデータのフィールド
	};
}

export default function Article({ data }: Props) {
	return (
		<main>
			<h1 className={styles.title}>{data.title}</h1>
			<p className={styles.description}>{data.description}</p>
			<div className={styles.meta}>
				{data.category ? (
					<Link
						href={`/news/category/${data.category.id}`}
						className={styles.categoryLink}
					>
						<Category category={data.category} />
					</Link>
				) : (
					<div className={styles.categoryLink}>カテゴリーが利用できません</div>
				)}
				{/* <Link
          href={`/news/category/${data.category.id}`}
          className={styles.categoryLink}
        >
          <Category category={data.category} />
        </Link> */}
				<Date date={data.publishedAt ?? data.createdAt} />
			</div>
			{data.thumbnail && (
				<Image
					src={data.thumbnail.url}
					alt=""
					className={styles.thumbnail}
					width={data.thumbnail.width}
					height={data.thumbnail.height}
				/>
			)}
			<div
				className={styles.content}
				dangerouslySetInnerHTML={{
					__html: data.content ?? "",
				}}
			/>
		</main>
	);
}
