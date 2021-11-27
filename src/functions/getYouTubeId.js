// Getting ID from youtube link
function getYouTubeId(link) {
	let video_id = link.split('v=')[1];
	const ampersandPosition = video_id.indexOf('&');
	if (ampersandPosition !== -1) {
		video_id = video_id.substring(0, ampersandPosition);
	}
	return video_id;
}

export default getYouTubeId