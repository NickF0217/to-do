import makeNewListing from "./add-listing";
import {
    addNewBtn,
    modalClose,
} from "./modal.js";

const leftSide = document.querySelector('#left-side');
const details = document.querySelector('#details');

addNewBtn;
modalClose;
const confirmBtn = document.querySelector('#confirm-entry');

let mainList = [];

let detailEntry = document.createElement('div');
detailEntry.textContent = "Add an entry to see it's deets here";
detailEntry.id = 'entry-details';
details.appendChild(detailEntry);

function addToList(listing) {
    mainList.push(listing);
}

function addToLeftDom(listing) {
    const entry = document.createElement('div');
    // entry.textContent = `${listing.title}`;
    entry.innerHTML = listing.title + '<br />'+ `Due: ${listing.dueDate}`;
    entry.className = 'left-entry';
    if (listing.priority == "Low") {
        entry.style.border = '2px solid #0f0';
    } else if (listing.priority == "Medium") {
        entry.style.border = '2px solid rgb(246, 255, 0)';
    } else if (listing.priority == "High") {
        entry.style.border = '2px solid #FF8C00';
    }
    leftSide.appendChild(entry);
    entry.addEventListener('click', () => {
        addToDetails(listing);
    });
}

function addToDetails(listing) {
    detailEntry.textContent = "";
    // detailEntry.textContent = `${listing.title}\r\n${listing.description}\r\n
    //     ${listing.dueDate}\r\n${listing.priority}`;
    detailEntry.innerHTML = listing.title + '<br />' + listing.description +'<br />'+ 
        listing.dueDate +'<br />'+ listing.priority;

    if (listing.priority == "Low") {
        detailEntry.style.border = '4px solid #0f0';
     } else if (listing.priority == "Medium") {
        detailEntry.style.border = '4px solid rgb(246, 255, 0)';
     } else if (listing.priority == "High") {
        detailEntry.style.border = '4px solid #FF8C00';
     }
    detailEntry.className = 'right-entry';
}

confirmBtn.addEventListener('click', () => {
    const title = document.getElementsByName('title')[0].value;
    const description = document.getElementsByName('description')[0].value;
    const dueDate = document.getElementsByName('due-date')[0].value;
    const priority = document.getElementsByName('priority')[0].value;
    const newListing =  makeNewListing(title, description, dueDate, priority);
    addToList(newListing);
    addToLeftDom(newListing);

})

/* Entries to test DOM. Will be removed */
const testListing = makeNewListing("Pet cats", "Pet Dash and Molly on their fuzzy lil heads", 
"June 26, 00:00", "Priority: High");
addToList(testListing);
addToLeftDom(testListing);

const anotherTest = makeNewListing("Run", "Go for a run at the greenway. Do the best you can.",
 'June 27, 14:00', "Priority: Low");
 addToList(anotherTest);
 addToLeftDom(anotherTest);

console.log(mainList);
