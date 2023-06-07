import Card from './components/card/Card';

const App = () => {
	return (
		<div className='container'>
			<Card
				image='/public/icon-sedans.svg'
				alt='image sedans'
				title='Sedans'
				text='Choose a sedan for its affordability and excellent fuel economy. Ideal for cruising in the city or on your next road trip.'
				color='orange'
			/>
			<Card
				image='/public/icon-suvs.svg'
				alt='image suvs'
				title='Suvs'
				text='Take an SUV for its spacious interior, power, and versatility. Perfect for your next family vacation and off-road adventures.'
				color='bluegreen'
			/>
			<Card
				image='/public/icon-luxury.svg'
				alt='image luxury'
				title='Luxury'
				text='Cruise in the best car brands without the bloated prices. Enjoy the enhanced comfort of a luxury rental and arrive in style. '
				color='green'
			/>
		</div>
	);
};

export default App;
