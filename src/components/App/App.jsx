import { BrowserRouter, Routes, Route } from "react-router-dom"
import { getData } from "../../service/service"
import { useState, useEffect } from "react"

import HomePage from "../HomePage/HomePage"
import Header from "../Common/Header/Header"

const App = () => {
	const [allArticles, setAllArticles] = useState(null)

	useEffect(() => {
		getData("article").then(data => {
			if (data && data.status) {
				setAllArticles(data.allArticles)
			}
		})
	}, [])

	return (
		<BrowserRouter>
		<Header />
			<Routes>
				<Route path="/" element={<HomePage articles={allArticles} />} />
			</Routes>
		</BrowserRouter>
	)
}

export default App