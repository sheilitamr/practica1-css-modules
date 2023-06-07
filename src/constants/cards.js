import { v4 } from 'uuid';

export const CARDS = [
	{
		id: v4(),
		image: '/icon-sedans.svg',
		alt: 'image sedans',
		title: 'Sedans',
		text: 'Choose a sedan for its affordability and excellent fuel economy. Ideal for cruising in the city or on your next road trip.',
		color: 'orange'
	},
	{
		id: v4(),
		image: '/icon-suvs.svg',
		alt: 'image suvs',
		title: 'Suvs',
		text: 'Take an SUV for its spacious interior, power, and versatility. Perfect for your next family vacation and off-road adventures.',
		color: 'bluegreen'
	},
	{
		id: v4(),
		image: '/icon-luxury.svg',
		alt: 'image luxury',
		title: 'Luxury',
		text: 'Cruise in the best car brands without the bloated prices. Enjoy the enhanced comfort of a luxury rental and arrive in style. ',
		color: 'green'
	}
];
