export default function formatStartDateTime(dateString) {
  if (!dateString) return null;

  const date = new Date(dateString);

  const year = date.getFullYear();
  const month = String(date.getMonth() + 1).padStart(2, "0");
  const day = String(date.getDate()).padStart(2, "0");

  const hours = "00";
  const minutes = "00";
  const seconds = "00";
  const milliseconds = "00+07:00";

  return `${year}-${month}-${day}T${hours}:${minutes}:${seconds}.${milliseconds}`;
}
