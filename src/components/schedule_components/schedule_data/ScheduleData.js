const allScheduledClasses = [
  {
    title: "Crossfit",
    time: "9:00 AM - 10:00 AM",
    trainer: "Ismail Smith",
    day: "Monday",
    spots: "24",
    bgSrc: "bg-strength-banner",
    id: 1,
  },
  {
    title: "Boxing Fundamentals",
    time: "10:00 AM - 11:00 AM",
    trainer: "Lacy McDavid",
    day: "Monday",
    spots: "40",
    bgSrc: "bg-boxing-banner",
    id: 2,
  },
  {
    title: "Vinyasa Flow Yoga",
    time: "6:00 PM - 7:00 PM",
    trainer: "Becky Hammons",
    day: "Monday",
    spots: "10",
    bgSrc: "bg-mind-body-banner",
    id: 3,
  },
  {
    title: "Body Combat",
    time: "7:00 PM - 8:00 PM",
    trainer: "Jherry James",
    day: "Monday",
    spots: "5",
    bgSrc: "bg-strength-banner",
    id: 4,
  },
  {
    title: "HIIT Cycling",
    time: "8:00 AM - 9:00 AM",
    trainer: "Klay Thompson",
    day: "Tuesday",
    spots: "15",
    bgSrc: "bg-cycling-banner",
    id: 5,
  },
  {
    title: "Boxing Conditioning",
    time: "1:00 PM - 2:00 PM",
    trainer: "Floyd Mayweather",
    day: "Tuesday",
    spots: "12",
    bgSrc: "bg-boxing-banner",
    id: 6,
  },
  {
    title: "Muay Thai for Fitness",
    time: "6:00 PM - 7:00 PM",
    trainer: "Joseph Chau",
    day: "Tuesday",
    spots: "12",
    bgSrc: "bg-muay-thai-banner",
    id: 7,
  },
  {
    title: "Cardio Blast",
    time: "9:00 AM - 10:00 AM",
    trainer: "Megan Lee",
    day: "Wednesday",
    spots: "20",
    bgSrc: "bg-cardio-banner",
    id: 8,
  },
  {
    title: "Power Pilates",
    time: "10:30 AM - 11:30 AM",
    trainer: "Jasmine Chen",
    day: "Wednesday",
    spots: "15",
    bgSrc: "bg-mind-body-banner",
    id: 9,
  },
  {
    title: "Strength & Conditioning",
    time: "12:00 PM - 1:00 PM",
    trainer: "John Smith",
    day: "Wednesday",
    spots: "10",
    bgSrc: "bg-strength-banner",
    id: 10,
  },
  {
    title: "Cycling for Endurance",
    time: "6:00 PM - 7:00 PM",
    trainer: "Michael Nguyen",
    day: "Wednesday",
    spots: "25",
    bgSrc: "bg-cycling-banner",
    id: 11,
  },
  {
    title: "Boxing for Beginners",
    time: "9:00 AM - 10:00 AM",
    trainer: "Sarah Lee",
    day: "Thursday",
    spots: "12",
    bgSrc: "bg-boxing-banner",
    id: 12,
  },
  {
    title: "Yoga for Flexibility",
    time: "12:00 PM - 1:00 PM",
    trainer: "Samantha Johnson",
    day: "Thursday",
    spots: "15",
    bgSrc: "bg-mind-body-banner",
    id: 13,
  },
  {
    title: "Advanced Strength Training",
    time: "4:00 PM - 5:00 PM",
    trainer: "Alex Wong",
    day: "Thursday",
    spots: "8",
    bgSrc: "bg-strength-banner",
    id: 14,
  },
  {
    title: "Muay Thai Kickboxing",
    time: "8:00 PM - 9:00 PM",
    trainer: "David Kim",
    day: "Friday",
    spots: "10",
    bgSrc: "bg-muay-thai-banner",
    id: 15,
  },
  {
    title: "HIIT & Tabata",
    time: "11:00 AM - 12:00 PM",
    trainer: "Emily Liu",
    day: "Friday",
    spots: "20",
    bgSrc: "bg-cardio-banner",
    id: 16,
  },
  {
    title: "Cycling for Interval Training",
    time: "3:00 PM - 4:00 PM",
    trainer: "Eric Chen",
    day: "Friday",
    spots: "15",
    bgSrc: "bg-cycling-banner",
    id: 17,
  },
  {
    title: "Mindful Meditation",
    time: "10:00 AM - 11:00 AM",
    trainer: "Jennifer Kim",
    day: "Saturday",
    spots: "10",
    bgSrc: "bg-mind-body-banner",
    id: 18,
  },
  {
    title: "Boxing for Advanced",
    time: "2:00 PM - 3:00 PM",
    trainer: "Ryan Lee",
    day: "Saturday",
    spots: "8",
    bgSrc: "bg-boxing-banner",
    id: 19,
  },
  {
    title: "Cycling for Endurance",
    time: "5:00 PM - 6:00 PM",
    trainer: "Jessica Chen",
    day: "Saturday",
    spots: "25",
    bgSrc: "bg-cycling-banner",
    id: 20,
  },
  {
    title: "Yoga for Flexibility",
    time: "9:00 AM - 10:00 AM",
    trainer: "Sophie Johnson",
    day: "Sunday",
    spots: "15",
    bgSrc: "bg-mind-body-banner",
    id: 21,
  },
  {
    title: "Spin & Strength",
    time: "11:00 AM - 12:00 PM",
    trainer: "Adam Lee",
    day: "Sunday",
    spots: "10",
    bgSrc: "bg-strength-banner",
    id: 22,
  },
  {
    title: "Boxing Bootcamp",
    time: "2:00 PM - 3:00 PM",
    trainer: "Jasmine Chen",
    day: "Sunday",
    spots: "8",
    bgSrc: "bg-boxing-banner",
    id: 23,
  },
  {
    title: "Cycling HIIT",
    time: "4:00 PM - 5:00 PM",
    trainer: "Erica Nguyen",
    day: "Sunday",
    spots: "12",
    bgSrc: "bg-cycling-banner",
    id: 24,
  },
];

export default allScheduledClasses;