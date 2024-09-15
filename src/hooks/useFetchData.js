import axios from "axios";
import { useCallback, useEffect, useState } from "react";

export default function useFetchData(url) {
  const [data, setData] = useState({
    labels: [],
    values: [],
  });

  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);

  const fetchData = useCallback(async () => {
    setLoading(true);
    try {
      const response = await axios.get(url);

      const rawData = response.data[0]["2024"];
      const labels = [];
      const values = [];

      rawData.forEach((monthData) => {
        Object.values(monthData).forEach((datesArrays) => {
          datesArrays.forEach((dataObjs) => {
            const [date, value] = Object.entries(dataObjs)[0];
            labels.push(date.split(",")[0]);
            values.push(value);
          });
        });
      });

      setData({ labels, values });
    } catch (error) {
      setError("There was an error loading data!");
    } finally {
      setLoading(false);
    }
  }, [url]);

  useEffect(() => {
    fetchData();
  }, [fetchData]);

  return { data, error, loading };
}
