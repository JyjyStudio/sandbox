import {v4 as uuidv4} from 'uuid'
import PropTypes from 'prop-types'

const CareScale = ({ careType, scaleValue }) => {
	const range = [1, 2, 3];
    const scaleType = careType === "light" ? "☀️" : "💧"
	return (
		<div className={careType}>
			{range.map(rangeNumber => scaleValue >= rangeNumber  && 
                <span key={uuidv4()}>{scaleType}</span>
			)}
		</div>
	);
};

CareScale.propTypes = {
	careType : PropTypes.string,
	scaleValue : PropTypes.number,
}
export default CareScale;
