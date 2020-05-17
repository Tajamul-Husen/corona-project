export const getDailyData = (arrData, limit) => {
  const TotalConfirmed = [];
  const TotalDeaths = [];
  const TotalReportDate = [];
  const limitData = arrData.slice(arrData.length - limit);

  limitData.forEach((data) => {
    TotalConfirmed.push(data.confirmed.total);
    TotalDeaths.push(data.deaths.total);
    TotalReportDate.push(data.reportDate);
  });
  
  return {
    TotalConfirmed,
    TotalDeaths,
    TotalReportDate,
  };
};
