import { MemoryRouter } from "react-router-dom";
import { render, screen } from "@testing-library/react";
import Freelances from "../pages/Freelances"
import Card from "../components/Card"
import { ThemeProvider } from "../utils/Context/Context";

describe('Tests de la page Freelances', () => {
	const setup = () => render(
		<MemoryRouter>
			<ThemeProvider>
				<Freelances />
			</ThemeProvider>
		</MemoryRouter>
	)
	it('should render the page without crashin' , () => {
		setup()
	})
})