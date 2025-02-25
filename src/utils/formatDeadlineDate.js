export default function formatDeadlineDate(isoString) {
  const date = new Date(isoString);
  return date
    .toLocaleString("en-US", {
      weekday: "long",
      day: "2-digit",
      month: "long",
      year: "numeric",
      hour: "2-digit",
      minute: "2-digit",
      hour12: true,
    })
    .replace(",", "");
}
