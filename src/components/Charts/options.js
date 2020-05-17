export const lineOptions = {
  responsive: true,
  scales: {
    xAxes: [
      {
        type: "time",
        ticks: {
          display: true,
          //   autoSkip: false,
          maxRotation: 0,
          minRotation: 0,
          maxTicksLimit: 5,
        },
      },
    ],
  },
  legend: {
    labels: {
      // This more specific font property overrides the global property
      fontColor: "#fff",
      fontSize: 14,
      fontStyle: "bold",
    },
  },
};

export const barOptions = {
  legend: {
    display: false,
  },
  title: {
    display: true,
    text: "Country",
    fontSize: 15,
  },
};
