const freelancesData = require('../models/freelances')

function getFreelances() {
	return freelancesData.map(({ id, name, job, picture, skills, location,  available, tjm }) => ({
		id,
		name, 
		job, 
		picture,
		skills,
		location,
		available,
		tjm
	}))
}

module.exports = getFreelances
