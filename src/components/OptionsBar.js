import React, { useState } from 'react';
import {
	Button,
	Dropdown,
	DropdownToggle,
	DropdownMenu,
	DropdownItem,
} from 'reactstrap';

function OptionsBar({
	handleDelete,
	handleFavourite,
	handleShowAll,
	handleSortUp,
	handleSortDown,
   handleTile,
   handleList
}) {
	const [toggleDisplay, setToggleDisplay] = useState(false);
	const [toggleFavourite, setToggleFavourite] = useState(false);
	const [toggleSort, setToggleSort] = useState(false);
   
   // Managing toggles
	const togDisplay = () => {
		setToggleDisplay(!toggleDisplay);
	};
	const togFavourite = () => {
		setToggleFavourite(!toggleFavourite);
	};
	const togSort = () => {
		setToggleSort(!toggleSort);
	};
	return (
		<div className="video__optionBar">
			<Dropdown  isOpen={toggleDisplay} toggle={togDisplay}>
				<DropdownToggle color="primary" caret>Display</DropdownToggle>
				<DropdownMenu>
					<DropdownItem onClick={handleTile}>Display Tile</DropdownItem>
					<DropdownItem onClick={handleList}>Display List</DropdownItem>
				</DropdownMenu>
			</Dropdown>
			<Dropdown isOpen={toggleFavourite} toggle={togFavourite}>
				<DropdownToggle color="primary" caret>Show</DropdownToggle>
				<DropdownMenu >
					<DropdownItem onClick={handleFavourite}>Show favourite</DropdownItem>
					<DropdownItem onClick={handleShowAll}>Show all</DropdownItem>
				</DropdownMenu>
			</Dropdown>
			<Dropdown isOpen={toggleSort} toggle={togSort}>
				<DropdownToggle color="primary" caret>Sort</DropdownToggle>
				<DropdownMenu>
					<DropdownItem onClick={handleSortUp}>Sort up</DropdownItem>
					<DropdownItem onClick={handleSortDown}>Sort down</DropdownItem>
				</DropdownMenu>
			</Dropdown>
			<Button color="primary"  onClick={handleDelete}>Clear</Button>
		</div>
	);
}

export default OptionsBar;
