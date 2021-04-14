import React from 'react'

const PostCard = (props) => {
    console.log(props)
    return (
        <div>
            <h3>I am post cards</h3>
            <div>
                {props.mapPosts ? (
                    props.mapPosts.map((post, i) => (
                        <div key={i}>
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