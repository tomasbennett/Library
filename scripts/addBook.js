
function BookInfo(formObject, imgIndex){
    const form = new FormData(formObject.target);

    this._bookImg = imgIndex();
    this._bookTitle = form.get("title-input");
    this._bookDescritpion = form.get("description-input");
    this._prevRead = form.get("prev-read-input") ?? "off";
}

BookInfo.prototype.submitForm = function(){
    console.log(this._bookImg, this._bookTitle, this._bookDescritpion, this._prevRead);
}


import { dialogFormSubmitBtn as submitBtn , dialogForm as form } from "./domElements.js";
import { imgCarouselIndex as imgCarouselInd } from "./infiniteCarousel.js";

form.addEventListener("submit", (e) => {
    const bookItem = new BookInfo(e, imgCarouselInd);
    bookItem.submitForm();
});



