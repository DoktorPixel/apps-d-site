export const timezones = [
  { value: "GMT-12:00", label: "(GMT-12:00) International Date Line West" },
  { value: "GMT-11:00", label: "(GMT-11:00) Midway Island, Samoa" },
  { value: "GMT-10:00", label: "(GMT-10:00) Hawaii" },
  { value: "GMT-09:00", label: "(GMT-09:00) Alaska" },
  { value: "GMT-08:00", label: "(GMT-08:00) Pacific Time (US & Canada)" },
  { value: "GMT-07:00", label: "(GMT-07:00) Mountain Time (US & Canada)" },
  { value: "GMT-06:00", label: "(GMT-06:00) Central Time (US & Canada)" },
  { value: "GMT-05:00", label: "(GMT-05:00) Eastern Time (US & Canada)" },
  { value: "GMT-04:00", label: "(GMT-04:00) Atlantic Time (Canada)" },
  { value: "GMT-03:00", label: "(GMT-03:00) Buenos Aires, Georgetown" },
  { value: "GMT-02:00", label: "(GMT-02:00) Mid-Atlantic" },
  { value: "GMT-01:00", label: "(GMT-01:00) Azores" },
  { value: "GMT+00:00", label: "(GMT) Western Europe Time, London" },
  { value: "GMT+01:00", label: "(GMT+01:00) Central Europe Time" },
  { value: "GMT+02:00", label: "(GMT+02:00) Eastern Europe Time" },
  { value: "GMT+03:00", label: "(GMT+03:00) Moscow, Baghdad" },
  { value: "GMT+04:00", label: "(GMT+04:00) Abu Dhabi, Baku" },
  { value: "GMT+05:00", label: "(GMT+05:00) Islamabad, Karachi" },
  { value: "GMT+06:00", label: "(GMT+06:00) Almaty, Dhaka" },
  { value: "GMT+07:00", label: "(GMT+07:00) Bangkok, Hanoi, Jakarta" },
  {
    value: "GMT+08:00",
    label: "(GMT+08:00) Beijing, Perth, Singapore, Hong Kong",
  },
  { value: "GMT+09:00", label: "(GMT+09:00) Tokyo, Seoul" },
  {
    value: "GMT+10:00",
    label: "(GMT+10:00) Brisbane, Canberra, Melbourne, Sydney",
  },
  { value: "GMT+11:00", label: "(GMT+11:00) Solomon Islands, New Caledonia" },
  { value: "GMT+12:00", label: "(GMT+12:00) Fiji, Kamchatka, Marshall Is." },
];

export const timeSlots = [
  { timeValue: "8:00 AM" },
  { timeValue: "9:00 AM" },
  { timeValue: "10:00 AM" },
  { timeValue: "11:00 AM" },
  { timeValue: "12:00 AM" },
  { timeValue: "1:00 PM" },
  { timeValue: "3:30 PM" },
  { timeValue: "4:30 PM" },
  { timeValue: "5:00 PM" },
];

export const filterArticlesByCategory = (articles, categorySlug) => {
  return articles.filter(article => {
    return article.categories.some(category => category.slug === categorySlug);
  });
};
