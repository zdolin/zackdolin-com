export const timeAgo = (isoDate: string): string =>{
  const now = new Date();
  const past = new Date(isoDate);
  const diffMs = now.getTime() - past.getTime();

  // Convert milliseconds to days
  const diffDays = Math.floor(diffMs / (1000 * 60 * 60 * 24));

  if (diffDays < 1) {
      return "today";
  } else if (diffDays === 1) {
      return "1 day ago";
  } else {
      return `${diffDays} days ago`;
  }
}