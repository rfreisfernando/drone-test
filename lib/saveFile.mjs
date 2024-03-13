import fs from "fs/promises";

export const saveOutput = (content, filepath) => {
  return fs.writeFile(filepath, content);
};
