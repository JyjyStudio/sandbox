import { render, screen, fireEvent } from '@testing-library/react'
import { ThemeProvider } from '../utils/Context/Context'
import Card from '../components/Card'

describe('Card', () => {
	test('Should render title and image', async () => {
		render(
			<ThemeProvider>
				<Card
					name="Harry Potter"
					jobTitle="Magicien frontend"
					picture="/myPicture.png"
				/>
			</ThemeProvider>
		)
		const cardPicture = screen.getByRole('img')
		const cardTitle = screen.getByText(/Harry/i)
		expect(cardPicture.src).toBe('http://localhost/myPicture.png')
		expect(cardTitle.textContent).toBe('Harry Potter')
	})
})
