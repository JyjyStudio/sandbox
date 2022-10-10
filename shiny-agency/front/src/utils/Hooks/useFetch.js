import { useEffect, useState } from 'react'
import { useDispatch } from 'react-redux'

export default function useFetch(url) {
	const [data, setData] = useState([])
	const [loading, setLoading] = useState(true)
	const [error, setError] = useState(false)
	const dispatch = useDispatch()

	useEffect(() => {
		if (!url) return
		setLoading(true)

		async function fetchData() {
			try {
				const response = await fetch(url)
				const data = await response.json()
				setData(data)
			} catch (error) {
				console.log(error)
				setError(true)
			} finally {
				setLoading(false)
			}
		}
		fetchData()
	}, [dispatch, url])

	return { data, error, loading }
}
