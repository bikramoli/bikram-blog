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
            toast("Please add some comment", { position: toast.POSITION.TOP_CENTER })

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
                                Comment: e.target.value,
                                isNotEmpty: true
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