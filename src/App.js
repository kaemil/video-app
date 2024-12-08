import { Flex, Pagination, Row } from 'antd';
import { useState, useEffect } from 'react';

import { YouTubeVideoContext } from './context';

import usePagination from './hooks/usePagination';

import VideoContainer from './components/VideoContainer';
import BlankDivider from './components/BlankDivider';
import OptionsBar from './components/OptionsBar';
import SearchBar from './components/SearchBar';

import readFromLocalStorage from './utils/readFromLocalStorage';
import saveToLocalStorage from './utils/saveToLocalStorage';
import getPaginatedData from './utils/getPaginatedData';

import { DATA_HARDCODE, SORTERS, VIDEOS_LAYOUTS } from './consts';

import './css/style.css';

const { GRID } = VIDEOS_LAYOUTS;
const { UP } = SORTERS;

const App = () => {
  const [videos, setVideos] = useState([]);
  const [videosLayout, setVideosLayout] = useState(GRID);
  const [showFavourite, setShowFavourite] = useState(false);
  const [sorter, setSorter] = useState(UP);

  const pagination = usePagination({ total: videos.length });

  useEffect(() => {
    const videos = readFromLocalStorage('videos') || DATA_HARDCODE || [];
    setVideos(videos);
  }, []);

  useEffect(() => {
    saveToLocalStorage('videos', videos);
  }, [videos]);

  const handleVideosLayout = (layout) => setVideosLayout(layout);

  const handleFavourite = () => setShowFavourite((prev) => !prev);

  const handleSorter = (sorter) => setSorter(sorter);

  const handleDelete = () => {
    setVideos([]);
  };

  const likedVideos = videos.filter(({ liked }) =>
    showFavourite ? liked : true
  );

  const sortedVideos = sorter === UP ? likedVideos : likedVideos.reverse();

  const paginatedVideos = getPaginatedData(
    sortedVideos,
    pagination.current,
    pagination.pageSize
  );

  return (
    <YouTubeVideoContext.Provider value={{ videos, setVideos }}>
      <Flex vertical gap={16}>
        <Flex className="menu-wrapper" vertical gap={16}>
          <SearchBar />
          <OptionsBar
            sorter={sorter}
            handleSorter={handleSorter}
            showFavourite={showFavourite}
            handleFavourite={handleFavourite}
            videosLayout={videosLayout}
            handleVideosLayout={handleVideosLayout}
            handleDelete={handleDelete}
          />
        </Flex>
        <VideoContainer videosLayout={videosLayout} videos={paginatedVideos} />
        <Row justify="center">
          <Pagination showSizeChanger {...pagination} />
        </Row>
        <BlankDivider />
      </Flex>
    </YouTubeVideoContext.Provider>
  );
};

export default App;
