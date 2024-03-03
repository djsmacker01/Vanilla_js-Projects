//Create a Netflix TV Show class with a constructor that 
//makes Netflix TV Shows with 4 properties and 3 methods

class MakeNetflixTvShows{
    constructor(title, genre,rating,numOfEpisodes) {
        this.title = title;
        this.genre = genre;
        this.rating = rating;
        this.numOfEpisodes = numOfEpisodes;
    }

    play() {
        console.log('Play')
    }

    stop() {
        console.log('Stop')
    }

    saveTolist() { 
        console.log('Save Tolist')
    }


}


let blackList = new MakeNetflixTvShows('blackList','Drama',7.6, 10)