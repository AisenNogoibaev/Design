import Cards from "../UI/Card/Cards";

import "./MediaContent.css";

function MediaContent() {
	return (
		<div className='mediaContent-bg'>
			<div className='des'>
				<h1>Portfolio</h1>
				<p className='des-text'>
					Agency provides a full service range including technical
					skills, design, business understanding.
				</p>
			</div>
			<div>
				<Cards />
			</div>
		</div>
	);
}

export default MediaContent;
