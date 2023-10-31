const { findNearestLocation } = require("./repository");

module.exports.getNearestLocation = async (req, res) => {

    const inputData = req.query;
    const latitude = parseFloat(inputData.lat)
    const longitude = parseFloat(inputData.long)
    
    const location = findNearestLocation(latitude, longitude);

    if (!location) throw ({ statusCode: 403, message: "could not find in static location" });

    return { nearestLocation: location.name };

}