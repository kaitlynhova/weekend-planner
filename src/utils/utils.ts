/* 
UTILS
- getTotalWatchTime
- ratingToPercent
*/

// turns a ratings string to a number percent
export const ratingToPercent = (rating: string): number => {
  return (parseFloat(rating) / 10) * 100;
};
