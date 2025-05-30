// All the helper functions should must be there.
// The functions that you're using multiple times must be there.
// e.g. formatDateToMMDDYYYY, formatEpochToMMDDYYYY, etc.

export const getColSpanClass = (span) => `col-span-${span}`;
export function formatDate(date) {
    console.log(date);
  
    const year = date?.getFullYear();
    const month = String(date.getMonth() + 1).padStart(2, "0"); // Months are 0-indexed
    const day = String(date.getDate()).padStart(2, "0"); // Ensure two-digit day
    return `${year}-${month}-${day}`;
  }
  