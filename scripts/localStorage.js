import { svgAddBook as addButton } from "./domElements.js"





LocalStorageManipulation.id = 1;

LocalStorageManipulation.get = function(id){
    let obj = localStorage.getItem(id);
    return JSON.parse(obj);
}

function LocalStorageManipulation(ins){
    this.id = LocalStorageManipulation.id++;

    this.object = ins;
}

LocalStorageManipulation.prototype.set = function(){
    localStorage.setItem(this.id, JSON.stringify(this.object));
}

LocalStorageManipulation.prototype.delete = function(){
    localStorage.removeItem(this.id);
}











function BookEdit(instance = {}){
    this.bookTitle = instance?.bookTitle ?? "";
    this.bookDescription = instance?.bookDescription ?? "";
    this.prevRead = instance?.prevRead ?? false;

}

BookEdit.prototype.openDialog = function(){
    
}

// IDEA: Is that when you go to make / edit a book you pass through
// At minimum the information that it already has / needs
//If this information is not applied then fill in the fields
// with default values and make the book order either random
// or some preset number

document.addEventListener("click", function(e){
    const elem = e.target;
    let book;

    if(elem){
        if(elem.classList.contains("edit-book-button")){
            


        }else if(elem.id == addButton.id){


        }
    }
});