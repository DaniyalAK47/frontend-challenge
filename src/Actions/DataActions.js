import axios from "axios";

const URL = "https://api.giphy.com/v1/gifs";

export const getData = (link, limit, rating) => {
  var request = {};
  request = {
    method: "GET",
    url: `${URL}/${link}?api_key=AcGL163D6cZZRy3JfxIIiVrRqVGdgrM7&limit=${limit}&rating=${rating}`,
  };

  return axios(request)
    .then((response) => {
      return response;
    })
    .catch((err) => {
      if (err) {
        console.log(err);
      }
    });
};
