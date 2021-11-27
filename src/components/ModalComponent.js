import React from 'react';
import { Modal } from 'reactstrap';

function ModalComponent({ videos, modalState, toggle }) {
	const url =
		videos.source === 'youtube'
			? 'http://www.youtube.com/embed/'
			: 'https://player.vimeo.com/video/';
	const title = videos.source === 'youtube' ? 'YouTube' : 'Vimeo';
	return (
		<Modal isOpen={modalState} toggle={toggle} centered>
			<iframe
				width="560"
				height="315"
				src={`${url}${videos.filmId}`}
				title={`${title} video player`}
				frameBorder="0"
			></iframe>
		</Modal>
	);
}
export default ModalComponent;
