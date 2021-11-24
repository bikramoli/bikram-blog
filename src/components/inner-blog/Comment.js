import React, { useState } from "react";

import './Comment.css'
import { toast } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';
toast.configure();

const Comment = () => {
    const [state, setstate] = useState({
        Comment: "",
        Comments: [],
        isNotEmpty: false
    })

    const { Comment, Comments, isNotEmpty } = state

    //function get called when submit button is clicked
    const handleSubmit = (e) => {
        e.preventDefault();
        const comments = { Comment }
        isNotEmpty && Comment.length >= 1 ?
            setstate({
                ...state,
                Comments: [...Comments, comments],
                Comment: ""
            }) :
            toast("Please add some comment", { position: toast.POSITION.BOTTOM_CENTER })
    }

    return (
        <>
            <form className='form'>
                <h1>Comment Section</h1>
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
                                Comment: e.target.value,
                                isNotEmpty: true
                            })
                        }
                    }>
                </input>
                <div className="submit">
                    <button onClick={handleSubmit}>Submit</button>
                </div>
            </form>
            <div>
                {state.Comments.map((commen, index) => {
                    const { Comment } = commen
                    return (
                        <div className="comment-list">
                            <li key={index}><strong>Comment{index + 1}:</strong>{" "}{Comment}</li>
                        </div>
                    )
                })}
            </div>
        </>
    )
}
export default Comment;