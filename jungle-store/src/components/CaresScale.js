import {v4 as uuidv4} from 'uuid'

const CareScale = ({ careType, scaleValue }) => {
	const range = [1, 2, 3];
    const scaleType = careType === "light" ? "☀️" : "💧"
	return (
		<div>
			{range.map(rangeNumber => scaleValue >= rangeNumber  && 
                <span key={uuidv4()}>{scaleType}</span>
			)}
		</div>
	);
};

export default CareScale;
