import React from 'react'
import '../../style/Feed.css'

const PostCard = (props) => {
    const mapPosts = props.posts.data
    // let reversed = mapPosts.reverse()
    return (
        <div>
            <div className="grid-container">
                {mapPosts ? (
                    mapPosts.map((post, i) => (
                        <div className="card" key={i}>
                        {post.images.length ? <img className="card-img" onClick={() => props.history.push(`/from/feed/post/detail/${post.id}`)} src={post.images[0].image} alt="users post"/> : <h3>no image</h3>}
                        <br></br>
                            <div className="like-section">
                                <button className="like-bttn like-details" onClick={() => props.likePost(post.id, post.like)}>Like</button>
                                <h4 className="like-details">{post.like}</h4>
                            </div>
                        </div>
                    ))
                ): <div>I am Loading!</div> }
            </div>
        </div>
    )
}

export default PostCard