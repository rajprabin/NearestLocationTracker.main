

const staticLocations = [
    {
        name: "location1",
        lat: 12.976877,
        long: 80.0441513
    },
    {
        name: "location2",
        lat: 13.080299,
        long: 80.1752355
    },
    {
        name: "location3",
        lat: 13.0455792,
        long: 80.1816859
    },
    {
        name: "location4",
        lat: 11.9372543,
        long: 79.8102816
    },
    {
        name: "location5",
        lat: 13.0455784,
        long: 80.1636612
    },
    {
        name: "location6",
        lat: 13.0737729,
        long: 80.1717384
    },
    {
        name: "location7",
        lat: 12.9719952,
        long: 80.2175944
    },
    {
        name: "location8",
        lat: 13.0616729,
        long: 80.2449932
    },
    {
        name: "location9",
        lat: 13.0647001,
        long: 80.2072073
    },
    {
        name: "location10",
        lat: 12.8215632,
        long: 80.0346745
    },
]

module.exports.findNearestLocation = (lat, long) => {
    let nearestLocation = null;

    staticLocations.forEach((staticLocation) => {
     const userDistance = lat + long;
     const staticDistance  = staticLocation.lat + staticLocation.long;
      if(userDistance < staticDistance){
        nearestLocation = staticLocation
      }
    });

    return nearestLocation;
}




