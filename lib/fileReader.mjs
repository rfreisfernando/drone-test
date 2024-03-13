import fs from "fs/promises";

export const getFileContent = async filepath => {
  const buffer = await fs.readFile(filepath);
  const fileContent = buffer.toString();

  return fileContent;
};
