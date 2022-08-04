import { render, screen, fireEvent } from '@testing-library/react'
import { ThemeProvider } from '../utils/Context/Context'
import Footer from '../components/Footer'

describe('Tests du Footer', () => {

	const setup = () => render(
		<ThemeProvider>
			<Footer />
		</ThemeProvider>
	)

	it('should render footer without crashing', () => {
		setup()
	})
	it('sould change theme on click NightModeButton', () => {
		setup()
		const NightModeButton = screen.getByRole('button')
		expect(NightModeButton.textContent).toBe('Mode nuit 🌙')
		fireEvent.click(NightModeButton)
		expect(NightModeButton.textContent).toBe('Mode jour ☀️')
	})
})