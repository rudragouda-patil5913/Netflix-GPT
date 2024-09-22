export const BG_IMG =
  "https://assets.nflxext.com/ffe/siteui/vlv3/85ff76db-39e5-423a-afbc-97d3e74db71b/null/IN-en-20240909-TRIFECTA-perspective_b22117e0-4610-4d57-a695-20f77d241a4a_large.jpg";

export const NFX_LOGO =
  "https://cdn.cookielaw.org/logos/dd6b162f-1a32-456a-9cfe-897231c7763c/4345ea78-053c-46d2-b11e-09adaef973dc/Netflix_Logo_PMS.png";

export const IMG_CDN_URL = "https://image.tmdb.org/t/p/w500/";

export const API_OPTIONS = {
  method: "GET",
  headers: {
    accept: "application/json",
    Authorization: "Bearer " + process.env.REACT_APP_TMDB_KEY,
  },
};

export const SUPPORTED_LANGUAGES = [
  {
    identifier: "English",
    name: "en",
  },
  {
    identifier: "French",
    name: "fr",
  },
  {
    identifier: "Hindi",
    name: "hi",
  },
];
