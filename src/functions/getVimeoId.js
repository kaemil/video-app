// Getting ID from vimeo link
function getVimeoId(link) {
	let video_id = link.split('com/')[1];
	return video_id;
}

export default getVimeoId