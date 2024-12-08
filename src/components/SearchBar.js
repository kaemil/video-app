import { Button, Flex, Input, Row } from 'antd';
import { useState } from 'react';

import useGetYouTubeVideo from '../hooks/useGetYouTubeVideo';

const SearchBar = () => {
  const [url, setUrl] = useState('');
  const [apiKey, setApiKey] = useState('');

  const { isLoading, getYouTubeVideo } = useGetYouTubeVideo({ setUrl, apiKey });

  const handleUrlChange = ({ target: { value } }) => setUrl(value);
  const handleApiKey = ({ target: { value } }) => setApiKey(value);

  return (
    <Flex justify="center" align="center" vertical gap={16}>
      <Row>
        Only for show up purpose enter YouTube API KEY to make successful API
        request. First 5 vidoes are hardcoded.
      </Row>
      <Input
        className="menu-input"
        allowClear
        value={apiKey}
        placeholder="Youtube API key..."
        onChange={handleApiKey}
      />
      <Input
        allowClear
        className="menu-input"
        disabled={isLoading}
        value={url}
        placeholder="Youtube url..."
        onChange={handleUrlChange}
      />
      <Button
        loading={isLoading}
        color="primary"
        variant="solid"
        disabled={!url}
        onClick={() => getYouTubeVideo(url)}
      >
        Add Video
      </Button>
    </Flex>
  );
};

export default SearchBar;
