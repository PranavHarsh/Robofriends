import React from 'react';

const Card = ({name, email, id}) => {
	
	return (
		<div className= ' tc bg-light-pink dib br3 pa3 ma2 grow bw2 shadow-9'>
		<img alt='Robots' src={`https://robohash.org/${id}?150*150`} />
		<div>
		<h2>{name}</h2>
		<p>{email}</p>
		</div>
		</div>
		);

}

export default Card