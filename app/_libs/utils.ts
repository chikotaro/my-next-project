import dayjs from "dayjs";
import utc from "dayjs/plugin/utc";
import tz from "dayjs/plugin/timezone";

dayjs.extend(utc);
dayjs.extend(tz);

export const formatDate = (date: string) => {
	return dayjs.utc(date).tz("Asia/Tokyo").format("YYYY-MM-DD");
};
