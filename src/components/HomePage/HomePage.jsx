import "./HomePage.scss"

import HomeArticleList from "./HomeArticleList/HomeArticleList"

const HomePage = ({articles}) => {
    return (
        <main>
            <HomeArticleList articles={articles}/>
        </main>
    )

}

export default HomePage