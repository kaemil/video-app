import VideoList from './VideoList';
import { Flex } from 'antd';

import VideoGrid from './VideoGrid';

import { VIDEOS_LAYOUTS } from '../consts';

const { GRID, LIST } = VIDEOS_LAYOUTS;

const VideoContainer = ({ videosLayout, videos }) => {
  if (videosLayout === LIST) {
    return (
      <Flex className="videos-list-wrapper">
        {videos.map((video) => (
          <VideoList key={video.id} video={video} />
        ))}
      </Flex>
    );
  }

  if (videosLayout === GRID) {
    return (
      <Flex className="videos-grid-wrapper">
        {videos.map((video) => (
          <VideoGrid key={video.id} video={video} />
        ))}
      </Flex>
    );
  }

  return null;
};

export default VideoContainer;
