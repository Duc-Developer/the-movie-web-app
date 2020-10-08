import { database, storage } from '../firebase';

export function createNewUser(data) {
    let newData = {};
    const newId = database.ref().child('users').push().key;
    newData['/users/' + newId] = data;
    return database.ref().update(newData);
}

export function uploadImage(file, catchUrl) {
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
        uploadTask.snapshot.ref.getDownloadURL().then(function (downloadURL) {
            catchUrl(downloadURL);
        });
    }
}