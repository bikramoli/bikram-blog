import React, { useState, useEffect, useRef, useReducer } from "react";

import './Comment.css'
import { toast } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';
import { Card, Form } from "reactstrap";
toast.configure();

const Comment2 = () => {
    const useRefInput = useRef(null)//useRef is used to target perticular are of DOM but dosnt trigger re-render

    const [Comment, setComment] = useState("")

    function reducer(state, action) {
        if (action.type === "ADD_COMMENT") {
            setComment("")
            return {
                ...state,
                Comments: [...state.Comments, action.payload],
                isNotEmpty: true,
                isAdded: true,
                toastMsg: "Comment added successfully!!!",
            }
        }
        if(action.type==="NO_COMMENT"){
            setComment("")
            return{
                ...state,
                isAdded:true,
                toastMsg:"Please add some comment"
            }
        }
        return state;
    }
    const initialState = {
        Comments: [],
        isNotEmpty: false,
        isAdded: false,
        toastMsg: ""
    }
    const [state, dispatch] = useReducer(reducer, initialState)
   
    const { isAdded, toastMsg } = state

    //function get called when submit button is clicked
    const handleSubmit = (e) => {
        e.preventDefault();
        const comments = { Comment };
        Comment.length >= 1
            ?
            dispatch({ type: "ADD_COMMENT", payload: comments })
            :
            dispatch({type: "NO_COMMENT"})
            // toast("Please add some comment", { position: toast.POSITION.BOTTOM_CENTER })
    }
    useEffect(()=>{
        useRefInput.current.focus();
        console.log(useRefInput.current)
    })
    return (
           <div className="Comment-form">
            <form className='form'>
                <h4>Comment:</h4>
                {isAdded && <Toast toastMsg={toastMsg} />}
                {/* <label>Comment:</label>{" "} */}
                <input className='form-input'
                    type='text'
                    placeholder="Please type some comment here..."
                    id="comment"
                    name="Comment"
                    onChange={(e) => {
                        setComment(e.target.value)
                    }}
                    value={Comment}
                    ref={useRefInput}
                >
                </input>
                <div className="submit">
                    <button onClick={handleSubmit}>Submit</button>
                </div>
            </form>
            <div>
                {state.Comments.map((commen,index, id) => {
                    const { Comment } = commen
                    return (
                        <div className="comment-list">
                            <li key={id}><strong>Comment{index + 1}:</strong>{" "}{Comment}</li>
                        </div>
                    )
                })}
            </div>
            
           </div>
        
    )
}
function Toast(props) {
    return (
        <div style={{ textAlign: "center", color: "red", background: "lightgray" }}><strong>{props.toastMsg}</strong></div>
    )
}
export default Comment2;