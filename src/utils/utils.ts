/* 
UTILS
- getTotalWatchTime
- ratingToPercent
*/

// turns a string of minutes into hours with 2 decimal places
export const getTotalWatchTime = (Runtimes: number): number => {
  return JSON.parse((Runtimes / 60).toFixed(2));
};

// turns a ratings string to a number percent
export const ratingToPercent = (rating: string): number => {
  return (parseFloat(rating) / 10) * 100;
};
