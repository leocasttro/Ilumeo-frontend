export function calculateDuration(start: string, end: string): string {
  const startTime = new Date(start);
  const endTime = new Date(end);
  const diffMs = endTime.getTime() - startTime.getTime();

  const minutes = Math.floor((diffMs / 1000 / 60) % 60);
  const hours = Math.floor(diffMs / 1000 / 60 / 60);

  const paddedMins = String(minutes).padStart(2, '0');

  return `${hours}h ${paddedMins}m`;
}

export function formatDateTime(iso: string): string {
  const date = new Date(iso);
  return date.toLocaleDateString();
}


export function formatTime(seconds: number): string {
    const hrs = Math.floor(seconds / 3600);
    const mins = Math.floor((seconds % 3600) / 60);

    const paddedMins = String(mins).padStart(2, '0');
    return `${hrs}h ${paddedMins}m`;
  };