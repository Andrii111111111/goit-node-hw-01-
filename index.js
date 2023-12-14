import * as contacts from "./contacts.js";

// const argv = require("yargs").argv;

const invokeAction = async ({ action, id, name, email, phone }) => {
  switch (action) {
    case "list":
      const allContacts = await contacts.listContacts();
      return console.log(allContacts);
      break;

    case "get":
      const oneContact = await contacts.getContactsById(id);
      return console.log(oneContact);
      break;

    case "add":
      // ... name email phone
      break;

    case "remove":
      // ... id
      break;

    default:
      console.warn("\x1B[31m Unknown action type!");
  }
};

invokeAction({ action: "get", id: "AeHIrLTr6JkxGE6SN-0Rw" });
