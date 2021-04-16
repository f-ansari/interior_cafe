import React from 'react'

const UserPost = (props) => {
    return (
        <div>
            <h2>hello</h2>
            <div>
                {props.userPosts ? (
                    props.userPosts.map((post, i) => (
                        <div onClick={() => props.history.push(`/post/detail/${post.id}`)} key={i} >
                            <div>
                                <h3>{post.id}</h3>
                                {post.images.length ? <img src={post.images[0].image} alt="users post"/>
                                :
                                <div>This post has no images</div>}                                
                                </div>
                        </div>
                    ))
                ): <div>loading</div>}
            </div>

        </div>
    )
}

export default UserPost