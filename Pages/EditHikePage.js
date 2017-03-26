let Context = require("./../Modules/Context")

let hike = this.Parameter;

let name = hike.map(x => x.name);
let location = hike.map(x => x.location);
let distance = hike.map(x => x.distance);
let rating = hike.map(x => x.rating);
let comments = hike.map(x => x.comments);

let save = () => {
    Context.updateHike(hike.value.id, name.value, location.value, distance.value, rating.value, comments.value);
    router.goBack();
}

let cancel = () => {
    // Refresh hike value to reset dependent Observables' values
    hike.value = hike.value;
    router.goBack();
}

module.exports = {
    name,
    location,
    distance,
    rating,
    comments,
    save: save,
    cancel: cancel
};