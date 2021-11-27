import React, { useState, useEffect } from 'react';
import SearchBar from './components/SearchBar';
import VideoContainer from './components/VideoContainer';
import OptionsBar from './components/OptionsBar';
import getVimeoId from './functions/getVimeoId';
import getYouTubeId from './functions/getYouTubeId';
import PaginationComponent from './components/PaginationComponent';
import shortid from 'shortid';
import './css/style.css';
import './css/fontello/css/fontello.css';

// DELETE KEYS BEFORE UPLOAD //
const YOUTUBE_API_KEY = '';
const VIMEO_API_KEY = '';
// DELETE KEYS BEFORE UPLOAD //

function App() {
	const [url, setUrl] = useState('');
	const [videos, setVideos] = useState([]);
	const [showFavourite, setShowFavourite] = useState(false);
	const [selectSource, setSelectSource] = useState('Select source');
	const [sortedUp, setSortedUp] = useState(true);
	const [displayList, setDisplayList] = useState(false);
	const [displayPage, setDisplayPage] = useState(1);
	const [page, setPage] = useState(1);
	const liked = false;

	// Setting and getting local storage
	useEffect(() => {
		if (localStorage.getItem('videos') !== null) {
			const stored = JSON.parse(localStorage.getItem('videos'));
			setVideos([...stored]);
		}
	}, []);

	useEffect(() => {
		localStorage.setItem('videos', JSON.stringify(videos));
	}, [videos]);

	// Setting input value (controlled form)
	const handleChange = (e) => {
		setUrl(e.target.value);
	};

	// Fetching data from YouTube or Vimeo
	const handleClick = () => {
		const date = new Date();
		if (selectSource === 'youtube') {
			const YOUTUBE_ID = getYouTubeId(url);
			const yotubeURL = `https://youtube.googleapis.com/youtube/v3/videos?part=snippet%2Cstatistics&id=${YOUTUBE_ID}&key=${YOUTUBE_API_KEY}`;
			fetch(yotubeURL)
				.then((res) => res.json())
				.then((data) => {
					setVideos([
						...videos,
						{
							id: shortid.generate(),
							filmId: YOUTUBE_ID,
							source: 'youtube',
							views: data.items[0].statistics.viewCount,
							likes: data.items[0].statistics.likeCount,
							title: data.items[0].snippet.localized.title,
							date: `${date.getDate()}-${
								date.getMonth() + 1
							}-${date.getFullYear()}`,
							thumbnail: data.items[0].snippet.thumbnails.maxres.url,
							liked,
						},
					]);
				});
		} else if (selectSource === 'vimeo') {
			const VIMEO_ID = getVimeoId(url);
			const vimeoURL = `https://api.vimeo.com/videos/${VIMEO_ID}`;
			fetch(vimeoURL, {
				headers: {
					Authorization: `bearer ${VIMEO_API_KEY}`,
				},
			})
				.then((res) => res.json())
				.then((data) => {
					setVideos([
						...videos,
						{
							id: shortid.generate(),
							filmId: VIMEO_ID,
							source: 'vimeo',
							views: data.stats.plays,
							likes: data.metadata.connections.likes.total,
							title: data.name,
							date: `${date.getDate()}-${
								date.getMonth() + 1
							}-${date.getFullYear()}`,
							thumbnail: data.pictures.sizes[5].link,
							liked,
						},
					]);
				});
		}
		setUrl('');
	};
	// Deleting all videos
	const handleDelete = () => {
		setVideos([]);
	};
	// Managing all/favourite videos display
	const handleFavourite = () => {
		setShowFavourite(true);
	};
	const handleShowAll = () => {
		setShowFavourite(false);
	};
	// Deleting single video from the list
	const handleCardDelete = (id) => {
		setVideos([...videos.filter((item) => item.id !== id)]);
	};
	// Liking single video from the list
	const handleLiked = (id) => {
		setVideos([
			...videos.map((item) =>
				item.id === id ? { ...item, liked: !item.liked } : item,
			),
		]);
	};
	// Sorting videos
	const handleSortDown = () => {
		if (sortedUp) {
			setVideos([...videos.reverse()]);
			setSortedUp(!sortedUp);
		}
	};
	const handleSortUp = () => {
		if (!sortedUp) {
			setVideos([...videos.reverse()]);
			setSortedUp(!sortedUp);
		}
	};
	// Chosing video source (youtube or vimeo)
	const handleSource = (e) => {
		setSelectSource(e.target.value);
	};

	// Chosing tile or list videos display
	const handleTile = () => {
		if (displayList) {
			setDisplayList(!displayList);
		}
	};
	const handleList = () => {
		if (!displayList) {
			setDisplayList(!displayList);
		}
	};

	// Maneging pagination
	const numberOfPages = Math.ceil(videos.length / 10);
	const pageFirst = () => {
		setDisplayPage(1);
		setPage(1);
	};
	const pageDown = () => {
		if (displayPage > 1) {
			setDisplayPage((prev) => prev - 1);
			setPage(displayPage - 1);
		}
	};
	const pageUp = () => {
		if (displayPage < numberOfPages - 2) {
			setDisplayPage((prev) => prev + 1);
			setPage(displayPage + 3);
		}
	};
	const pageLast = () => {
		if (numberOfPages > 2) {
			setPage(numberOfPages);
			setDisplayPage(numberOfPages - 2);
		}
	};
	const clickedPage = (e) => {
		setPage(e.target.value);
	};

	return (
		<div className="video">
			<SearchBar
				handleSource={handleSource}
				handleClick={handleClick}
				handleChange={handleChange}
				url={url}
				selectSource={selectSource}
			/>
			<OptionsBar
				handleSortDown={handleSortDown}
				handleSortUp={handleSortUp}
				handleDelete={handleDelete}
				handleFavourite={handleFavourite}
				handleShowAll={handleShowAll}
				handleTile={handleTile}
				handleList={handleList}
			/>
			<VideoContainer
				page={page}
				displayList={displayList}
				videos={videos}
				showFavourite={showFavourite}
				handleLiked={handleLiked}
				handleCardDelete={handleCardDelete}
			/>
			<PaginationComponent
				showFavourite={showFavourite}
				videos={videos}
				displayPage={displayPage}
				pageDown={pageDown}
				pageUp={pageUp}
				pageLast={pageLast}
				pageFirst={pageFirst}
				clickedPage={clickedPage}
			/>
			<div className="video__footer"></div>
		</div>
	);
}

export default App;
