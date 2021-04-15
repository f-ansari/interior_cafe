import React from 'react'

const PostCard = (props) => {
    console.log(props)
    const mapPosts = props.posts.data
    return (
        <div>
            <h3>I am post cards</h3>
            <div>
                {mapPosts ? (
                    mapPosts.map((post, i) => (
                        <div onClick={() => props.history.push(`/from/feed/post/detail/${post.id}`)} key={i}>
                        <h3>{post.title}</h3>
                        <img src={post.images[0].image} alt="users post"/>
                        </div>
                    ))
                ): <div>I am Loading!</div> }
            </div>
        </div>
    )
}

export default PostCard