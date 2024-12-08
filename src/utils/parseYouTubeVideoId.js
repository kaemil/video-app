/**
 * Parsing youtube video id.
 */
const parseYouTubeVideoId = (url = '') => {
  if (!url) return;

  const urlParams = new URL(url).searchParams;

  return urlParams.get('v');
};

export default parseYouTubeVideoId;
