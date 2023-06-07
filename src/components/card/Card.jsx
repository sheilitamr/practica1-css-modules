import style from './card.module.css';

const Card = ({ image, alt, title, text, color }) => {
	return (
		<div className={`${style[color]} ${style.card}`}>
			<img src={image} alt={alt} />
			<h2 className={style.title}>{title}</h2>
			<p className={style.text}>{text}</p>
			<a className={`${style.button} ${style[color]}`}>Learn More</a>
		</div>
	);
};
export default Card;
