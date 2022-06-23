import { Fragment, useState } from "react";
import { Link } from "react-router-dom";

import {
	BRANDING,
	cardsData,
	dataFilter,
	DESIGN,
	ILLUSTRATION,
	MOTION,
} from "./data";

import "./Cards.css";
import LoadMoreButton from "../Buttons/LoadMoreButton";

function Cards() {
	const [cards, setCards] = useState(cardsData || []);
	const [visible, setVisible] = useState(9);
	const [currentFilter, setCurrentFilter] = useState("All");

	const filteredCards = () => {
		switch (currentFilter) {
			case DESIGN:
				return cards.filter((el) => el.btn === DESIGN);
			case BRANDING:
				return cards.filter((el) => el.btn === BRANDING);
			case ILLUSTRATION:
				return cards.filter((el) => el.btn === ILLUSTRATION);
			case MOTION:
				return cards.filter((el) => el.btn === MOTION);
			default:
				return cards;
		}
	};

	const onActive = (element) => {
		element.active = !element.active;
		setCards([...cards]);
	};

	const onDelete = () => {
		const cardsDelete = cards.filter((el) => el.active === false);
		setCards(cardsDelete);
	};

	const loadMore = () => setVisible(visible + 3);

	return (
		<Fragment>
			<div className='cards-container'>
				<ul className='filter-list'>
					{dataFilter.map((filter) => (
						<li
							key={filter}
							onClick={() => setCurrentFilter(filter)}
						>
							{filter}
						</li>
					))}
					<li className='delete-desktop' onClick={onDelete}>
						Delete
					</li>
					<select
						onClick={(event) =>
							setCurrentFilter(event.target.value)
						}
					>
						{dataFilter.map((filter) => (
							<option key={filter} value={filter}>
								{filter}
							</option>
						))}
					</select>
				</ul>

				<div className='card-container'>
					{filteredCards()
						.slice(0, visible)
						.map((el) => {
							return (
								<div
									className={
										el.active ? "card card-border" : "card"
									}
									style={{
										backgroundImage: `url(${el.background})`,
									}}
									key={el.id}
									title={el.title}
									onClick={() => onActive(el)}
								>
									<div className='content-btn'>{el.btn}</div>
									<Link
										to={`/cards/${el.id}`}
										className='link-card'
									>
										<h1>{el.title}</h1>
									</Link>
								</div>
							);
						})}
				</div>
			</div>
			<div className='btn-load' onClick={loadMore}>
				{filteredCards()?.length - visible > 0 && <LoadMoreButton />}
			</div>
		</Fragment>
	);
}

export default Cards;
