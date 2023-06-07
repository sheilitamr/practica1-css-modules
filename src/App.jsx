import Card from './components/card/Card';
import { CARDS } from './constants/cards';

const App = () => {
	return (
		<div className='container'>
			{CARDS.map(card => (
				<Card
					image={card.image}
					alt={card.alt}
					title={card.title}
					text={card.text}
					color={card.color}
				/>
			))}
		</div>
	);
};

export default App;
