import makeNewListing from "./add-listing";

const leftSide = document.querySelector('#left-side');
const details = document.querySelector('#details');

let mainList = [];

function addToList(listing) {
    mainList.push(listing);
}



const testListing = makeNewListing("Pet cats", "Pet Dash and Molly on their fuzzy lil heads", 
"June 26, 00:00", "Priority: High");
addToList(testListing);

const anotherTest = makeNewListing("Run", "Go for a run at the greenway. Do the best you can.",
 'June 27, 14:00', "Priority: Low");
 addToList(anotherTest);

console.log(mainList);