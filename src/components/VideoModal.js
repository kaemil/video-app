import { Modal } from 'antd';
import React from 'react';

import { YOUTUBE_EMBED_URL } from '../consts';

const VideoModal = ({ video, handleModalClose, open }) => (
  <Modal
    width={1000}
    open={open}
    title={null}
    footer={null}
    closable={false}
    onCancel={handleModalClose}
  >
    <div className="video-modal">
      <iframe
        className="video-modal"
        src={`${YOUTUBE_EMBED_URL}${video.videoId}`}
        title="YouTube video player`"
      />
    </div>
  </Modal>
);

export default VideoModal;
