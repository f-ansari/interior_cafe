import React, { useEffect } from 'react'

const UserPost = (props) => {
    // console.log(props.userPosts[0].images[0].image)
    console.log(props)
    return (
        <div>
            <h2>hello</h2>
            <div>
                {props.userPosts ? (
                    props.userPosts.map((post, i) => (
                        <div>
                            <h3>{post.title}</h3>
                            <img src={post.images[0].image} alt="users post"/>
                        </div>
                    ))
                ): <div>loading</div>}
            </div>

        </div>
    )
}

export default UserPost