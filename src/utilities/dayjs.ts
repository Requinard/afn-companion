import dayjs from "dayjs";
import localizedFormat from "dayjs/plugin/localizedFormat";
import localeData from "dayjs/plugin/localeData";
import sameOrAfter from "dayjs/plugin/isSameOrAfter";
import relativeTime from "dayjs/plugin/relativeTime";
import "dayjs/locale/en-gb";

dayjs.extend(localizedFormat);
dayjs.extend(localeData);
dayjs.extend(sameOrAfter);
dayjs.extend(relativeTime);

dayjs.locale("en-gb");
