/**
 * Creating url based on url base and passed params.
 */
const createUrl = (urlBase = '', params = {}) => {
  const url = new URL(urlBase);

  Object.entries(params).forEach(([key, value]) => {
    url.searchParams.append(key, value);
  });

  return url.toString();
};

export default createUrl;
