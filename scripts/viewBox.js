import {svgAddBook as svg, pathAddBook as path} from "./domElements.js";



const bbox = path.getBBox();

const viewBox = `${bbox.x} ${bbox.y} ${bbox.width} ${bbox.height}`;

svg.setAttribute('viewBox', viewBox);