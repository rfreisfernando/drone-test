
import { getFileContent } from "./fileReader.mjs";
import { getStructure } from "./buildData.mjs";
import { addNewEmptyTrip, initializeTrips, sortLocationsAsc } from "./helperFunctions.mjs";
import { formatOutput } from "./structureToText.mjs";
import { saveOutput } from "./saveFile.mjs";

export const planTrips = async (inputFilePath, outputFilePath) => {
    // extract the input file content and create the drone and locations structure
    const fileContent = await getFileContent(inputFilePath);
    const { drones, locations } = getStructure(fileContent);
  
    //sort the location by the weight ascending
    const sortedLocations = sortLocationsAsc(locations);
  
    // this is the final trips structure with the drone details and the trips it will execute
    const trips = initializeTrips(drones);
  
    while (sortedLocations.length > 0) {
      const location = sortedLocations.pop();
      let locationIncluded = false;
  
      for (let drone of drones) {
        const droneTrips = trips[drone.name].trips;
        const currentTrip = droneTrips.at(-1);
  
        // if the current trip of a drone still has space for more, add the location to it
        if (currentTrip.totalWeight + location.weight <= drone.capacity) {
          currentTrip.locations.push(location);
          currentTrip.totalWeight += location.weight;
          locationIncluded = true;
          break;
        }
      }
  
      if (!locationIncluded) {
        addNewEmptyTrip(trips);
        // process the location again since none of drones have included it
        sortedLocations.push(location);
      }
    }
  
    const outputContent = formatOutput(trips);
    await saveOutput(outputContent, outputFilePath);
  };
