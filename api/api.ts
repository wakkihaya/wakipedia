const QIITAAPIKEY = process.env.QIITA_API_KEY;

//TODO: medium,
//TODO: Twitter

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

export const getMyNotePosts = async () => {
  const NOTE_ENDPOINT_URL = "https://note.com/api/v2/creators/";

  try {
    const res = await fetch(
      `${NOTE_ENDPOINT_URL}wakkihaya/contents?kind=note&page=1`
    );
    const result = await res.json();
    return result.data.contents;
  } catch (error) {
    console.error(error);
    return null;
  }
};
