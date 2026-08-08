import { useEffect, useState } from "react";
import sx from "@/components/DateTime/DateTime.module.scss";

const localeConfig: Intl.DateTimeFormatOptions = {
  timeZone: "Europe/Berlin",
  hour: "2-digit",
  minute: "2-digit",
  day: "2-digit",
  month: "2-digit",
  year: "numeric",
};

export function DateTime() {
  const [dateTime, setDateTime] = useState(
    new Date().toLocaleString("de-DE", localeConfig),
  );

  useEffect(() => {
    const id = setInterval(() => {
      setDateTime(new Date().toLocaleTimeString("de-DE", localeConfig));
    }, 1000 * 30);

    return () => clearInterval(id);
  }, []);

  const [date, time] = dateTime.split(",");

  return (
    <strong>
      <div className={sx.date_time}>
        <small>{time}</small>
        <small>{date}</small>
      </div>
    </strong>
  );
}
