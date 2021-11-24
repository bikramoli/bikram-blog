import React, { useState } from "react";

import './Comment.css'

const Comment = () => {
    const [state, setstate] = useState({
        Comment: "",
        Comments: []
    })
    const { Comment, Comments } = state
    const handleSubmit = (e) => {
        e.preventDefault();
        const comments = { Comment }
        // setstate({ Comments: [comments], Comment: "" })
        setstate({
            ...state,
            Comments: [...Comments, comments],
            Comment: ""
        })
    }

    return (
        <div>
            <h1>Comment Section</h1>
            <form className='form'>
                <label>Comment:</label>{" "}
                <input className='form-input'
                    type='text'
                    placeholder="Please type some comment here..."
                    id="comment"
                    name="Comment"
                    value={state.Comment}
                    onChange={
                        (e) => {
                            setstate({
                                ...state,
                                Comment: e.target.value
                            })
                        }
                    }>
                </input>
                <button onClick={handleSubmit}>Submit</button>
            </form>
            <div>
                {state.Comments.map((commen, index) => {
                    const { Comment } = commen
                    return (
                        <li key={index}>Comment{index + 1}:{" "}{Comment}</li>
                    )
                })}
            </div>
        </div>
    )
}
export default Comment;