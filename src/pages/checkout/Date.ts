const getDaySuffix = (day) => {
  if (day >= 11 && day <= 13) {
    return "th";
  }
  switch (day % 10) {
    case 1:
      return "st";
    case 2:
      return "nd";
    case 3:
      return "rd";
    default:
      return "th";
  }
};

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
  const daySuffix = getDaySuffix(day);
  // Convert hour to 12-hour format and determine AM/PM
  const ampm = hour >= 12 ? "PM" : "AM";
  hour = hour % 12 || 12; // Convert 0 to 12

  // Format the date and time
  const formattedDate = `${day}${daySuffix} ${month} ${year} at ${hour}:${minute
    .toString()
    .padStart(2, "0")} ${ampm}`;

  return formattedDate;
};

export const getExpectedDate = () => {
  const currentDate = new Date();
  const expectedDate = new Date(currentDate);
  expectedDate.setDate(currentDate.getDate() + 4); // Add 4 days to the current date

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

  const day = expectedDate.getDate();
  const month = months[expectedDate.getMonth()];
  const year = expectedDate.getFullYear();

  const daySuffix = getDaySuffix(day);

  return `${day}${daySuffix} ${month} ${year}`;
};
