console.log('***** Music Collection *****')

// initiate the music collection
let collection = [];

// create function that adds music info to the collection array
function addToCollection(title, artist, yearPublished) {
    let album = {
        'title': title,
        'artist': artist,
        'yearPublished': yearPublished
    } // end album
    collection.push (album);
    return album;
} // end addToCollection

console.log('Added to collection:',addToCollection('Highway 61 Revisited', 'Bob Dylan', '1965')
);
console.log('Added to collection:',addToCollection('The Freewheelin\' Bob Dylan', 'Bob Dylan', '1963')
);
console.log('Added to collection:',addToCollection('Andrew Bird & the Mysterious Production of Eggs', 'Andrew Bird', '2005')
);
console.log('Added to collection:',addToCollection('When Life Gives You Lemons, You Paint That Shit Gold', 'Atmosphere', '2008')
);
console.log('Added to collection:',addToCollection('Whatever and Ever Amen','Ben Folds Five', '1997')
);
console.log('Added to collection:',addToCollection('Spelled In Bones','Fruit Bats', '2005')
);

console.log('My music collection is now:', collection);

function showCollection(arr) {
    console.log('the collection is', arr.length, 'items long');
    for (const x of arr){
        console.log(`${x.title} by ${x.artist} published in ${x.yearPublished}`);
    }
}
showCollection(collection);

function findByArtist(artist) {
    
}