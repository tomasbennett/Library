// import { svgAddBook as openModalButton, dialogFormSubmitBtn as submitBtn, dialogForm as form } from "./domElements.js";
// import { booksContainer as container } from "./domElements.js";
// import { imgIndex as imgCarouselInd } from "./infiniteCarousel.js";



// document.addEventListener("click", (e) => {
//     const elem = e.target;
//     if(elem){
        
        


//     }
// })

// function BookEdit(){

// }







// function BookInfo(formObject, imgIndex, imgArray){
//     const form = new FormData(formObject.target);

//     this._bookImg = imgArray[imgIndex()];
//     this._bookTitle = form.get("title-input");
//     this._bookDescritpion = form.get("description-input");
//     this._prevRead = form.get("prev-read-input") ?? false;

// }

// Object.defineProperty(BookInfo.prototype, "imgFilePath", {
//     get : function(){
//         return "./images/book-images/" + this._bookImg + ".png";
//     }
// });



// BookInfo.prototype.submitForm = function(){
//     const li = document.createElement("li");
//     li.classList.add("book-item");


//     const imageContainer = document.createElement("div");
//     imageContainer.classList.add("image-container");
//     li.appendChild(imageContainer);


//     const img = document.createElement("img");
//     img.setAttribute("loading", "lazy");
//     img.setAttribute("alt", "Book Image");

//     img.setAttribute("src", this.imgFilePath);

//     img.classList.add("book-image", this._bookImg);
//     imageContainer.appendChild(img);

    
//     const titleP = document.createElement("p");
//     titleP.classList.add("book-title");
//     titleP.innerText = this._bookTitle;
//     li.appendChild(titleP);


//     const descP = document.createElement("p");
//     descP.classList.add("book-description");
//     descP.innerText = this._bookDescritpion;
//     li.appendChild(descP);


//     const prevReadContainer = document.createElement("div");
//     prevReadContainer.classList.add("prev-read-outcome-container");
//     li.appendChild(prevReadContainer);


//     const readDesc = document.createElement("p");
//     readDesc.classList.add("prev-read-outcome-description");
//     readDesc.textContent = this._prevRead ? "Read:" : "Not Finished:";
//     prevReadContainer.appendChild(readDesc);


//     const sliderLabel = document.createElement("label");
//     sliderLabel.classList.add("prev-read-outcome-label");
//     const sliderInput = document.createElement("input");
//     sliderInput.classList.add("slider", "prev-read-outcome");
//     sliderInput.setAttribute("type", "checkbox");
//     sliderInput.setAttribute("role", "slider");

//     sliderInput.checked = this._prevRead;

//     sliderLabel.appendChild(sliderInput);
//     prevReadContainer.appendChild(sliderLabel);
    

//     const buttonsContainer = document.createElement("div");
//     buttonsContainer.classList.add("book-buttons-container");


//     const editButton = document.createElement("button");
//     editButton.classList.add("edit-book-button");
//     editButton.setAttribute("type", "button");


//     const editSvg = document.createElementNS("http://www.w3.org/2000/svg", "svg");
//     editSvg.setAttribute("xmlns", "http://www.w3.org/2000/svg");
//     editSvg.setAttribute("viewBox", "0 0 24 24");
//     const editTitle = document.createElementNS("http://www.w3.org/2000/svg", "title");
//     editTitle.textContent = "settings-cogs";
//     editSvg.appendChild(editTitle);
//     const editPath = document.createElementNS("http://www.w3.org/2000/svg", "path");
//     editPath.setAttribute("d", "M15.9,18.45C17.25,18.45 18.35,17.35 18.35,16C18.35,14.65 17.25,13.55 15.9,13.55C14.54,13.55 13.45,14.65 13.45,16C13.45,17.35 14.54,18.45 15.9,18.45M21.1,16.68L22.58,17.84C22.71,17.95 22.75,18.13 22.66,18.29L21.26,20.71C21.17,20.86 21,20.92 20.83,20.86L19.09,20.16C18.73,20.44 18.33,20.67 17.91,20.85L17.64,22.7C17.62,22.87 17.47,23 17.3,23H14.5C14.32,23 14.18,22.87 14.15,22.7L13.89,20.85C13.46,20.67 13.07,20.44 12.71,20.16L10.96,20.86C10.81,20.92 10.62,20.86 10.54,20.71L9.14,18.29C9.05,18.13 9.09,17.95 9.22,17.84L10.7,16.68L10.65,16L10.7,15.31L9.22,14.16C9.09,14.05 9.05,13.86 9.14,13.71L10.54,11.29C10.62,11.13 10.81,11.07 10.96,11.13L12.71,11.84C13.07,11.56 13.46,11.32 13.89,11.15L14.15,9.29C14.18,9.13 14.32,9 14.5,9H17.3C17.47,9 17.62,9.13 17.64,9.29L17.91,11.15C18.33,11.32 18.73,11.56 19.09,11.84L20.83,11.13C21,11.07 21.17,11.13 21.26,11.29L22.66,13.71C22.75,13.86 22.71,14.05 22.58,14.16L21.1,15.31L21.15,16L21.1,16.68M6.69,8.07C7.56,8.07 8.26,7.37 8.26,6.5C8.26,5.63 7.56,4.92 6.69,4.92A1.58,1.58 0 0,0 5.11,6.5C5.11,7.37 5.82,8.07 6.69,8.07M10.03,6.94L11,7.68C11.07,7.75 11.09,7.87 11.03,7.97L10.13,9.53C10.08,9.63 9.96,9.67 9.86,9.63L8.74,9.18L8,9.62L7.81,10.81C7.79,10.92 7.7,11 7.59,11H5.79C5.67,11 5.58,10.92 5.56,10.81L5.4,9.62L4.64,9.18L3.5,9.63C3.41,9.67 3.3,9.63 3.24,9.53L2.34,7.97C2.28,7.87 2.31,7.75 2.39,7.68L3.34,6.94L3.31,6.5L3.34,6.06L2.39,5.32C2.31,5.25 2.28,5.13 2.34,5.03L3.24,3.47C3.3,3.37 3.41,3.33 3.5,3.37L4.63,3.82L5.4,3.38L5.56,2.19C5.58,2.08 5.67,2 5.79,2H7.59C7.7,2 7.79,2.08 7.81,2.19L8,3.38L8.74,3.82L9.86,3.37C9.96,3.33 10.08,3.37 10.13,3.47L11.03,5.03C11.09,5.13 11.07,5.25 11,5.32L10.03,6.06L10.06,6.5L10.03,6.94Z");
//     editSvg.appendChild(editPath);
//     editButton.appendChild(editSvg);
//     buttonsContainer.appendChild(editButton);


//     const deleteButton = document.createElement("button");
//     deleteButton.classList.add("delete-book-button");
//     deleteButton.setAttribute("type", "button");


//     const deleteSvg = document.createElementNS("http://www.w3.org/2000/svg", "svg");
//     deleteSvg.setAttribute("xmlns", "http://www.w3.org/2000/svg");
//     deleteSvg.setAttribute("viewBox", "0 0 24 24");
//     const deleteTitle = document.createElementNS("http://www.w3.org/2000/svg", "title");
//     deleteTitle.textContent = "delete-trash-can";
//     deleteSvg.appendChild(deleteTitle);
//     const deletePath = document.createElementNS("http://www.w3.org/2000/svg", "path");
//     deletePath.setAttribute("d", "M9,3V4H4V6H5V19A2,2 0 0,0 7,21H17A2,2 0 0,0 19,19V6H20V4H15V3H9M9,8H11V17H9V8M13,8H15V17H13V8Z");
//     deleteSvg.appendChild(deletePath);
//     deleteButton.appendChild(deleteSvg);
//     buttonsContainer.appendChild(deleteButton);

//     li.appendChild(buttonsContainer);

//     container.removeAttribute("empty");
//     container.appendChild(li);
// }



// form.addEventListener("submit", (e) => {
//     const imgArray = ["black-cover", "brown-cover-sealed", "brown-cover-unsealed", "dark-blue-cover", "light-blue-cover"];

//     const bookItem = new BookInfo(e, imgCarouselInd, imgArray);
//     bookItem.submitForm();
// });



