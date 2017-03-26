let Observable = require("FuseJS/Observable");
let Backend = require("./Backend");

let hikes = Observable();

Backend.getHikes()
    .then(newHikes => hikes.replaceAll(newHikes))
    .catch(error => console.log(`Couldn't get hikes: ${error}.`));


let updateHike = (id, name, location, distance, rating, comments) => {
    var hike = hikes.pick(s => s.id = id);
    hike.name = name;
    hike.location = location;
    hike.distance = distance;
    hike.rating = rating;
    hike.comments = comments;

    Backend.updateHike(id, name, location, distance, rating, comments)
        .catch(error => console.log(`Couldn't update hike with id ${id}: ${error}.`));
}

module.exports = {
    hikes,
    updateHike
}