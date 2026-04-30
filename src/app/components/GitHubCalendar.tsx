'use client';

import { GitHubCalendar } from 'react-github-calendar';

export default function GitHubActivityCalendar() {
  return (
    <GitHubCalendar
      username="genius-asif-hub"
      colorScheme="dark"
      theme={{
        dark: ['#0f172a', '#1e1b4b', '#3730a3', '#4f46e5', '#818cf8'],
      }}
      blockSize={13}
      blockMargin={4}
      fontSize={12}
    />
  );
}
