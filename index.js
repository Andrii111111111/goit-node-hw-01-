import { listContacts } from "./contacts.js";

listContacts()
  .then((contacts) => console.log(contacts))
  .catch((error) => console.log(error.message));
