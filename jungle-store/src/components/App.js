import '../styles/wrapper.css'
import React from 'react'; 
import Banner from './Banner';
import List from './List';
import Cart from "./Cart";
import Items from './Card'

const App = () => (
    <React.StrictMode>
		<Banner />
		<List />
		<div className='wrapper'>
			<Cart />
			<Items />
		</div>
    </React.StrictMode>
);

export default App