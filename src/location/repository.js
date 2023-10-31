

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

const getDistance = (lat1, lon1, lat2, lon2) => {
    const toRaduis = (angle) => (angle * Math.PI) / 180;
    const earthRadius = 6371;
    const dLat = toRaduis(lat2 - lat1);
    const dLon = toRaduis(lon2 - lon1);
    const a =
        Math.sin(dLat / 2) * Math.sin(dLat / 2) +
        Math.cos(toRaduis(lat1)) * Math.cos(toRaduis(lat2)) * Math.sin(dLon / 2) * Math.sin(dLon / 2);
    const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
    const distance = earthRadius * c;
    return distance;
}

module.exports.findNearestLocation = (targetLat, targetLon) => {
    let nearestLocation = null;
    let nearestDistance = Infinity;
    staticLocations.forEach((location) => {
        const distance = getDistance(targetLat, targetLon, location.lat, location.long);
        if (distance < nearestDistance) {
            nearestLocation = location;
            nearestDistance = distance;
        }
    })
    return nearestLocation;
}




