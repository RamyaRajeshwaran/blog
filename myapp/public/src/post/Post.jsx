import "./post.css"

export default function Post() {
  return (
    <div className="post">
      <img className="postImg"
      src="https://images.pexels.com/photos/3451760/pexels-photo-3451760.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500" alt="" />
    <div className="postInfo">
        <div className="postCats">
            <span className="postCat">Music</span>
            <span className="postCat">Life</span>

        </div>
        <span className="postTitle">Lorem ipsum dolor sit amet consectetur</span>
    <hr />
    <span className="postDate">1 hour ago</span>
    </div>
    <p className="postDesc">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Iure neque maiores quae mollitia fugiat minima autem officiis blanditiis perferendis maxime natus labore culpa saepe adipisci, fuga possimus ad sequi laudantium.
    Lorem ipsum dolor sit amet consectetur, adipisicing elit. Iure neque maiores quae mollitia fugiat minima autem officiis blanditiis perferendis maxime natus labore culpa saepe adipisci, fuga possimus ad sequi laudantium.
    Lorem ipsum dolor sit amet consectetur, adipisicing elit. Iure neque maiores quae mollitia fugiat minima autem officiis blanditiis perferendis maxime natus labore culpa saepe adipisci, fuga possimus ad sequi laudantium.
    </p>
    </div>
  )
}
