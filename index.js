import * as contacts from "./contacts.js";
import { program } from "commander";

async function invokeAction({ action, id, name, email, phone, ...data }) {
  switch (action) {
    case "list":
      const allContacts = await contacts.getAllContacts();
      return console.log(allContacts);

    case "get":
      const oneContact = await contacts.getContactsById(id);
      return console.log(oneContact);

    case "add":
      const newContact = await contacts.addContact(name, email, phone);
      return console.log(newContact);

    case "remove":
      const removeContact = await contacts.deleteById(id);
      return console.log(removeContact);

    default:
      console.warn("\x1B[31m Unknown action type!");
  }
}

program
  .option("-a, --action <type>", "choose action")
  .option("-i, --id <type>", "user id")
  .option("-n, --name <type>", "user name")
  .option("-e, --email <type>", "user email")
  .option("-p, --phone <type>", "user phone");

program.parse();

const options = program.opts();

invokeAction(options);
