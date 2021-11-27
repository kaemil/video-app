import React from 'react';
import { Pagination, PaginationItem, PaginationLink } from 'reactstrap';

function PaginationComponent({
	displayPage,
	pageUp,
	pageDown,
	pageLast,
   videos,
	pageFirst,
	clickedPage,
   showFavourite
}) {

   if((videos.length > 0 && !showFavourite) || videos.filter(e=> e.liked === true).length > 0){
      return (
		<div className="video__pagination">
			<Pagination>
				<PaginationItem>
					<PaginationLink first onClick={pageFirst} />
				</PaginationItem>
				<PaginationItem>
					<PaginationLink previous onClick={pageDown} />
				</PaginationItem>
				<PaginationItem>
					<PaginationLink onClick={clickedPage} value={displayPage}>{displayPage}</PaginationLink>
				</PaginationItem>
				<PaginationItem>
					<PaginationLink onClick={clickedPage} value={displayPage + 1}>
						{displayPage + 1}
					</PaginationLink>
				</PaginationItem>
				<PaginationItem>
					<PaginationLink onClick={clickedPage} value={displayPage + 2}>
						{displayPage + 2}
					</PaginationLink>
				</PaginationItem>
				<PaginationItem>
					<PaginationLink next onClick={pageUp} />
				</PaginationItem>
				<PaginationItem>
					<PaginationLink last onClick={pageLast} />
				</PaginationItem>
			</Pagination>
		</div>
	)
   } else { return (<div style={{textAlign:'center'}}>no videos...</div>)}
}

export default PaginationComponent;
