import * as contacts from "./contacts.js";
import yargs from "yargs";

const argv = require("yargs").argv;

function invokeAction({ action, id, name, email, phone, ...data }) {
  switch (action) {
    case "list":
      const allContacts = contacts.getAllContacts();
      return console.log(allContacts);

    case "get":
      const oneContact = contacts.getContactsById(id);
      return console.log(oneContact);

    case "add":
      const newContact = contacts.addContact(data);
      return console.log(newContact);

    case "remove":
      const removeContact = contacts.deleteById(id);
      return console.log(removeContact);

    default:
      console.warn("\x1B[31m Unknown action type!");
  }
}
invokeAction(argv);

// invokeAction({
//   action: "list",
// });

// invokeAction({
//   action: "get",
//   id: "Z5sbDlS7pCzNsnAHLtDJd",
// });

// invokeAction({
//   action: "add",
//   name: "name",
//   email: "email",
//   phone: "1234567890",
// });

// invokeAction({
//   action: "remove",
//   id: "rsKkOQUi80UsgVPCcLZZW",
// });
