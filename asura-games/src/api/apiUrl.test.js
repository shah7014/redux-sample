import moment from "moment";

describe("Using moment", () => {
  it.skip("should get date", () => {
    const currentDate = moment().format("YYYY-MM-DD");
    const lastWeekDate = moment().subtract(7, "days").format("YYYY-MM-DD");
    const lastMonthDate = moment().subtract(1, "month").format("YYYY-MM-DD");
    const veryOldDate = moment().subtract(50, "years").format("YYYY-MM-DD");
    console.log("DATE:- ", currentDate);
    console.log("LAST_WEEK_DATE:- ", lastWeekDate);
    console.log("LAST_MONTH_DATE:- ", lastMonthDate);
    console.log("50_YEARS_DATE:- ", veryOldDate);
  });

  it("should get relative time", () => {
    const d1 = "2023-12-04T10:20:34";
    const r = moment(d1).fromNow();
    console.log(r);
  });
});
