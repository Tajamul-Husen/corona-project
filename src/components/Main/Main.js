import React, { useEffect, useState } from "react";
import "./Main.scss";
import { LastUpdated, Cards } from "../Cards";
import { CountryPicker } from "../CountryPicker";
import { LineChart, BarChart } from "../Charts";
import {
  fetchDailyData,
  fetchGlobalData,
  fetchSpecificCountry,
} from "../../api";

function Main() {
  const [region, setRegion] = useState("Global");
  const [dailyData, setDailyData] = useState({});
  const [countData, setCountData] = useState({});
  const [lastDate, setLastDate] = useState(null);
  const [loader, setLoader] = useState(true);

  const getRegion = (country) => {
    setLoader(true);
    setRegion(country);
  };

  useEffect(() => {
    if (region === "Global") {
      Promise.all([fetchDailyData(), fetchGlobalData()])
        .then(([res1, res2]) => {
          setDailyData(res1);
          setCountData(res2);
          if (lastDate === null) setLastDate(res2.lastUpdate);
          setLoader(false);
        })
        .catch((err) => {
          console.log(err);
          setLoader(false);
        });
    } else {
      fetchSpecificCountry(region)
        .then((data) => {
          setCountData(data);
          setLoader(false);
        })
        .catch((err) => {
          console.log(err);
        });
    }
  }, [region, lastDate]);

  return (
    <div className="main">
      <div className="main-container">
        <LastUpdated lastDate={lastDate}></LastUpdated>
        <Cards dataCount={countData}></Cards>
        <CountryPicker currentRegion={getRegion}></CountryPicker>
        {region === "Global" ? (
          <LineChart dailyData={dailyData} loader={loader}></LineChart>
        ) : (
          <BarChart
            countryData={countData}
            loader={loader}
            region={region}
          ></BarChart>
        )}
      </div>
    </div>
  );
}

export default Main;
