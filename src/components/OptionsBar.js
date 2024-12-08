import { Button, Flex, Popconfirm, Tooltip } from 'antd';
import React from 'react';
import {
  UnorderedListOutlined,
  TableOutlined,
  SortAscendingOutlined,
  SortDescendingOutlined,
  StarOutlined,
  StarFilled,
} from '@ant-design/icons';

import { SORTERS, VIDEOS_LAYOUTS } from '../consts';

const { GRID, LIST } = VIDEOS_LAYOUTS;
const { UP, DOWN } = SORTERS;

const OptionsBar = ({
  sorter,
  handleSorter,
  showFavourite,
  handleFavourite,
  videosLayout,
  handleVideosLayout,
  handleDelete,
}) => {
  const getVariant = (boolen) => (boolen ? 'solid' : 'outlined');

  return (
    <Flex justify="center" gap={8}>
      <Tooltip title="Grid">
        <Button
          variant={getVariant(videosLayout === GRID)}
          color="primary"
          icon={<TableOutlined />}
          onClick={() => handleVideosLayout(GRID)}
        />
      </Tooltip>
      <Tooltip title="List">
        <Button
          variant={getVariant(videosLayout === LIST)}
          color="primary"
          icon={<UnorderedListOutlined />}
          onClick={() => handleVideosLayout(LIST)}
        />
      </Tooltip>
      <Tooltip title="Liked">
        <Button
          variant={getVariant(showFavourite)}
          color="primary"
          icon={showFavourite ? <StarFilled /> : <StarOutlined />}
          onClick={handleFavourite}
        >
          Liked
        </Button>
      </Tooltip>
      <Tooltip title="Sort ascend">
        <Button
          variant={getVariant(sorter === UP)}
          color="primary"
          icon={<SortAscendingOutlined />}
          onClick={() => handleSorter(UP)}
        />
      </Tooltip>
      <Tooltip title="Sort descend">
        <Button
          variant={getVariant(sorter === DOWN)}
          color="primary"
          icon={<SortDescendingOutlined />}
          onClick={() => handleSorter(DOWN)}
        />
      </Tooltip>
      <Popconfirm
        onConfirm={handleDelete}
        title="Are you sure you want to clear all saved videos?"
      >
        <Button color="primary" variant="outlined">
          Clear All
        </Button>
      </Popconfirm>
    </Flex>
  );
};

export default OptionsBar;
