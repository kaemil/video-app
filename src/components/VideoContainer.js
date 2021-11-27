import React from 'react';
import Video from './Video';

function VideoContainer({
	displayList,
	videos,
	showFavourite,
	handleCardDelete,
	handleLiked,
   page
}) {
	const listClass = displayList ? 'video__listDisplay' : 'video__tileDisplay';
	return !showFavourite ? (
		<div className={`${listClass}`}>
			{videos
				.filter(
					(item, index) =>
						10 * (page - 1) <= index && 12 * page - 1 >= index,
				)
				.map((element) => (
					<Video
						displayList={displayList}
						key={element.id}
						videos={element}
						handleCardDelete={handleCardDelete}
						handleLiked={handleLiked}
					/>
				))}
		</div>
	) : (
		<div className={`${listClass}`}>
			{videos
				.filter((item) => item.liked)
				.filter(
					(item, index) =>
						10 * (page - 1) <= index && 12 * page - 1 >= index,
				)
				.map((element) => (
					<Video
						displayList={displayList}
						key={element.id}
						videos={element}
						handleCardDelete={handleCardDelete}
						handleLiked={handleLiked}
					/>
				))}
		</div>
	);
}

export default VideoContainer;
