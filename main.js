const cardHolder = document.querySelector("#cardHolder");
let popped = false;
let myLibrary = [];

//BOOK Object constructor
function Book(title="No Title", author="No Author", pages=0, read=false) {
    
    this.title = (title == "" ? "No Title" : title);
    this.author = (author == "" ? "No Author" : author);
    this.pages = (pages == "" ? "No Pages" : pages);
    this.read = read;
    this.info = function () {
        return (this.read ? "Read." : "Not Read");
    };
}


//Adds book to library/ Array
function addBookToLibrary(book) {
    myLibrary.push(book);
}

//create cards for all books in page
function render() {
    cardHolder.innerHTML="";
    for (let i = 0; i < myLibrary.length; i++) {
        //card element
        let card = document.createElement("div");
        card.setAttribute("class", "card");
        
        //title
        let title = makeElement("h2", myLibrary[i].title);
        title.setAttribute("class", "card__content");
        //author
        let author = makeElement("h3", myLibrary[i].author);
        author.setAttribute("class", "card__content");
        //pages
        let page = makeElement("h3", myLibrary[i].pages);
        title.setAttribute("class", "card__content");
        //read or not
        let boolRead = makeElement("h3", myLibrary[i].info());
        author.setAttribute("class", "card__content");
        //removev button
        let removeBtn = makeElement("button", "Remove");
        removeBtn.setAttribute("class","card__btn newCardBtn");
        removeBtn.setAttribute("id","rmvCard");
        removeBtn.addEventListener('click', function(){myLibrary.splice(i,1); render()});

        //read on or off
        let readBtn = makeElement("button","Read");
        readBtn.setAttribute("class","card__btn newCardBtn");
        readBtn.setAttribute("id", "toggleRead");
        readBtn.addEventListener('click',function(){
            if(myLibrary[i].read == true)
            {
                myLibrary[i].read = false;
            }
            else{
                myLibrary[i].read = true;
            }
            render();
        });


        //adding book info to card
        card.appendChild(title);
        card.appendChild(author);
        card.appendChild(page);
        card.appendChild(boolRead);
        card.appendChild(removeBtn);
        card.appendChild(readBtn);
        //add card to page
        cardHolder.appendChild(card);
    }

}

function makeElement(elementType, content) {
    let Element = document.createElement(elementType);
    Element.textContent = content;
    return Element;
}


//Modal Section
const popUpDisplay = document.querySelector(".bg-modal");

//submit button and function on click
let userIn = document.querySelector("#userInput");
userIn.onsubmit = function(e){
    e.preventDefault();
    addBookToLibrary(new Book(userIn.title.value,userIn.author.value, userIn.pages.value, userIn.read.checked));
    render();
}

function popUp(){
    if(popped == true)
    {
        popUpDisplay.style.display = 'none';
        popped = false;
    }
    else{
        popUpDisplay.style.display = 'flex';
        popped = true;
    }
}


//Modal Section