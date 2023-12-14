import axios from "axios";
import { useEffect, useState } from "react";
const FetchAxiosData = (url) => {
  const [data, setData] = useState([]);

  useEffect(() => {
    axios
      .get(url)
      .then((res) => {
        setData(res.data);
        return data;
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
      });
  }, [url]);
  return data;
};
export default FetchAxiosData;
