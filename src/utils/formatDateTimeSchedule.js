export default function formatDateTimeSchedule(dateString, time) {
  if (!dateString) return null;

  const date = new Date(dateString);
  if (isNaN(date.getTime())) return null; // Ensure it's a valid date

  const year = date.getFullYear();
  const month = String(date.getMonth() + 1).padStart(2, "0");
  const day = String(date.getDate()).padStart(2, "0");

  let formattedTime = "00:00:00+07:00"; // Default

  if (time) {
    // Ensure the time includes seconds and timezone
    const timeParts = time.match(
      /^(\d{2}):(\d{2})(?::(\d{2}))?(\+\d{2}:\d{2})?$/
    );
    if (timeParts) {
      const hours = timeParts[1];
      const minutes = timeParts[2];
      const seconds = timeParts[3] || "00"; // Default seconds to "00"
      const timezone = timeParts[4] || "+07:00"; // Default timezone
      formattedTime = `${hours}:${minutes}:${seconds}.00${timezone}`;
    }
  }

  return `${year}-${month}-${day}T${formattedTime}`;
}
