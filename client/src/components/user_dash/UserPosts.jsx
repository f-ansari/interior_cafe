import React from 'react'
import '../../style/UserDash.css'

const UserPost = (props) => {
    return (
        <div>
            <div className="grid-container">
                {props.userPosts ? (
                    props.userPosts.map((post, i) => (
                        <div className="card" onClick={() => props.history.push(`/post/detail/${post.id}`)} key={i} >
                                {post.images.length ? <img className="card-img" src={post.images[0].image} alt="users post"/>
                                :
                                <div>This post has no images</div>} 
                                <div className="post-title">
                                    <h4>{post.title}</h4>
                                </div>
                        </div>
                    ))
                ): <div>loading</div>}
            </div>

        </div>
    )
}

export default UserPost