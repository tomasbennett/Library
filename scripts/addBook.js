const svgElem = document.getElementById("add-book");

svgElem.addEventListener("mousedown", addBook);

function addBook(){
    const dialogBox = document.getElementById("dialog");

    dialogBox.showModal();
}
