import { render, screen } from '@testing-library/react'
import { MemoryRouter } from 'react-router-dom'
import Home from '../pages/Home'
import { ThemeProvider } from '../utils/Context/Context'

describe('Tests de la page Home', () => {
	const setup = () =>
		render(
			<MemoryRouter>
				<ThemeProvider>
					<Home />
				</ThemeProvider>
			</MemoryRouter>
		)

	it('should render Home page without crashing', () => {
		setup()
	})
	it('should render title', () => {
		setup()
		const title = screen.getByRole('heading', {
			level: 1,
			text:
				'Repérez vos besoins, on s’occupe du reste, avec les meilleurs talents',
		})
		expect(title).toBeTruthy()
	})
})
