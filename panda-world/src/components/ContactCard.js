import React from "react";
import { Link } from "react-router-dom";
import user from "../images/user.jpg";

const ContactCard = (props) => {
  const { id, name, email } = props.contact;
  return (
    <div className="item">
      <div className="contact">
        <Link to={{pathname:'/contact/${id}', state:{contact: props.contact}}}>
            <>
            <div className="header">{name}</div>
            <div>{email}</div>
        </></Link>
        <img className="ui avatar image" src={user} alt="user" />
        
        <i
          className="trash alternate outline icon"
          style={{ color: "red", marginLeft: "98%" }}
          onClick={() => props.clickHandler(id)}
        ></i>
      </div>
    </div>
  );
};
export default ContactCard;
