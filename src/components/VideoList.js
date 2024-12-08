import { Flex } from 'antd';

import useModal from '../hooks/useModal';

import VideoCardButtons from './VideoCardButtons';
import VideoModal from './VideoModal';

import formatNumber from '../utils/formatNumber';

const VideoList = ({ video }) => {
  const { open, handleModalOpen, handleModalClose } = useModal();

  return (
    <>
      {open && (
        <VideoModal
          video={video}
          open={open}
          handleModalClose={handleModalClose}
        />
      )}
      <Flex className="video-list-card" gap={8}>
        <img src={video.thumbnail} onClick={handleModalOpen} alt="img" />
        <Flex vertical style={{ flexGrow: 1 }}>
          <h6 className="video-list-card-title">{video.title}</h6>
          <span>Views: {formatNumber(video.views)}</span>
          <span>Likes: {formatNumber(video.likes)}</span>
          <span>Added date: {video.date}</span>
          <VideoCardButtons video={video} />
        </Flex>
      </Flex>
    </>
  );
};
export default VideoList;
