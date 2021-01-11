import { getTotalWatchTime, ratingToPercent } from "./utils";

/* 
UTILS TESTS
- getTotalWatchTime
- ratingToPercent
*/

describe("getTotalWatchTime", () => {
  it("converts a string of minutes to number of hours", () => {
    expect(getTotalWatchTime(60)).toBe(1);
  });
});

describe("ratingToPercent", () => {
  it("converts a string rating to number percent", () => {
    expect(ratingToPercent("6")).toBe(60);
  });
});
