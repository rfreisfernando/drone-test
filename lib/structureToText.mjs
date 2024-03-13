export const formatOutput = data => {
  let output = "";

  for (const droneName in data) {
    const droneData = data[droneName];
    output += `[${droneName}]\n`;

    for (let i = 0; i < droneData.trips.length; i++) {
      const trip = droneData.trips[i];
      output += `Trip #${i + 1}\n`;

      const locations = trip.locations.map(loc => `[${loc.location}]`);
      output += `${locations.join(", ")}\n`;
    }

    output += "\n";
  }

  return output.trim();
};
