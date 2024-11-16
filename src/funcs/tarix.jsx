const monthNames = [
  "yanvar", "fevral", "mart", "aprel", "may", "iyun",
  "iyul", "avqust", "sentyabr", "oktyabr", "noyabr", "dekabr"
];

export function FormatDate(incomeDate) {
  const date = new Date(incomeDate);

  // Tarixi əldə etmək
  const day = String(date.getDate()).padStart(2, "0"); // Gün
  const month = monthNames[date.getMonth()]; // Ay adı
  const year = date.getFullYear(); // İl

  // Saatı əldə etmək
  const hours = String(date.getHours()).padStart(2, "0"); // Saat
  const minutes = String(date.getMinutes()).padStart(2, "0"); // Dəqiqə

  // Formatlaşdırılmış nəticə
  const formattedDate = `${day} ${month} ${year} ${hours}:${minutes}`;

  return formattedDate
}

export function OnlyDate(incomeDate) {
  const date = new Date(incomeDate);

  // Tarixi əldə etmək
  const day = String(date.getDate()).padStart(2, "0"); // Gün
  const monthNames = [
    "yanvar", "fevral", "mart", "aprel", "may", "iyun",
    "iyul", "avqust", "sentyabr", "oktyabr", "noyabr", "dekabr"
  ];
  const month = monthNames[date.getMonth()]; // Ay adı
  const year = date.getFullYear(); // İl

  // Formatlaşdırılmış nəticə
  const formattedDate = `${day} ${month} ${year}`;
  return formattedDate
}