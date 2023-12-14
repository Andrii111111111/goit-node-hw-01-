import fs from "fs/promises";
import detectFileEncoding from "detect-file-encoding-and-language";
import path from "path";

const contactsPath = path.resolve("db", "contacts.json");

// ./db/contacts.json

export const listContacts = async () => {
  // const { encoding } = await detectFileEncoding(contactsPath);
  const data = await fs.readFile(contactsPath, "utf-8");
  return JSON.parse(data);
};

export const getContactsById = async (id) => {
  const contacts = await listContacts();
  const result = contacts.find((item) => item.id === id);
  return result;
};
