import { useState } from 'react';

function resolveTimezone() {
  try {
    return Intl.DateTimeFormat().resolvedOptions().timeZone || 'Asia/Jakarta';
  } catch (err) {
    return 'Asia/Jakarta';
  }
}

/**
 * Returns the visitor's resolved IANA timezone.
 */
export default function useClock() {
  const [timezone] = useState(resolveTimezone);

  return { timezone };
}
