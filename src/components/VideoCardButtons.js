import { DeleteOutlined, StarFilled, StarOutlined } from '@ant-design/icons';
import { Button, Flex, Popconfirm } from 'antd';
import { useContext } from 'react';

import { YouTubeVideoContext } from '../context';

const VideoCardButtons = ({ video }) => {
  const { setVideos } = useContext(YouTubeVideoContext);

  const handleVideoLike = (id) => {
    setVideos((prev) => [
      ...prev.map((item) =>
        item.id === id ? { ...item, liked: !item.liked } : item
      ),
    ]);
  };

  const handleVideoDelete = (id) => {
    setVideos((prev) => [...prev.filter((item) => item.id !== id)]);
  };

  return (
    <Flex className="video-list-buttons-wrapper" gap={16}>
      <Button
        color="primary"
        variant={video.liked ? 'solid' : 'outlined'}
        icon={video.liked ? <StarFilled /> : <StarOutlined />}
        onClick={() => handleVideoLike(video.id)}
      />
      <Popconfirm
        getPopupContainer={(trigger) => trigger.parentNode}
        onConfirm={() => handleVideoDelete(video.id)}
        title="Are you sure you want to delete this video?"
      >
        <Button color="danger" variant="outlined" icon={<DeleteOutlined />} />
      </Popconfirm>
    </Flex>
  );
};

export default VideoCardButtons;
