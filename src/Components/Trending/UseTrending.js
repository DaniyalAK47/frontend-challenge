import { useState, useEffect } from "react";
import axios from "axios";
import _ from "lodash";

export default function UseTrending() {
  const [initialLoad, setInitialLoad] = useState(true);
  const [loading, setLoading] = useState(false);
  const [loadMore, setLoadMore] = useState(false);
  const [trendingGifs, setTrendingGifs] = useState([]);
  const [offset, setOffset] = useState(25);
  const [detailsModal, setDetailsModal] = useState(false);
  const [gifSelect, setGifSelect] = useState({});
  const [gifFav, setGifFav] = useState([]);
  const [ordering, setOrdering] = useState("random");

  const URL = "https://api.giphy.com/v1/gifs";

  useEffect(() => {
    setLoading(true);
    getTrendingGifs();
    getFavStorage();
  }, [offset]);

  useEffect(() => {
    if (gifFav.length === 0) {
      getFavStorage();
    } else {
      saveFavStorage();
    }
  }, [gifFav]);

  useEffect(() => {
    if (ordering !== "random") {
      setTrendingGifs(
        _.orderBy(trendingGifs, ["trending_datetime"], [ordering])
      );
    }
  }, [ordering, trendingGifs]);

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    if (loadMore) {
      setOffset(offset + 25);
    }
  }, [loadMore]);

  const handleScroll = () => {
    if (
      window.innerHeight + document.documentElement.scrollTop !==
      document.scrollingElement.scrollHeight
    )
      return;
    if (!loadMore) {
      setLoadMore(true);
    }
  };

  const addRemoveFav = (gif) => {
    if (gifFav.some((e) => e.id === gif.id)) {
      setGifFav(gifFav.filter((e) => e.id !== gif.id));
    } else {
      setGifFav([...gifFav, gif]);
    }
  };

  const saveFavStorage = () => {
    // console.log(gifFav, "befaore save");
    if (localStorage.getItem("favourite")) {
      localStorage.removeItem("favourite");
    }
    localStorage.setItem("favourite", JSON.stringify(gifFav));
  };

  const getFavStorage = () => {
    setGifFav(JSON.parse(localStorage.getItem("favourite")));
  };

  const getTrendingGifs = () => {
    var request = {};
    request = {
      method: "GET",
      url: `${URL}/trending?api_key=AcGL163D6cZZRy3JfxIIiVrRqVGdgrM7&offset=${offset}&rating=g`,
    };

    return axios(request)
      .then((res) => {
        console.log(res.data.data, "DATAAAAAAAAA");
        setTrendingGifs([...trendingGifs, ...res.data.data]);
        setLoading(false);
        setInitialLoad(false);
        setLoadMore(false);
      })
      .catch((err) => {
        if (err) {
          console.log(err);
        }
      });
  };

  return {
    loading,
    trendingGifs,
    detailsModal,
    setDetailsModal,
    gifSelect,
    setGifSelect,
    initialLoad,
    gifFav,
    setGifFav,
    ordering,
    setOrdering,
    addRemoveFav,
  };
}
