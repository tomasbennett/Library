import {imageContainer as container, svgLeftArrow as left, svgRightArrow as right} from "./domElements.js";

left.addEventListener('click', infiniteCarusel.bind(null, "left"));
right.addEventListener('click', infiniteCarusel.bind(null, "right"))


function infiniteCarusel(dir){
    const firstItem = container.firstElementChild;
    const lastItem = container.lastElementChild;

    if(dir == "left"){
        container.insertBefore(lastItem, firstItem);

    }else if(dir == "right"){
        container.appendChild(firstItem);

    }
}