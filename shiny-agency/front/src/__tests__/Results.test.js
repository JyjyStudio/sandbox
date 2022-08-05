import Results, { formatJobList, formatFetchParams } from '../pages/Results'
import { rest } from 'msw'
import { setupServer } from 'msw/node'
import { MemoryRouter } from 'react-router-dom'
import {
	render,
	screen,
	waitForElementToBeRemoved,
} from '@testing-library/react'
import { ThemeProvider, SurveyProvider } from '../utils/Context/Context'

describe('Tests de la page Results', () => {
	describe('Tests de la fonction formatJobList', () => {
		it('should add a coma to the not-last element of the list', () => {
			// On prend par exemple un élément item2 qui sera en deuxième position dans notre liste (son index est donc de 1),
			// mais qui ne sera pas le dernier élément : on veut donc que le titre ajoute une virgule.
			// formatJobList(itemTitle, listLength, index)
			const expectedState = 'item2,'
			expect(formatJobList('item2', 3, 1)).toEqual(expectedState)
		})
		it('not add a coma to the last element of the list', () => {
			const expectedState = 'lastItem'
			expect(formatJobList('lastItem', 3, 2)).toEqual(expectedState)
		})
	})
	describe('Tests de la fonction formatFetchParams', () => {
		it('should use the right format for param', () => {
			const answers = { 1: true }
			const expectedState = 'a1=true'
			expect(formatFetchParams(answers)).toEqual(expectedState)
		})
		it('should concatenate params with an &', () => {
			const answers = {
				1: false,
				2: false,
				3: true,
				4: true,
				5: false,
				6: true,
			}
			const expectedParams =
				'a1=false&a2=false&a3=true&a4=true&a5=false&a6=true'
			expect(formatFetchParams(answers)).toBe(expectedParams)
		})
	})
	describe("Tests d'integration", () => {
		const setup = () =>
			render(
				<MemoryRouter>
					<ThemeProvider>
						<SurveyProvider>
							<Results />
						</SurveyProvider>
					</ThemeProvider>
				</MemoryRouter>
			)
		const resultsMockedData = [
			{
				title: 'seo',
				description: `Le SEO est en charge du référencement web d'une page`,
			},
			{
				title: 'frontend',
				description: `Le développeur ou la développeuse frontend se charge de l'interface : interactions avec l'utilisateur, style, etc.`,
			},
		]
		const server = setupServer(
			// On précise ici l'url qu'il faudra "intercepter"
			rest.get('http://localhost:8000/results', (req, res, ctx) => {
				// Là on va pouvoir passer les datas mockées dans ce qui est retourné en json
				return res(ctx.json({ resultsData: resultsMockedData }))
			})
		)
		// Active la simulation d'API avant les tests depuis server
		beforeAll(() => server.listen())
		// Réinitialise tout ce qu'on aurait pu ajouter en termes de durée pour nos tests avant chaque test
		afterEach(() => server.resetHandlers())
		// Ferme la simulation d'API une fois que les tests sont finis
		afterAll(() => server.close())

		it('should render the page', () => {
			setup()
		})
		it('should render the loader without crash', async () => {
			setup()
			const loader = screen.getByTestId('loader')
			//on verifie que le loader apparait pendant le chargement des données
			expect(loader).toBeTruthy()
		})
		it('should render the data', async () => {
			// on render notre page
			setup()
			//ensuite on verifie que le loader a bien disparu
			await waitForElementToBeRemoved(() =>
				screen.queryByTestId('loader')
			)
			const jobTitleElements = screen.getAllByTestId('job-title')
			expect(jobTitleElements[0].textContent).toBe('seo')
			expect(jobTitleElements.length).toBe(2)
			const jobDescriptionElements =
				screen.getAllByTestId('job-description')
			expect(jobDescriptionElements[1].textContent).toBe(
				resultsMockedData[1].description
			)
			expect(jobDescriptionElements.length).toBe(2)
		})
	})
})
