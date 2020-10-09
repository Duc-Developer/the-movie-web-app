import { database, storage } from '../firebase';

export function createNewUserApi(data) {
    let newData = {};
    const newId = database.ref().child('users').push().key;
    newData['/users/' + newId] = data;
    database.ref().update(newData);
    return newId;
}

export function uploadImage(file) {
    const metadata = {
        contentType: 'image/jpeg'
    };
    const uploadTask = storage.ref().child('images/' + file.name).put(file, metadata);
    uploadTask.on(
        'state_changed',
        (snapshot) => { handleProgress(snapshot) },
        (error) => { handleError(error) },
        handleResponse
    )
    function handleProgress(snapshot) {
        // console.log("snapshot", snapshot)
    }
    function handleError(error) {
        // console.log("error", error)
    }
    function handleResponse() {
        return uploadTask.snapshot.ref.getDownloadURL().then(function (downloadURL) {
            return downloadURL
        });
    }
    return handleResponse();
}

export function findQuery(ref, child, query, totalLimit) {
    const events = database.ref(ref);
    const match = events.orderByChild(child)
        .equalTo(query)
        .limitToFirst(totalLimit);
    return match.once('value').then(snap => snap.val());
}

export function addWishListApi(userId, movieData) {
    const movieId = movieData.id;
    let postData = {
        [movieId]: movieData
    }
    let updateTask = database
        .ref("/users/" + userId + "/wishList")
        .update(postData)
}