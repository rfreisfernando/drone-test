# Drone Trip Planner

## Description

This project is a drone trip planning application. It reads input data from a file, processes it to plan trips for drones based on their capacity and the weight of locations they need to visit. The application then outputs the planned trips to a specified file.

## Features

- Reads input data from a file.
- Processes the data to plan trips for drones.
- Sorts locations by weight in ascending order.
- Assigns locations to drones based on their capacity.
- Outputs the planned trips to a file.

## Installation

1. Ensure you have Node.js installed on your system. This project was built using Node.js `v21.0.0` version, but it should work with any version above `v18.x.x`.
2. Clone this repository to your local machine.
3. Navigate to the project directory in your terminal.
4. There is no external dependencies so no `npm install` is required.

## Usage

To run the application, use the following command in your terminal:

```bash
node index.js <inputFilePath> <outputFilePath>
```

Replace `<inputFilePath>` with the path to your input file and `<outputFilePath>` with the path where you want the output file to be saved.

If you do not provide the input and output file paths, the application will use default paths:

- Input: `01/Input.txt`
- Output: `01/output1.txt`

## Example

```bash
node index.mjs 01/Input.txt 01/output1.txt
```

This command will read the input from `01/Input.txt`, process it, and save the output to `01/output1.txt`.
