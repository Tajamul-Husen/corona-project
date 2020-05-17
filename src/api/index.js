import { getDailyData } from "../utils";

const countriesUrl = "https://covid19.mathdro.id/api/countries";
const dailyDataUrl = "https://covid19.mathdro.id/api/daily";
const globalDataUrl = "https://covid19.mathdro.id/api";

export const fetchGlobalData = async () => {
  try {
    const res = await fetch(globalDataUrl);
    const { confirmed, recovered, deaths, lastUpdate } = await res.json();
    return {
      confirmed: { title: "Confirmed", value: confirmed.value },
      recovered: { title: "Recovered", value: recovered.value },
      deaths: { title: "Deaths", value: deaths.value },
      lastUpdate,
    };
  } catch (err) {
    console.log(err);
  }
};

export const fetchAllCountries = async () => {
  try {
    const res = await fetch(countriesUrl);
    const data = await res.json();
    return data;
  } catch (err) {
    console.log(err);
  }
};

export const fetchDailyData = async () => {
  try {
    const res = await fetch(dailyDataUrl);
    const data = await res.json();
    return getDailyData(data, 30);
  } catch (err) {
    console.log(err);
  }
};

export const fetchSpecificCountry = async (country) => {
  try {
    const res = await fetch(`${countriesUrl}/${country}`);
    const { confirmed, recovered, deaths } = await res.json();
    return {
      confirmed: { title: "Confirmed", value: confirmed.value },
      recovered: { title: "Recovered", value: recovered.value },
      deaths: { title: "Deaths", value: deaths.value },
    };
  } catch (err) {
    console.log(err);
  }
};
