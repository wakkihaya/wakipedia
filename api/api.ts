const QIITAAPIKEY = process.env.QIITA_API_KEY;

export const getMyQiitaPosts = async () => {
  const QIITA_ENDPOINT_URL = "https://qiita.com/api/v2/";

  const key = {
    headers: {
      Accept: "application/json",
      Authorization: `Bearer ${QIITAAPIKEY}`,
    },
  };

  try {
    const res = await fetch(
      `${QIITA_ENDPOINT_URL}authenticated_user/items?page=1&per_page=20`,
      key
    );
    const result = await res.json();
    return result;
  } catch (error) {
    console.error(error);
    return null;
  }
};
