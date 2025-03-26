//this is the function for formating the date and make sure on all the page it's stays same.
//it's takes two arguments timeStamps = e.g.,  and type = e.g., diff(it's give difference in current date and timeStamp)
//if type = "formatted" then it's return formated date and time formatted date -> 12:00 AM , 12 MAR 2025
export default function formateDate(timeStamp, type = "formate") {
  if (!timeStamp || !type) return null;
  const today = new Date();
  const date = new Date(timeStamp);

  if (type === "diff") {
    const timeDiff = today - date;
    const daysDiff = Math.floor(timeDiff / (1000 * 60 * 60 * 24));

    if (daysDiff === 0) return "Today";
    if (daysDiff === 1) return "Yesterday";
    if (daysDiff < 7) return `${daysDiff} days ago`;
    if (daysDiff < 30) {
      const weeks = Math.floor(daysDiff / 7);
      return weeks === 1 ? "1 week ago" : `${weeks} weeks ago`;
    }
    if (daysDiff < 365) {
      const months = Math.floor(daysDiff / 30);
      return months === 1 ? "1 month ago" : `${months} months ago`;
    }
    const years = Math.floor(daysDiff / 365);
    return years === 1 ? "1 year ago" : `${years} years ago`;
  } else {
    const hours = date.getHours();
    const minutes = date.getMinutes();
    const ampm = hours >= 12 ? "PM" : "AM";
    const formattedHours = hours % 12 || 12;
    const formattedMinutes = minutes < 10 ? `0${minutes}` : minutes;

    const day = date.getDate();
    const month = date.toLocaleString("default", { month: "short" });
    const year = date.getFullYear();

    return `${formattedHours}:${formattedMinutes} ${ampm}, ${day} ${month} ${year}`;
  }
}
