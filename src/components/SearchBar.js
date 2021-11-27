import React from 'react';
import { Button, Input } from 'reactstrap';

function SearchBar({
	url,
	handleClick,
	handleChange,
	handleSource,
	selectSource,
}) {
	return (
		<div className="video__searchBar">
			<Input
				name="URL"
				value={url}
				placeholder="input youtube/vimeo url..."
				onChange={handleChange}
			/>
			<div className="video__searchBar--buttons">
				<Input
					value={selectSource}
					onChange={handleSource}
					id="exampleSelect"
					name="select"
					type="select"
				>
					<option value="selectSource">Select source</option>
					<option value="youtube">YouTube</option>
					<option value="vimeo">Vimeo</option>
				</Input>

				<Button color="primary" onClick={handleClick}>
					Add Video
				</Button>
			</div>
		</div>
	);
}

export default SearchBar;
