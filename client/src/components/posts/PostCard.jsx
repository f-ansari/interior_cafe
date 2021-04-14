import React from 'react'

const PostCard = (props) => {
    return (
        <div>
            <h3>I am post cards</h3>
            <div>
                {props.mapPosts ? (
                    props.mapPosts.map((post, i) => (
                        <div key={i}>
                            {post.images.map((image, i)=>(
                                <div key={i}>
                                    <img width="300px" src={image.image} alt="users post"/>
                                </div>
                            ))}
                        </div>
                    ))
                ): <h3>I am Loading!</h3> }
            </div>
        </div>
    )
}

export default PostCard