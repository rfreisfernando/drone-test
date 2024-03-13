export const getStructure = fileContent => {
  const lines = fileContent.trim().split("\n");
  const drones = [];
  const locations = [];

  const droneInfos = lines[0].split(",").map(item => item.trim());
  for (let i = 0; i < droneInfos.length; i += 2) {
    const droneName = droneInfos[i].replace(/[\[\]']+/g, "");
    const droneCapacity = parseInt(droneInfos[i + 1].replace(/[\[\]']+/g, ""));
    drones.push({ name: droneName, capacity: droneCapacity });
  }

  for (let i = 1; i < lines.length; i++) {
    const [location, weight] = lines[i].split(",").map(item => item.replace(/[\[\]']+/g, ""));
    locations.push({ location, weight: parseInt(weight) });
  }

  return { drones, locations };
};
