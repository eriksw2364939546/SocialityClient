import "./Article.scss"
import { Link } from "react-router-dom"
import { commentIcon, likeIcon } from "../../../service/image"

const Article =({el})=> {
const {_id, author, title, text, image, comments, likes } = el

return(
    <div className="article">
        <div className="article__author row">
         <img src="" alt="" className="article__author-photo" />
         <div className="article__author-name">
            {author}
         </div>
        </div>

        <div className="article__content row">
            <img src={image} alt="article image" className="article__content-image" />
           <div className="article__content-body">
            <h3 className="article__content-title">{title}</h3>
            <p className="article__content-text">{text}</p>
            <Link className="fool__article-btn" to={`/article/${_id}`}>Читать полностю...</Link>
           </div>
        </div>

        <div className="article__reviews">
            <div className="article__reviews-icons">
                <button>
                  <img src={likeIcon} alt="likes" />
                  <span>{likes.length}</span>
                </button>
                <Link to={`/article/${_id}`}>
                <img src={commentIcon} alt="comment" />
                <span>{comments.length}</span>
                </Link>

            </div>
        </div>

    </div>
)
}



export default Article