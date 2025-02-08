export default function formatTime(timeString) {
  const formattedTime = timeString.split("+")[0];
  return formattedTime;
}
