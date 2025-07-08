export function calculateDuration(start: string, end: string): string {
  const startTime = new Date(start);
  const endTime = new Date(end);
  const diffMs = endTime.getTime() - startTime.getTime();

  const minutes = Math.floor((diffMs / 1000 / 60) % 60);
  const hours = Math.floor(diffMs / 1000 / 60 / 60);

  return `${hours}h ${minutes}m`;
}

export function formatDateTime(iso: string): string {
  const date = new Date(iso);
  return date.toLocaleDateString();
}
