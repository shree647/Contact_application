import React from "react";
import { Link } from "react-router-dom";
import ContactCard  from "./ContactCard.js";

const Contact = (props) =>{
    console.log(props);
    
    const deleteContactHandler = (id) => {
        props.getContactId(id);
    };
    
    const renderContactList = props.contacts.map((contact) =>{
         return (
           <ContactCard 
           contact = {contact} 
           clickHandler ={deleteContactHandler} 
           key = {contact.id}/>
          );
      });
return( 
    <>
       <div className="main">
        <h2 style={{marginTop:'50px'}} >Contact List
            <Link to="/add">
            <button className="ui button blue right">Add Contact</button>
            </Link>
        </h2>
       </div>
      <div className='ui celled list'>{renderContactList}</div>
    </>
   );
};
 
export default Contact;