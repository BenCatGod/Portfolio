/**
 * Extra content shown only inside the activity detail modal.
 * Same pattern as projectDetails.js — keyed by the activity's `title`
 * (must match exactly what's in activities.js).
 */

const activityDetails = {
  'BU Openhouse': {
    longDescription: [
      'Teamed up with three classmates for a 48-hour hackathon focused on solving problems for new students on campus. We chose to tackle the confusion new students face navigating a large campus during their first weeks.',
      'Built a mobile app with turn-by-turn indoor/outdoor navigation, a searchable directory of buildings and offices, and a class-schedule import feature that auto-generates a daily walking route.'
    ],
    role: 'Frontend & Mobile Developer',
    year: '2024',
    highlights: [
      'Built the entire mobile UI in React Native within 48 hours',
      'Integrated Firebase for real-time building/location data',
      'Placed 2nd out of 30+ teams',
      'Presented the final demo to a panel of judges'
    ],
    links: {
      repo: 'https://github.com/yourname/campus-nav-hackathon',
      live: null
    }
  },

  'Guest Speaker — Intro to Embedded Systems': {
    longDescription: [
      'Invited by the department to give an introductory talk to first-year students on embedded systems, covering what microcontrollers are, how they differ from regular computers, and where they show up in everyday devices.',
      'Followed the talk with a short hands-on demo blinking LEDs and reading a sensor on an ESP32 board, then answered questions about getting started with hardware projects.'
    ],
    role: 'Guest Speaker',
    year: '2023',
    highlights: [
      'Presented to an audience of ~60 first-year students',
      'Live demo using an ESP32 dev board',
      'Prepared beginner-friendly slides and a follow-up resource sheet'
    ],
    links: {
      repo: null,
      live: null
    }
  }
};

export default activityDetails;