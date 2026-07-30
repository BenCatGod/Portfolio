import project1Image from '../assets/project1.png';
import project2Image from '../assets/project2.png';
import project3Image from '../assets/project3.png';
import project4Image from '../assets/project4.png';

const projects = [
  {
    tone: 1,
    number: '01',
    title: 'POS Mobile Application',
    description:
      'A point-of-sale application built for small retail businesses to manage sales, inventory, and receipts from a single mobile device.',
    tags: ['.NET MAUI', 'C#', 'SQLite'],
    url: '#',
    image: project1Image
  },

  {
    tone: 2,
    number: '02',
    title: 'ESP32 Smart Pet Feeder (IHAVEFeeder)',
    description:
      'An IoT-based automatic pet feeder that dispenses food on a schedule and can be controlled remotely through a companion mobile interface.',
    tags: ['ESP32', 'C++', 'Arduino IDE', 'Mobile App', 'IoT'],
    url: '#',
    codeLabel: 'About project',
    image: project2Image
  },
  {
    tone: 3,
    number: '03',
    title: 'Smart Watering System',
    description:
      'An IoT-based automatic watering system that monitors soil moisture.',
    tags: ['ESP32', 'C++', 'Arduino IDE', 'IoT'],
    url: '#',
    hideCode: true,
    image: project3Image
  },
  {
    tone: 4,
    number: '04',
    title: 'Medi-Lens Application',
    description:
      'MediLens is an AI-powered web application that uses OCR and NLP to convert medical reports into easy-to-understand language, allowing users to chat with AI about their health results.',
    tags: ['Python', 'Typhoon AI', 'React'],
    url: '#',
    image: project4Image
  },

];

export default projects;
