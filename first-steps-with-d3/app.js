const svg = d3.select('.box')
			  .append('svg')
			  .attr('width', 600)
			  .attr('height', 550)
			  .style('background-color', '#f1f1f1')

//creation du style du groupe pour le graph
const margin = {top: 20, right: 20, bottom: 100, left: 100}
const graphWidth = 600 - margin.left - margin.right
const graphHeight = 600 - margin.top - margin.bottom
//creation du groupe graph
const graph = svg.append('g')
				.attr('width', graphWidth)
				.attr('height', graphHeight)
				.attr('transform', `translate(${margin.left}, ${margin.top})`)
//ajout d'un groupe pour chaque axe
const groupX = graph.append('g')
					.attr('transform', `translate(0, ${graphHeight})`)
const groupY = graph.append('g')

//exploitation des données
d3.json('./data.json').then(donnee => {
	const min = d3.min(donnee, d => d.prix)
	const max = d3.max(donnee, d => d.prix)
	const extent = d3.extent(donnee, d => d.prix) // tableau avec min et max

	const y = d3.scaleLinear()
				.domain([0, max]) //prix entre 0 et le max des prix (variable)
				.range([graphHeight, 0])

	const x = d3.scaleBand()
				.domain(donnee.map(item => item.pays))
				.range([0, 480])
				.paddingInner(.4)
				.paddingOuter(.2)
	// on ajoute au groupe graph les rects
	const rects = graph.selectAll('rect')
		.data(donnee)
		.enter()
		.append('rect')
		.attr('width', x.bandwidth())
		.attr('height', d => graphHeight - y(d.prix))
		.attr('fill', 'lightblue')
		.attr('x', d => x(d.pays))
		.attr('y', d => y(d.prix))

	//creation et mise en place des axes
	const axeX = d3.axisBottom(x)
	const axeY = d3.axisLeft(y)
					.ticks(5) // 5 valeurs sur l'echelle des x
					.tickFormat(d => d + '€') // on ajoute le € apres la valeur

	groupX.call(axeX)
		  .style("font-size", "1rem")
	groupY.call(axeY)
		  .style("font-size", "1rem")
})
