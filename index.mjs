import { join } from "path";
import { logHelper } from "./lib/helperFunctions.mjs";
import { planTrips } from "./lib/tripsPlanner.mjs";

const start = async () => {
  const [inputFilePathArg, outputFilePathArg] = process.argv.slice(2);

  let inputFilePath = inputFilePathArg;
  let outputFilePath = outputFilePathArg;

  if (!inputFilePath || !outputFilePath) {
    logHelper();
    inputFilePath = join("01", "Input.txt");
    outputFilePath = join("01", "Output.txt");
  }

  await planTrips(inputFilePath, outputFilePath);
};

start().then(() => console.log("Done"));
