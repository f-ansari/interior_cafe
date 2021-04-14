import React from 'react'

const PostCard = (props) => {
    console.log(props)
    // let mapPost = props.mapPosts.data
    return (
        <div>
            <h3>I am post cards</h3>
            <div>
                {props.mapPosts ? (
                    props.mapPosts.map((post, i) => (
                        <div key={i}>
                            <h2>{post.title}</h2>
                        </div>
                    ))
                ): <h3>I am Loading!</h3> }
            </div>
        </div>
    )
}

export default PostCard