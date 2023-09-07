export const getCurrentDate = () => {
  const currentDate = new Date();
  const months = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];

  // Get the day, month, year, hour, and minute
  const day = currentDate.getDate();
  const month = months[currentDate.getMonth()];
  const year = currentDate.getFullYear();
  let hour = currentDate.getHours();
  const minute = currentDate.getMinutes();

  // Determine the suffix for the day (e.g., 21st, 22nd, 23rd, 24th, etc.)
  const daySuffix =
    day % 10 === 1 && day !== 11
      ? "st"
      : day % 10 === 2 && day !== 12
      ? "nd"
      : day % 10 === 3 && day !== 13
      ? "rd"
      : "th";

  // Convert hour to 12-hour format and determine AM/PM
  const ampm = hour >= 12 ? "PM" : "AM";
  hour = hour % 12 || 12; // Convert 0 to 12

  // Format the date and time
  const formattedDate = `${day}${daySuffix} ${month} ${year} at ${hour}:${minute
    .toString()
    .padStart(2, "0")} ${ampm}`;

  return formattedDate;
};
