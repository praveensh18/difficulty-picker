import React from 'react';
import s from './style.module.css';

const DisplayDifficulty = (props) => {
	return (
		<div className={s.container}>
			{props.difficulty ? `Difficulty set to ${props.difficulty}` : 'No Difficulty set'}
		</div>
	)
}

export default DisplayDifficulty
