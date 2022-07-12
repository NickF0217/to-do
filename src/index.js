import makeNewListing from "./add-listing";
import {
    addNewBtn,
    modalClose,
} from "./modal.js";
// import changeStatus from "./status-btn.js";

const leftSide = document.querySelector('#left-side');
const details = document.querySelector('#details');

addNewBtn;
modalClose;
const confirmBtn = document.querySelector('#confirm-entry');

let mainList = [];
let completed = [];

let detailEntry = document.createElement('div');
detailEntry.textContent = "Add an entry to see it's deets here";
detailEntry.id = 'entry-details';
details.appendChild(detailEntry);

function addToList(listing) {
    mainList.push(listing);
}


function addToLeftDom(listing) {
    const entry = document.createElement('div');
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

    const textSection = document.createElement('p');
    textSection.innerHTML = listing.title + '<br />' + listing.description +'<br />'+ 
        listing.dueDate +'<br />'+ `Priority: ${listing.priority}`;
    detailEntry.appendChild(textSection);

    if (listing.priority == "Low") {
        detailEntry.style.border = '4px solid #0f0';
     } else if (listing.priority == "Medium") {
        detailEntry.style.border = '4px solid rgb(246, 255, 0)';
     } else if (listing.priority == "High") {
        detailEntry.style.border = '4px solid #FF8C00';
     }
    detailEntry.className = 'right-entry';

    const statusBtn = document.createElement('button');
    statusBtn.textContent = "Complete";
    statusBtn.addEventListener('click', () => {
        changeStatus(listing);
        textSection.innerHTML = listing.title + '<br />' + listing.description +'<br />'+ 
            listing.dueDate +'<br />'+ `Priority: ${listing.priority}`;
    })
    detailEntry.appendChild(statusBtn);
}

confirmBtn.addEventListener('click', () => {
    const title = document.getElementsByName('title')[0].value;
    const description = document.getElementsByName('description')[0].value;
    const dueDate = document.getElementsByName('due-date')[0].value;
    const priority = document.getElementsByName('priority')[0].value;
    const origPriority = document.getElementsByName('priority')[0].value;
    const newListing =  makeNewListing(title, description, dueDate, priority, origPriority);
    addToList(newListing);
    addToLeftDom(newListing);
})

function changeStatus(listing) {
    if (listing.priority != "Complete") {
        listing.priority = "Complete";
        detailEntry.classList.add('border-comp');
        completed.push(listing);
    } else {
        listing.priority = listing.origPriority;
        detailEntry.classList.remove('border-comp');
        }
}

/* Entries to test DOM. Will be removed */
const testListing = makeNewListing("Pet cats", "Pet Dash and Molly on their fuzzy lil heads", 
"June 26, 00:00", "High", "High");
addToList(testListing);
addToLeftDom(testListing);

const anotherTest = makeNewListing("Run", "Go for a run at the greenway. Do the best you can.",
 'June 27, 14:00', "Low", "Low");
 addToList(anotherTest);
 addToLeftDom(anotherTest);

// console.table(mainList);