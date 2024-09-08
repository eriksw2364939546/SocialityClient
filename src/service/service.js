const _API_URL = process.env.REACT_APP_API_URL

async function getData(params) {
	try {
		let res = await fetch(_API_URL + params)
		let data = await res.json()
		return data
	} catch (error) {
		throw new Error(error)
	}
}

export { getData }