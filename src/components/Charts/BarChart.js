import React from "react";
import { Bar, defaults } from "react-chartjs-2";
import { barOptions } from "./options";
import "./LineChart.scss";
import { Loader } from "../Loader";

function BarChart({ countryData, loader, region }) {
  defaults.global.defaultFontColor = "#fff";
  defaults.global.defaultFontSize = 13;
  defaults.global.defaultFontStyle = "bold";

  return loader ? (
    <Loader></Loader>
  ) : countryData ? (
    <div className="canvas-container">
      <Bar
        data={{
          labels: ["confirmed", "deaths", "recovered"],
          datasets: [
            {
              label: "",
              data: [
                countryData.confirmed.value,
                countryData.deaths.value,
                countryData.recovered.value,
              ],
              backgroundColor: [
                "rgba(255, 159, 64, 0.2)",
                "rgba(255, 99, 132, 0.2)",
                "rgba(54, 162, 235, 0.2)",
              ],
              borderColor: [
                "rgba(255, 206, 86, 1)",
                "rgba(255, 99, 132, 1)",
                "rgba(54, 162, 235, 1)",
              ],
              borderWidth: 2,
              pointRadius: 2,
            },
          ],
        }}
        width={400}
        height={350}
        options={{
          ...barOptions,
          title: { ...barOptions.title, text: region },
        }}
      ></Bar>
    </div>
  ) : null;
}

export default BarChart;
