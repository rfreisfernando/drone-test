export const sortLocationsAsc = packages => {
  return packages.sort((a, b) => a.weight - b.weight);
};

export const sortLocationsDesc = packages => {
  return packages.sort((a, b) => b.weight - a.weight);
};

export const initializeTrips = drones => {
  return drones.reduce((acc, drone) => ({ ...acc, [drone.name]: { capacity: drone.capacity, trips: [{ locations: [], totalWeight: 0 }] } }), {});
};

export const addNewEmptyTrip = trips => {
  Object.keys(trips).forEach(key => {
    const lastTrip = trips[key].trips.at(-1);

    if (lastTrip.totalWeight === 0) {
      return;
    }

    trips[key].trips.push({ locations: [], totalWeight: 0 });
  });
};

export const logHelper = () => {
  console.log("*** Please provide both the input and output file path as arguments:");
  console.log("$ node index.mjs path/to/inputFile.txt path/to/outputFile.txt\n");
  console.log("*** Using the default ones: 01/Input.txt and 01/Output.txt\n");
};
