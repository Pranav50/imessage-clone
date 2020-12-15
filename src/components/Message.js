import React, { forwardRef } from "react";
import "./Message.css"
import { Avatar } from "@material-ui/core";
import { selectUser } from "../redux/userReducer";
import { useSelector } from "react-redux";

const Message = forwardRef(
  (
    { id, contents: { timestamp, displayName, email, photo, message, uid } },
    ref
  ) => {
    const user = useSelector(selectUser);
    return (
      <>
      
      <div
        style={{marginTop:'1.2rem'}}
        ref={ref}
        className={`bubble ${user.email === email && "bubble-alt blue"}`}
      >
        {/* <span className="avatar">
        <Avatar src={photo} className="message__photo"/>
        </span> */}
        <p>{message}</p>
        <small>
          {timestamp
            ? (new Date(timestamp?.toDate()).toLocaleString())
            : ""}
        </small>  
      </div>
      
      </>
    );
  }
);

export default Message;