import fs from "fs/promises";
import detectFileEncoding from "detect-file-encoding-and-language";

export const listContacts = async () => {
  const contactsPath = "./db/contacts.json";
  const { encoding } = await detectFileEncoding(contactsPath);
  const data = await fs.readFile(contactsPath, encoding);
  console.log(data);
};
