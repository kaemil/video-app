import React from 'react';
import { useState } from 'react/cjs/react.development';
import { Button } from 'reactstrap';
import ModalComponent from './ModalComponent';

function Video({ videos, handleLiked, handleCardDelete, displayList }) {
	const [modalState, setModalState] = useState(false);

	const toggle = () => {
		setModalState(!modalState);
	};
	return (
		<div className={displayList ? 'list' : 'card'}>
			<img
				src={videos.thumbnail}
				onClick={toggle}
				alt="img"
				className={displayList ? 'list-img' : 'card-img'}
			/>
			<ModalComponent videos={videos} modalState={modalState} toggle={toggle} />
			<p className="card-text">{videos.title}</p>
			<div className={displayList ? 'list__views ' : 'card__views'}>
				<div className={displayList ? 'list-text' : 'card-text'}>{videos.views} views</div>
				<div className="card-text">{videos.likes} likes</div>
			</div>
			<div className={displayList ? 'list__footer' : 'card__footer'}>
				<div>{videos.date}</div>
				<Button color="primary" onClick={() => handleCardDelete(videos.id)}>
					<i className="icon-trash"></i>
				</Button>
				<Button color="primary" onClick={() => handleLiked(videos.id)}>
					{videos.liked ? (
						<i className="icon-star"></i>
					) : (
						<i className="icon-star-empty"></i>
					)}
				</Button>
			</div>
		</div>
	);
}
export default Video;
