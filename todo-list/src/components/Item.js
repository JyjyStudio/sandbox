const Item = (props) => (

	<li className="border d-flex justify-content-between align-item-center p-2 my-2">
		<div className="p-2">{props.msg}</div>
		<button className="btn btn-danger" onClick={() => props.deleteElement(props.id)}>Supprimer</button>
	</li>
	
)

export default Item
