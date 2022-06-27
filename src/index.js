import makeNewListing from "./add-listing";

const leftSide = document.querySelector('#left-side');
const details = document.querySelector('#details');

let mainList = [];

let entry = document.createElement('div');
entry.textContent = "Add an entry to see it's deets here";
entry.id = 'entry-details';
details.appendChild(entry);

function addToList(listing) {
    mainList.push(listing);
}

function addToLeftDom(listing) {
    const entry = document.createElement('div');
    entry.textContent = `${listing.title}`;
    entry.className = 'left-entry';
    leftSide.appendChild(entry);
    entry.addEventListener('click', () => {
        addToDetails(listing);
    });
}

function addToDetails(listing) {
    entry.textContent = "";
    entry.textContent = `${listing.title}\r\n${listing.description}\r\n
        ${listing.dueDate}\r\n${listing.priority}`;
    entry.className = 'right-entry';
}

const testListing = makeNewListing("Pet cats", "Pet Dash and Molly on their fuzzy lil heads", 
"June 26, 00:00", "Priority: High");
addToList(testListing);
addToLeftDom(testListing);
// addToDetails(testListing);

const anotherTest = makeNewListing("Run", "Go for a run at the greenway. Do the best you can.",
 'June 27, 14:00', "Priority: Low");
 addToList(anotherTest);
 addToLeftDom(anotherTest);

console.log(mainList);

