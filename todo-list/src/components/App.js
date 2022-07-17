import Form from "./Form";
import List from "./List";
import { useState } from "react"
import { v4 as uuidv4 } from "uuid"


function App() {

	const [list, setList] = useState([
		{ txt: "Travailler React", id: uuidv4() },
		{ txt: "Promenner le chien", id: uuidv4() },
		{ txt: "Faire les courses", id: uuidv4() },
	])

	return (
		<div className="App">
			<h1 className="text-center my-3">Todo-List React</h1>
			<Form data={list} setList={setList} />
			<h4 className="my-3">Liste des choses à faire :</h4>
			<ul className="list-group">
				<List data={list} setList={setList} />
			</ul>
		</div>
	);
}

export default App;
