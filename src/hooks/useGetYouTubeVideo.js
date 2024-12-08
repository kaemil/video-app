import { useContext, useState } from 'react';
import { notification } from 'antd';
import { v4 as uuidv4 } from 'uuid';

import { YouTubeVideoContext } from '../context';

import parseYouTubeVideoId from '../utils/parseYouTubeVideoId';
import createUrl from '../utils/createUrl';

import { API_YOUTUBE_VIDEO, YOUTUBE_API_KEY } from '../consts';

/**
 * Handling api request.
 */
const useGetYouTubeVideo = ({ setUrl, apiKey }) => {
  const { setVideos } = useContext(YouTubeVideoContext);
  const [isLoading, setIsLoading] = useState(false);

  /**
   * Parse data from api to required format.
   */
  const parseRequiredData = (fetchData) => {
    const video = fetchData.items[0];
    const date = new Date();

    return {
      id: uuidv4(),
      videoId: video.id,
      views: Number(video.statistics.viewCount),
      likes: Number(video.statistics.likeCount),
      title: video.snippet.localized.title,
      date: `${date.getDate()}-${date.getMonth() + 1}-${date.getFullYear()}`,
      thumbnail:
        video.snippet.thumbnails?.maxres?.url ||
        video.snippet.thumbnails?.high?.url,
      liked: false,
    };
  };

  /**
   * Fetch api data from youtube.
   */
  const getYouTubeVideo = async (url) => {
    const videoId = parseYouTubeVideoId(url);
    const yotubeURL = createUrl(API_YOUTUBE_VIDEO, {
      id: videoId,
      key: YOUTUBE_API_KEY || apiKey,
      part: 'snippet,statistics',
    });

    setIsLoading(true);

    try {
      const response = await fetch(yotubeURL);
      const data = await response.json();

      const videoData = parseRequiredData(data);

      setVideos((prev) => [...prev, videoData]);
    } catch {
      notification.error({ message: 'Error occured.', duration: 3 });
    } finally {
      setIsLoading(false);
      setUrl('');
    }
  };

  return { isLoading, getYouTubeVideo };
};

export default useGetYouTubeVideo;
