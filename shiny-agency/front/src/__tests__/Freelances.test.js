import { rest } from "msw"
import { setupServer } from "msw/node"
import { render, screen, waitFor, waitForElementToBeRemoved } from "@testing-library/react";
import { MemoryRouter } from "react-router-dom"
import Freelances from "../pages/Freelances"
import { ThemeProvider } from "../utils/Context/Context";

describe('Tests de la page Freelances', () => {
	const setup = () => render(
		<MemoryRouter>
			<ThemeProvider>
				<Freelances />
			</ThemeProvider>
		</MemoryRouter>
	)
	const freelancersMockedData = [
		{
			name: 'Harry Potter',
			jobTitle: 'Magicien frontend',
			picture: '',
		},
		{
			name: 'Hermione Granger',
			jobTitle: 'Magicienne fullstack',
			picture: '',
		},
	]
	const server = setupServer(
		// On précise ici l'url qu'il faudra "intercepter"
		rest.get('http://localhost:8000/freelances', (req, res, ctx) => {
			// Là on va pouvoir passer les datas mockées dans ce qui est retourné en json
			return res(ctx.json({ freelancersList: freelancersMockedData }))
		})
	)
	// Active la simulation d'API avant les tests depuis server
	beforeAll(() => server.listen())
	// Réinitialise tout ce qu'on aurait pu ajouter en termes de durée pour nos tests avant chaque test
	afterEach(() => server.resetHandlers())
	// Ferme la simulation d'API une fois que les tests sont finis
	afterAll(() => server.close())

	it('should render the page without crashin' , () => {
		setup()
	})
	it('should render the loader without crash', async () => {
		setup()
		const loader = screen.getByTestId('loader')
		expect(loader).toBeTruthy()
	})
	it('should render the data', async () => {
		// on render notre page
		setup()
		//on verifie que le loader a bien disparu
		await waitForElementToBeRemoved(() => screen.queryByTestId('loader'))
		// on verifie que Harry Potter et Hermione Granger sont bien affichés dans la page 
		const harry = await screen.findByText('Harry Potter')
		expect(harry).toBeTruthy()
		const hermione = await screen.findByText('Hermione Granger')
		expect(hermione).toBeTruthy()
	})
})