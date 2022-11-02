import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import uuid from "react-uuid";
import "./App.css";
import Header from "./components/Header.js";
import AddContact from "./components/AddContact.js";
import ContactList from "./components/ContactList.js";
import ContactDetail from "./components/ContactDetail.js";


function App() {
  const LOCAL_STORAGE_KEY = "contacts";

  const [contacts, setContacts] = useState(
    JSON.parse(localStorage.getItem(LOCAL_STORAGE_KEY)) ?? []
  );

  const addContactHandler = (contact) => {
    console.log(contact);
    setContacts([...contacts, { id: uuid(), ...contact }]);
  };

  const removeContactHandler = (id) => {
    const newContactList = contacts.filter((contact) => {
      return contact.id !== id;
    });
    setContacts(newContactList);
  };
  useEffect(() => {
    const retriveContacts = JSON.parse(localStorage.getItem(LOCAL_STORAGE_KEY));
    if (retriveContacts) {
      setContacts(retriveContacts);
    }
  }, []);

  useEffect(() => {
    localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(contacts));
  }, [contacts]);

  return (
    <>
      <div>
        <Router>
          <Header />
          <Switch>
            <Route
              path="/"
              exact
              render={(props) => (
                <ContactList
                  {...props}
                  contacts={contacts}
                  getContactId={removeContactHandler}
                />
              )}
            />
            <Route
              path="/add"
              render={(props) => (
                <AddContact {...props} addContactHandler={addContactHandler} />
              )}
            />
          </Switch>
          <Route exact path="/contact/:id" component={ContactDetail}></Route>
        </Router>
      </div>
    </>
  );
}

export default App;
