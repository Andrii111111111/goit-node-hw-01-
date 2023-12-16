import * as contacts from "./contacts.js";
// import yargs from "yargs";
import { program } from "commander";

function invokeAction({ action, id, name, email, phone, ...data }) {
  switch (action) {
    case "list":
      const allContacts = contacts.getAllContacts();
      return console.log(allContacts);

    case "get":
      const oneContact = contacts.getContactsById(id);
      return console.log(oneContact);

    case "add":
      const newContact = contacts.addContact(name, email, phone);
      return console.log(newContact);

    case "remove":
      const removeContact = contacts.deleteById(id);
      return console.log(removeContact);

    default:
      console.warn("\x1B[31m Unknown action type!");
  }
}
// const { argv } = yargs(process.argv.slice(2));

program
  .option("-a, --action <type>", "choose action")
  .option("-i, --id <type>", "user id")
  .option("-n, --name <type>", "user name")
  .option("-e, --email <type>", "user email")
  .option("-p, --phone <type>", "user phone");

program.parse();

const options = program.opts();

invokeAction(options);

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
