import Item from "./Item"

const List = (props) => {
	
    const deleteElement = id => {
		const filteredList = props.data.filter(item => item.id !== id)
		props.setList(filteredList)
	}
    
	return props.data.map((item) => (
		<Item msg={item.txt} id={item.id} deleteElement={deleteElement} key={item.id} />
	))
};

export default List
