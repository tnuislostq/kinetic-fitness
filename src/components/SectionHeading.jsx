export const billingLabels = {
  1: 'Monthly',
  3: 'Every 3 months',
  12: 'Yearly',
};

export const discountMap = {
  1: 0,
  3: 0.1,
  12: 0.2,
};

export const plans = [
  {
    n: 'Starter',
    m: 1499,
    t: 'Get going',
    f: ['Gym floor', 'Lockers', '2 classes a month'],
  },
  {
    n: 'Strength + Classes',
    m: 2499,
    t: 'Most chosen',
    f: ['Unlimited classes', 'Gym floor', 'Monthly progress check'],
  },
  {
    n: 'Personal Coaching',
    m: 5999,
    t: 'Fastest results',
    f: ['12 one-to-one sessions', 'Custom plan', 'Nutrition guidance'],
  },
];

export const coaches = [
  {
    name: 'Karan Singh',
    role: 'Head coach · Strength',
    bio: 'Beginner-friendly lifting. Squat, deadlift and press done right.',
    badge: 'NSCA-CPT · 9 yrs',
  },
  {
    name: 'Priya Rai',
    role: 'Yoga & Mobility',
    bio: 'Fix posture, tight hips and desk-job back pain.',
    badge: 'RYT-500 · 7 yrs',
  },
  {
    name: 'Arjun Mehta',
    role: 'HIIT & Conditioning',
    bio: 'High-energy circuits scaled to every fitness level.',
    badge: 'ACE-CPT · 6 yrs',
  },
];

export const weekDays = ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];

export const schedule = {
  '6:00 am': ['Strength Basics|Karan', 'Power Lifting|Karan', 'Strength Basics|Karan', 'Power Lifting|Karan', 'Strength Basics|Karan', ''],
  '7:00 am': ['', '', '', '', '', 'Full Body|Karan'],
  '7:30 am': ['HIIT 45|Arjun', '', 'HIIT 45|Arjun', '', 'HIIT 45|Arjun', 'Yoga|Priya'],
  '6:30 pm': ['Mobility|Priya', 'Yoga|Priya', 'Mobility|Priya', 'Yoga|Priya', 'Mobility|Priya', ''],
  '7:30 pm': ['', 'Core Burn|Arjun', '', 'Boxing|Arjun', '', ''],
};

export const stories = [
  ['I never lifted before. Karan taught me every movement. I now deadlift my own bodyweight.', 'Neha S.', 'Member, 8 months'],
  ['The 6 AM batch keeps me honest. Classes start on time and the floor is always clean.', 'Rohit M.', 'Member, 1 year'],
  ['Mobility class fixed my back pain from desk work. Booking on WhatsApp means I never skip.', 'Ankita P.', 'Member, 5 months'],
];

export const sectionStyles = {
  title: 'built for results',
};
