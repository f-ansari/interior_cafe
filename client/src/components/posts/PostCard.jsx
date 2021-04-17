import React from 'react'

const PostCard = (props) => {
    const mapPosts = props.posts.data
    return (
        <div>
            <h3>I am post cards</h3>
            <div>
                {mapPosts ? (
                    mapPosts.map((post, i) => (
                        <div key={i}>
                        <h3>{post.title}</h3>
                        {post.images.length ? <img onClick={() => props.history.push(`/from/feed/post/detail/${post.id}`)} src={post.images[0].image} alt="users post"/> : <h3>no image</h3>}
                        <br></br>
                        <button onClick={() => props.likePost(post.id, post.like)}>Like</button><h4>{post.like}</h4>
                        </div>
                    ))
                ): <div>I am Loading!</div> }
            </div>
        </div>
    )
}

export default PostCard