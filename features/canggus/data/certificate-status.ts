// Honest validity label for a certificate scan. The page is static, so the
// status is computed when the page is built (each deploy re-checks it).
const MONTHS = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];

export function formatDate(iso: string): string {
  const [y, m, d] = iso.split("-").map(Number);
  return `${d} ${MONTHS[m - 1]} ${y}`;
}

export function certificateStatus(validUntil: string, today = new Date().toISOString().slice(0, 10)) {
  const valid = validUntil >= today;
  return { valid, label: `${valid ? "Valid until" : "Expired"} ${formatDate(validUntil)}` };
}
