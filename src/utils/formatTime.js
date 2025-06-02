export default function formatTime(timeString) {
  const formattedTime = timeString ? timeString?.split("+")[0]: "00:00";
  return formattedTime;
}
