import React, { useState, useEffect } from "react";
import "./CountryPicker.scss";
import Option from "./Option";
import { fetchAllCountries } from "../../api";

let initialState = [];

function SelectCountry({ currentRegion }) {
  const [countryList, setCountryList] = useState(initialState);
  const [currentCountry, setCurrentCountry] = useState("Global");
  const [value, setValue] = useState("");
  const [active, setActive] = useState(false);

  useEffect(() => {
    fetchAllCountries()
      .then((data) => {
        const list = [
          "Global",
          ...data.countries.map((country) => country.name),
        ];
        initialState = list;
        setCountryList(list);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  const filterCountry = (e) => {
    let val = e.target.value;
    const newState = initialState.filter((country) =>
      country.toLowerCase().includes(val.toLowerCase())
    );
    setCountryList(newState);
  };

  const selectSpecificCountry = (e) => {
    setCurrentCountry(e.target.textContent);
    currentRegion(e.target.textContent);
    setCountryList(initialState);
    setValue("");
    setActive(false);
  };

  const data =
    countryList &&
    countryList.map((country, i) => {
      return (
        <Option key={i} country={country} onClick={selectSpecificCountry} />
      );
    });

  const toggleSelect = () => {
    setActive(!active);
  };

  const closeSelect = (e) => {
    if (!e.relatedTarget) {
      setValue("");
      setActive(false);
    }
  };

  return (
    <div className="select-container">
      <div className="select-container-box" tabIndex="0" onBlur={closeSelect}>
        <div className="selected" onClick={toggleSelect}>
          <span
            className={
              active ? "selected-triangle rotate-triangle" : "selected-triangle"
            }
          ></span>
          <p className="selected-value">{currentCountry}</p>
        </div>
        <div className={active ? "search-country hook" : "search-country"}>
          <input
            type="text"
            className="search-country-input"
            placeholder="Search Country"
            onChange={(e) => setValue(e.target.value)}
            value={value}
            onKeyUp={filterCountry}
          />
        </div>
        <div
          className={active ? "options-container active" : "options-container"}
        >
          {data}
        </div>
      </div>
    </div>
  );
}

export default SelectCountry;
