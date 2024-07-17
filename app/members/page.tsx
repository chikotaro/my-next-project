import { link } from "fs";
import styles from "./page.module.css";
import Image from "next/image";
import { getMemberList } from "../_libs/microcms";
import { MEMBERS_LIST_LIMIT } from "../_constants";


export default async function Page() {
	const data = await getMemberList({limit: MEMBERS_LIST_LIMIT});
		return (
		<div className={styles.container}>
			{data.contents.map((member) => (
				<li key={member.id} className={styles.list}>
					<Image
						src={member.image.url}
						alt=""
						width={member.image.width}
						height={member.image.height}
						className={styles.image}
					/>
					<dl>
						<dt className={styles.name}>{member.name}</dt>
						<dd className={styles.position}>{member.position}</dd>
						<dd className={styles.profile}>{member.profile}</dd>
					</dl>
				</li>
			))}
		</div>
	);
}
