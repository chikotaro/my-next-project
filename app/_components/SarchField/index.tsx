"use client";

import Image from "next/image";
import styles from "./index.module.css";
import { useRouter, useSearchParams } from "next/navigation";
import { Suspense, useEffect, useState } from "react";

function SearchFieldComponent() {
	const [isClient, setIsClient] = useState(false);
	const router = useRouter();

	useEffect(() => {
		setIsClient(true);
	}, []);

	const searchParams = useSearchParams();

	const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
		e.preventDefault();
		const q = e.currentTarget.elements.namedItem("q");
		if (q instanceof HTMLInputElement) {
			const params = new URLSearchParams();
			params.set("q", q.value.trim());
			router.push(`/news/search?${params.toString()}`);
		}
	};

	if (!isClient) {
		return null; // クライアントサイドでのみレンダリング
	}

	return (
		<div>
			<form onSubmit={handleSubmit} className={styles.form}>
				<label htmlFor="" className={styles.search}>
					<Image
						src="/search.svg"
						alt="検索"
						width={16}
						height={16}
						loading="eager"
					/>
					<input
						defaultValue={searchParams.get("q") ?? undefined}
						type="text"
						name="q"
						placeholder="キーワードを入力"
						className={styles.searchInput}
					/>
				</label>
			</form>
		</div>
	);
}

export default function SearchField() {
	return (
		<>
			<Suspense>
				<SearchFieldComponent />
			</Suspense>
		</>
	);
}
