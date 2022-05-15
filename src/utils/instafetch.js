const API = process.env.REACT_APP_INSTAGRAM;
const GET = (shortcode) =>
  fetch(
    `https://instagram28.p.rapidapi.com/media_info?short_code=${shortcode}`,
    {
      method: "GET",
      headers: {
        "X-RapidAPI-Host": "instagram28.p.rapidapi.com",
        "X-RapidAPI-Key": `${API}`,
      },
    }
  ).then((response) => response.json());

export { GET };
