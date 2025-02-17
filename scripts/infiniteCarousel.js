function InfiniteCarousel(container, minIndex, maxIndex){
    this._container = container;

    this._min = minIndex;
    this._max = maxIndex;
    this._currentImgIndex = 2;
}

Object.defineProperty(InfiniteCarousel.prototype, "currentImgIndex", {

    get: function(){
        return this._currentImgIndex;
    },

    set: function(value){
        if(value > this._max){
            this._currentImgIndex = this._min;

        }else if(value < this._min){
            this._currentImgIndex = this._max;

        }else{
            this._currentImgIndex = value;

        }
    },

    enumerable: true,
    configurable: true

});
  
InfiniteCarousel.prototype.movement = function(dir) {
    const firstItem = this._container.firstElementChild;
    const lastItem = this._container.lastElementChild;

    if(dir === 'left'){
        --this.currentImgIndex;
        this._container.insertBefore(lastItem, firstItem);

    }else if (dir === 'right'){
        ++this.currentImgIndex;
        this._container.appendChild(firstItem);

    }
};

import { imageContainer as container, svgLeftArrow as left, svgRightArrow as right } from "./domElements.js";

const imgContainerCarousel = new InfiniteCarousel(container, 0, 4);
export const imgCarouselIndex = () => imgContainerCarousel.currentImgIndex;


left.addEventListener('click', imgContainerCarousel.movement.bind(imgContainerCarousel, "left"));
right.addEventListener('click', imgContainerCarousel.movement.bind(imgContainerCarousel, "right"));