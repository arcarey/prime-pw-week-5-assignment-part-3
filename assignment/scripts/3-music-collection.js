console.log('***** Music Collection *****')

// initiate the music collection
let collection = [];

// create function that adds music info to the collection array
function addToCollection(titleIn, artistIn, yearPublishedIn) {
    let album = {
        title: titleIn,
        artist: artistIn,
        yearPublished: yearPublishedIn
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
    let results = [];
    for (x of collection){
        if (x.artist === artist) {results.push (x)} 
    }
    return results;
}

console.log('I have these albums by Bob Dylan in my collection:', findByArtist('Bob Dylan'));

// Strech Goals:

// must take an object in this format: { artist: 'Ray Charles', year: 1957 }
function search(artistYearObj) {
    let results = collection;
    // need an if statement to check that the object being passed as an argument isn't empty
        if (artistYearObj && Object.keys(artistYearObj).length > 0){
            results = [];
            for (x of collection){
                if (artistYearObj.artist === x.artist && artistYearObj.year === x.yearPublished){
                    results.push(x);
                }
            }
        }
    return results;
}// end search 
console.log('search for a bob dylan album from 1965:', search({artist:'Bob Dylan', year: '1965'}));
console.log('expect full original collection when passed no argument', search());
console.log('expect full original collection when passed an empty object', search({}));
