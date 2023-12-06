import fs from "fs/promises";
import detect from "detect-file-encoding-and-language";
const filePath = "./files/textFile.txt";

const getText = async (fileName) => {
  const detectedCodeType = await detect(fileName);
  console.log(detectedCodeType);
  const buffer = await fs.readFile(fileName, detectedCodeType.encoding);
  console.log(buffer);
};
const addText = async (fileName, text) => {
  await fs.appendFile(fileName, text);
};

const writeText = async() => {
    await fs.writeFile('./files/theBest', "hello world!")
}

getText(filePath);
addText(filePath, '\n Hello!');
writeText();

