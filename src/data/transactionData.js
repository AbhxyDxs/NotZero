export const EMI_DATA = [
  { month: "Oct 2025", principal: 9609, interest: 901, total: 10510, status: "Paid" },
  { month: "Nov 2025", principal: 9737, interest: 667, total: 10404, status: "Paid" },
  { month: "Dec 2025", principal: 9867, interest: 537, total: 10404, status: "Paid" },
  { month: "Jan 2026", principal: 9999, interest: 405, total: 10404, status: "Expected" },
  { month: "Feb 2026", principal: 10132, interest: 272, total: 10404, status: "Expected" },
  { month: "Mar 2026", principal: 10270, interest: 137, total: 10407, status: "Expected" },
];

export const GST_DATA = [
  { month: "Oct 25", interest: 901, gst: 162.18, status: "Paid" },
  { month: "Nov 25", interest: 667, gst: 120.06, status: "Paid" },
  { month: "Dec 25", interest: 537, gst: 96.66, status: "Paid" },
  { month: "Jan 26", interest: 405, gst: 72.90, status: "Expected" },
  { month: "Feb 26", interest: 272, gst: 48.96, status: "Expected" },
  { month: "Mar 26", interest: 137, gst: 24.66, status: "Expected" },
];

// Statement images -- public/statements
export const STATEMENT_FILES = [
  { label: 'Oct 25', file: '/statements/oct-2025.jpg' },
  { label: 'Nov 25', file: '/statements/nov-2025.jpg' },
  { label: 'Dec 25', file: '/statements/dec-2025.jpg' },
  { label: 'Jan 26', file: '/statements/jan-2026.jpg' },
  { label: 'Feb 26', file: '/statements/feb-2026.jpg' },
  { label: 'Mar 26', file: '/statements/mar-2026.jpg' },
];