const svg = document.getElementById('add-book');
const path = document.getElementById('path6');

const bbox = path.getBBox();

const viewBox = `${bbox.x} ${bbox.y} ${bbox.width} ${bbox.height}`;

svg.setAttribute('viewBox', viewBox);