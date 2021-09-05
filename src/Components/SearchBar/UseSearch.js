import { useState } from "react";
import axios from "axios";
import _ from "lodash";

export default function UseSearch() {
  const [value, setvalue] = useState("");
  const [loading, setLoading] = useState(false);
  const [data, setData] = useState([]);
  const [options, setOptions] = useState([]);
  const [gifSelect, setGifSelect] = useState({});
  const [detailsModal, setDetailsModal] = useState(false);

  const handleChange = _.debounce((event, values) => {
    // if (open && options.length === 0) {
    //   setLoading(true);
    // }
    // setvalue;
    let options = [];

    var request = {};
    request = {
      method: "GET",
      url: `https://api.giphy.com/v1/gifs/search?api_key=AcGL163D6cZZRy3JfxIIiVrRqVGdgrM7&q=${values}&limit=10&offset=0&rating=g&lang=en`,
    };

    return axios(request)
      .then((res) => {
        console.log(res.data.data, "SEARCHHHH DATA");
        setData(res.data.data);
        res.data.data.map((val) => setOptions([...options, val.title]));
        setOptions(res.data.data.map((val) => val.title));
        // setOptions([...options, ...res.data.data]);
        setLoading(false);
        return res;
      })
      .catch((err) => {});
  }, 500);

  return {
    loading,
    options,
    handleChange,
    gifSelect,
    setGifSelect,
    detailsModal,
    setDetailsModal,
    data,
  };
}
