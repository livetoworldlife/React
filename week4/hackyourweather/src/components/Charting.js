import React, { useState, useEffect } from "react";
import { useParams, useHistory } from "react-router-dom";
import Loader from 'react-loader-spinner';
import {
  AreaChart,
  Area,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from "recharts";

export default function Charting() {
  const { id } = useParams();
  const history = useHistory();

  const [cityForecastList, setCityForecastList] = useState([]);
  const [cityName, setCityName] = useState("");
  const [isLoading, setLoading] = useState(false);
  const [hasError, setError] = useState(false);
  const API_KEY = process.env.REACT_APP_OPENWEATHERMAP_API_KEY;

  useEffect(() => {
    const getCityForecastData = async () => {
      setLoading(true);
      try {
        const response = await fetch(`https://api.openweathermap.org/data/2.5/forecast?id=${id}&appid=${API_KEY}&units=metric`);

        const cityForecastData = await response.json();
        setCityForecastList(cityForecastData.list);
        setCityName(cityForecastData.city.name);
        setLoading(false);
      } catch (err) {
        setError(true);
        setLoading(false);
      }
    };
    getCityForecastData();
  }, [id, API_KEY]);

  return (
    <div className="charts">
      <h2>{cityName}</h2>
      {isLoading && <Loader type="ThreeDots" color="blue" height="100" width="40" />}
      {hasError && <h2>Something went wrong...</h2>}

      <ResponsiveContainer width="100%" height={400}>
        <AreaChart data={cityForecastList}
          margin={{ top: 10, right: 30, left: 0, bottom: 0 }}>
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="dt_txt" />
          <YAxis dataKey="main.temp" />
          <Tooltip />
          <Area
            type="monotone"
            dataKey="main.temp"
            name="temp"
            stroke="#96A8AC"
            fill="#82BFDB"
          />
        </AreaChart>
      </ResponsiveContainer>
      <button className="backBtn" onClick={() => { history.goBack() }}>
        Back to Home
      </button>
    </div>
  );
}
