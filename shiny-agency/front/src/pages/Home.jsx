import colors from "../utils/colors"
import HomeIllustration from '../assets/home-illustration.svg'
import Button from "../components/Button"
import { Link } from "react-router-dom"
import RectangleContainer from "../components/RectangleContainer"
import FirstHeading from "../components/FirstHeading"

const Home = () => (
	<RectangleContainer justifyContent="space-evenly">
		<div>
			<FirstHeading color="#000" width="550px" fontSize="50px">Repérez vos besoins, on s’occupe du reste, avec les meilleurs talents</FirstHeading>
			<Link to="/questionnaire/1">
				<Button color="white" padding="8px 30px" backgroundColor={colors.blueBackground}>Faire le test</Button>
			</Link>
		</div>
		<div>
			<img src={HomeIllustration} alt='homepage illustration' width={500}/>
		</div>
	</RectangleContainer>
)

export default Home
