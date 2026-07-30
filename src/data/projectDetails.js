/**
 * Extra content shown only inside the project detail modal.
 *
 * Kept separate from `projects.js` on purpose:
 * - projects.js  -> short data used by the project cards (grid view)
 * - projectDetails.js -> long-form content used only when a card is opened
 *
 * Keyed by the project's `title` (must match exactly what's in projects.js).
 * If a project has no entry here, the modal just falls back to the
 * short `description` from projects.js.
 */

const projectDetails = {
  'POS Mobile Application': {
    // Can be a single string or an array of paragraphs
    longDescription: [
      'A point-of-sale application built for small retail businesses to manage sales, inventory, and receipts from a single mobile device.',
      'My role was to develop the frontend and mobile interface, ensuring a smooth user experience for store owners and staff.',
      ,'Features :'
    ],
    role: 'Team Developer',
    year: '2026',
    highlights: [
      'Barcode-based product lookup',
      'Real-time inventory tracking',
      'Sales reports and daily summaries',
      'Offline mode with automatic sync'
    ],
    links: {
      repo: 'https://github.com/Pakaoww/POS_moblie_project',
      live: null
    }
  },

  'ESP32 Smart Pet Feeder (IHAVEFeeder)': {
    longDescription: [
      'An IoT-based automatic pet feeder that dispenses food on a schedule and can be controlled remotely through a companion mobile interface.',
      'My role was coding the firmware for the ESP32 microcontroller.',
      ,'Features :'
    ],
    role: 'Team Developer',
    year: '2026',
    highlights: [
      'Scheduled and manual feeding modes',
      'Remote control via web app',
      'Food-level sensor with low-food alerts',
      'Wi-Fi connectivity with auto-reconnect'
    ],
    links: {
      repo: 'https://drive.google.com/drive/folders/1a43cRkYmUOwfWe6T-gFzwizUzEY-vq_4',
      live: null
    }
  },
  'Smart Watering System': {
    longDescription: [
      'An IoT-based automatic watering system that monitors soil moisture.',
      'My role was coding the firmware for the ESP32 microcontroller.',
      ,'Features :'
    ],
    role: 'Team Developer',
    year: '2026',
    highlights: [
      'Detects soil moisture levels',
      'Automatic watering based on moisture thresholds',
      'Alert when the water tank level is low',
    ],
  },
  'Medi-Lens Application': {
    longDescription: [
      'An IoT-based automatic pet feeder that dispenses food on a schedule and can be controlled remotely through a companion mobile interface.',
      'My role was summarizing the project and documenting the development process.',
      ,'Features :'
    ],
    role: 'Team Developer',
    year: '2026',
    highlights: [
      'Upload medical report images',
      'OCR text extraction',
      'AI-powered report explanation',
      'Interactive AI chatbot for health-related questions',
      'Responsive design for desktop and mobile'
    ],
    links: {
      repo: 'https://github.com/Pakaoww/AI-Medilens',
      live: null
    }
  }
};

export default projectDetails;