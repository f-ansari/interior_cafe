import React, { useEffect } from 'react'
import { connect } from 'react-redux'
import { GetAllPost } from '../store/actions/PostActions'

const state = ({ postState }) => {
    console.log(postState)
}

const action = (dispatch) => {
    return {
        fetchAllPost: () => dispatch(GetAllPost())
    }
}

const Feed = (props) => {
    useEffect(() => {
        props.fetchAllPost()
    },[])

    return (
        <div>
            <h1>I am Feed</h1>

        </div>
    )
}

export default connect(state,action)(Feed)