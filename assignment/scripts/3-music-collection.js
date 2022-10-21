console.log('***** Music Collection *****')

// initiate the music collection
let collection = [];

// create function that adds music info to the collection array
function addToCollection(titleIn, artistIn, yearPublishedIn, tracksIn) {
    let album = {
        title: titleIn,
        artist: artistIn,
        yearPublished: yearPublishedIn,
        tracks: tracksIn
    } // end album
    collection.push (album);
    return album;
} // end addToCollection

console.log('Added to collection:',addToCollection('Highway 61 Revisited', 'Bob Dylan', '1965', [
    {
        trackNumber: 1,
        trackName: 'Like a Rolling Stone',
        duration: '6:12'
    },
    {
        trackNumber: 2,
        trackName: 'Tombstone Blues',
        duration: '6:01'
    },
    {
        trackNumber: 3,
        trackName: 'It Takes a Lot to Laugh, It Takes a Train to Cry',
        duration: '4:09'
    },
    {
        trackNumber: 4,
        trackName: 'From a Buick 6',
        duration: '3:19'
    },
    {
        trackNumber: 5,
        trackName: 'Ballad of a Thin Man',
        duration: '5:58'
    },
    {
        trackNumber: 6,
        trackName: 'Queen Jane Approximately',
        duration: '5:31'
    },
    {
        trackNumber: 7,
        trackName: 'Highway 61 Revisited',
        duration: '3:30'
    },
    {
        trackNumber: 8,
        trackName: 'Just Like Tom Thumb\'s Blues',
        duration: '5:32'
    },
    {
        trackNumber: 9,
        trackName: 'Desolation Row',
        duration: '11:20'
    },

])
);
console.log('Added to collection:',addToCollection('The Freewheelin\' Bob Dylan', 'Bob Dylan', '1963', [
    {
        trackNumber: 1,
        trackName: 'Blowin\' In the Wind',
        duration: '2:49'
    },
    {
        trackNumber: 2,
        trackName: 'Girl from the North Country',
        duration: '3:23'
    },
    {
        trackNumber: 3,
        trackName: 'Masters of War',
        duration: '4:38'
    },
    {
        trackNumber: 4,
        trackName: 'Down the Highway',
        duration: '3:32'
    },
    {
        trackNumber: 5,
        trackName: 'Bob Dylan\'s Blues',
        duration: '2:29'
    },
    {
        trackNumber: 6,
        trackName: 'A Hard Rain\'s A-Gonna Fall',
        duration: '6:53'
    },
    {
        trackNumber: 7,
        trackName: 'Don\'t Think Twice, It\'s All Right',
        duration: '3:41'
    },
    {
        trackNumber: 8,
        trackName: 'Bob Dylan\'s Dream',
        duration: '5:03'
    },
    {
        trackNumber: 9,
        trackName: 'Oxford Town',
        duration: '1:50'
    },
    {
        trackNumber: 10,
        trackName: 'Talkin\' World War III Blues',
        duration: '6:27'
    },
    {
        trackNumber: 11,
        trackName: 'Corrian, Corrina',
        duration: '2:44'
    },
    {
        trackNumber: 12,
        trackName: 'Honey, Just Allow Me One More Chance',
        duration: '2:01'
    },
    {
        trackNumber: 13,
        trackName: 'I Shall Be Free',
        duration: '4:47'
    },
])
);
console.log('Added to collection:',addToCollection('Andrew Bird & the Mysterious Production of Eggs', 'Andrew Bird', '2005', [
    {
        trackNumber: 1,
        trackName: '/=/',
        duration: '1:06'
    },
    {
        trackNumber: 2,
        trackName: 'Sovay',
        duration: '4:41'
    },
    {
        trackNumber: 3,
        trackName: 'A Nervous Tic Motion Of The Head To The Left',
        duration: '5:00'
    },
    {
        trackNumber: 4,
        trackName: 'Fake Palindromes',
        duration: '2:53'
    },
    {
        trackNumber: 5,
        trackName: 'Measuring Cups',
        duration: '2:52'
    },
    {
        trackNumber: 6,
        trackName: 'Banking on a Myth',
        duration: '4:28'
    },
    {
        trackNumber: 7,
        trackName: 'Masterfade',
        duration: '4:11'
    },
    {
        trackNumber: 8,
        trackName: 'Opposite Day',
        duration: '4:32'
    },
    {
        trackNumber: 9,
        trackName: 'Skin is, My',
        duration: '3:37'
    },
    {
        trackNumber: 10,
        trackName: 'The Naming of Things',
        duration: '4:58'
    },
    {
        trackNumber: 11,
        trackName: 'MX Missiles',
        duration: '4:22'
    },
    {
        trackNumber: 12,
        trackName: '/=/=/',
        duration: '1:09'
    },
    {
        trackNumber: 13,
        trackName: 'Tables And Chairs',
        duration: '4:44'
    },
    {
        trackNumber: 14,
        trackName: 'The Happy Birthday Song',
        duration: '5:03'
    },
])
);
console.log('Added to collection:',addToCollection('When Life Gives You Lemons, You Paint That Shit Gold', 'Atmosphere', '2008', [
    {
        trackNumber: 1,
        trackName: 'Like the Rest of Us',
        duration: '3:21'
    },
    {
        trackNumber: 2,
        trackName: 'Puppets',
        duration: '3:42'
    },
    {
        trackNumber: 3,
        trackName: 'The Skinny',
        duration: '3:37'
    },
    {
        trackNumber: 4,
        trackName: 'Dreamer',
        duration: '4:05'
    },
    {
        trackNumber: 5,
        trackName: 'Shoulda Known',
        duration: '3:07'
    },
    {
        trackNumber: 6,
        trackName: 'You',
        duration: '3:14'
    },
    {
        trackNumber: 7,
        trackName: 'Painting',
        duration: '3:01'
    },
    {
        trackNumber: 8,
        trackName: 'Your Glass House',
        duration: '3:58'
    },
    {
        trackNumber: 9,
        trackName: 'Yesterday',
        duration: '3:24'
    },
    {
        trackNumber: 10,
        trackName: 'Guarentees',
        duration: '4:32'
    },
    {
        trackNumber: 11,
        trackName: 'is',
        duration: '3:41'
    },
    {
        trackNumber: 12,
        trackName: 'Wild Wild Horses',
        duration: '4:15'
    },
    {
        trackNumber: 13,
        trackName: 'Can\'t Break',
        duration: '3:33'
    },
    {
        trackNumber: 14,
        trackName: 'The Waitress',
        duration: '3:00'
    },
    {
        trackNumber: 15,
        trackName: 'In Her Music Box',
        duration: '4:20'
    },

])
);
console.log('Added to collection:',addToCollection('Whatever and Ever Amen','Ben Folds Five', '1997', [
    {
        trackNumber: 1,
        trackName: 'One Angery Dwarf and 200 Solemn Faces',
        duration: '3:52'
    },
    {
        trackNumber: 2,
        trackName: 'Fair',
        duration: '5:55'
    },
    {
        trackNumber: 3,
        trackName: 'Brick',
        duration: '4:31'
    },
    {
        trackNumber: 4,
        trackName: 'Song for the Dumped',
        duration: '3:39'
    },
    {
        trackNumber: 5,
        trackName: 'Selfless, Cold and Composed',
        duration: '6:09'
    },
    {
        trackNumber: 6,
        trackName: 'Kate',
        duration: '3:13'
    },
    {
        trackNumber: 7,
        trackName: 'Smoke',
        duration: '4:52'
    },
    {
        trackNumber: 8,
        trackName: 'Cigarette',
        duration: '1:37'
    },
    {
        trackNumber: 9,
        trackName: 'Steve\'s Last Night in Town',
        duration: '3:27'
    },
    {
        trackNumber: 10,
        trackName: 'Battle of Who Could Care Less',
        duration: '3:15'
    },
    {
        trackNumber: 11,
        trackName: 'Missing the War',
        duration: '4:18'
    },
    {
        trackNumber: 12,
        trackName: 'Evaporated',
        duration: '4:25'
    }
])
);
console.log('Added to collection:',addToCollection('Spelled In Bones','Fruit Bats', '2005', [
    {
        trackNumber: 1,
        trackName: 'Silent Life',
        duration: '3:13'
    },
    {
        trackNumber: 2,
        trackName: 'TV Waves',
        duration: '3:44'
    },
    {
        trackNumber: 3,
        trackName: 'Canyon Girl',
        duration: '2:42'
    },
    {
        trackNumber: 4,
        trackName: 'Born in the \'70s',
        duration: '3:09'
    },
    {
        trackNumber: 5,
        trackName: 'Leg of Bees',
        duration: '4:03'
    },
    {
        trackNumber: 6,
        trackName: 'The Earthquake of \'73',
        duration: '3:21'
    },
    {
        trackNumber: 7,
        trackName: 'Traveler\'s Song',
        duration: '2:49'
    },
    {
        trackNumber: 8,
        trackName: 'The Wind That Blew My Heart Away',
        duration: '2:44'
    },
    {
        trackNumber: 9,
        trackName: 'Spelled in Bones',
        duration: '3:45'
    },
    {
        trackNumber: 10,
        trackName: 'Everyday That We Wake Up It\'s a Beautiful Day',
        duration: '2:26'
    },
])
);

console.log('My music collection is now:', collection);

function showCollection(arr) {
    console.log('the collection is', arr.length, 'items long');
    for (const x of arr){
        console.log(`${x.title} by ${x.artist} published in ${x.yearPublished}`);
        if (x.tracks){
            for (const y of x.tracks){
                console.log(`${y.trackNumber}. ${y.trackName}: ${y.duration}`);
            }
        }
    }
}
showCollection(collection);

function findByArtist(artist) {
    let results = [];
    for (const x of collection){
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
        for (const x of collection){
            if (artistYearObj.artist === x.artist && artistYearObj.year === x.yearPublished){
                results.push(x);
            }//end conditional
        }//end for of loop
    }//end conditional
    return results;
}// end search 
console.log('search for a bob dylan album from 1965:', search({artist:'Bob Dylan', year: '1965'}));
console.log('search for a bob dylan album from 1964:', search({artist:'Bob Dylan', year: '1964'}));
console.log('expect full original collection when passed no argument', search());
console.log('expect full original collection when passed an empty object', search({}));




// search for track, returns an array of results. Each result is an object containing the album info and an object containing and the track info
function findByTrackName(searchInput) {
    let returnVar=[]
    for (const album of collection){
        for (const track of album.tracks){
            if (track.trackName == searchInput){
                returnVar.push ([album,track]);
            }
        }
    }//end loop of collection array
    return returnVar;
}//end function findByTrackName
console.log(findByTrackName('Kate')); 
console.log(
    `the song Kate is found in ${findByTrackName('Kate')[0][0].title} by ${findByTrackName('Kate')[0][0].artist}. It is track number ${findByTrackName('Kate')[0][1].trackNumber}`
); // This seems like a really cryptic way to do this. Depending on the application, I think I would split this function into 2, so I wouldn't have to return an array with ambiguous contents. Maybe findAlbumByTrackName and findSongByName. Or I would add an albumContainedIn key in the track object so I can just return the single object.





// Search function that takes any of 3 arguments

function multiSearch(artist, year, trackName) {
    //start each search result as the entire collection, so when they are compared later, to allow for an empty perameter and still search with the other perameters 
    let artistSearch = collection;
    let yearSearch = collection;
    let trackNameSearch = collection;

    // search our collection for artists that match the search
    if (artist){
        artistSearch = []; //if there is an input, we empty the results of the search and add any matches
        for (const x of collection) {
            if (x.artist === artist) {
                artistSearch.push(x);
            }
        }
    }
    
    // search our collection for years that match the search
    if (year){
        yearSearch = []; //if there is an input, we empty the results of the search and add any matches
        for (const x of collection) {
            if (x.yearPublished === year) {
                yearSearch.push(x);
            }
        }
    }


    // since we already wrote the function to find by track name, let's just resue that function. If we were to use this function in another program, we'd need to bring that code into this block
    if (trackName){ //need a conditional to ignore this code if there's no input
        trackNameSearch = findByTrackName(trackName)[0]; // because we wrote this function to return an array where index 0 is the album and index 1 is the track info we need to grab the index 0
    }


    // This block of combines only the common search results of each argument 
    let combinedResults = [];
    for (const artistResult of artistSearch) {
        for (const yearResult of yearSearch) {
            for (const trackNameResult of trackNameSearch) {
                if (artistResult === yearResult && artistResult === trackNameResult){
                    combinedResults.push(artistResult);
                }// end conditional
            }//end trackNameResult loop
        }//end yearSearch loop
    }//end artistSearch loop

    return combinedResults;

}

console.log('expect 2 albums from 2005:', multiSearch('','2005',''));
console.log('expect 2 albums from Bob Dylan:', multiSearch('Bob Dylan','',''));
console.log('expect 1 album from Bob Dylan from 1965:', multiSearch('Bob Dylan','1965',''));
console.log('expect 1 album from Bob Dylan that has the song Like a Rolling Stone:', multiSearch('','','Like a Rolling Stone'));