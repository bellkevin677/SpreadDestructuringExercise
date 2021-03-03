const mcuShows = [
    "The Falcon And The Winter Soldier",
    "WandaVision"
];
// console.log(mcuShows);

const starWarsShows = [
    "The Mandalorian",
    "The Clone Wars"
];

const disneyPlusShows = [
    ...mcuShows,
    ...starWarsShows, 
    "Muppets Now"
];

console.log(disneyPlusShows);

const netflixMovies = {
    action: "Extraction",
    drama: "The Irishman"
};
// console.log(netflixMovies);

const disneyPlusMovies = {
    musical: "Hamilton",
    drama: "Togo"
};
// console.log(disneyPlusMovies);

const streamingMovies = {
    ...disneyPlusMovies,
    ...netflixMovies,
    comedy: "Shazam"
};

console.log(streamingMovies);

const disneyJunior = [
    "PJ Masks",
    "Jake and the Neverland Pirates"
];

const [pj, jake] = disneyJunior;

console.log(pj, jake);

const avengers = {
    captianAmerica: "Steve Rogers",
    theHulk: "Bruce Banner",
};

const {captianAmerica: SteveRogers, theHulk: BruceBanner} = avengers;

console.log(SteveRogers, BruceBanner);

const moreAvengers = {
    blackWidow: "Natasha Romanoff",
    hawkeye: "Clint Barton",
    ironMan: "Tony Stark"
};

const {blackWidow: nat, ...others} = moreAvengers;

console.log(nat, others);

const bonus = {
    first: [1, 2, 3],
    second: [4, 5, 6],
    third: [7, 8, 9]
  };

//   const all = bonus.first;

//   console.log(all);