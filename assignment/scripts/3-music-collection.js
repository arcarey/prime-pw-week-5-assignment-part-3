console.log('***** Music Collection *****')

// initiate the music collection
let collection = [];

// create function that adds music info to the collection array
function addToCollection(title, artist, yearPublished) {
    let album = {
        'title': title,
        'artist': artist,
        'year published': yearPublished
    } // end album
    collection.push (album);
    return album;
} // addToCollection


