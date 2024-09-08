import "./HomeArticleList.scss"
import Article from "../../Common/Article/Article"
import { spinnerIcon } from "../../../service/image"


const HomeArticleList = ({articles}) => {
  return(
        <section className="home-articles">
            <div className="container">
                <div className="home-articles__list row">
                    {
                        articles ? articles.map(el => {
                         return <Article key={el._id} el={el} />
                        }) : <img src={spinnerIcon} alt="Loading..." className="spinner-image"/>
                    }
                </div>

            </div>

        </section>
  )

}

export default HomeArticleList