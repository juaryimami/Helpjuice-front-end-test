import './styles.css';
import { addTask } from './modules/add.js';
import {
  addHeadingOne, addHeadingTwo, AppendHeadingOne, AppendHeadingTwo,
} from './modules/addHeading.js';
import { getElement } from './modules/tools.js';

const groupContainer = getElement('.text-field');

let isSelected = 0; // variables for determining the headers
let headings = 0;

// creating an event listner method for all the events in the pop up
document.addEventListener('click', (event) => {
  if (event.target && event.target.className === 'text-field') {
    if (isSelected === 0) {
      addTask(event);
      isSelected = 1;
    }
  }
  if (event.target && event.target.className === 'header1') {
    headings = 1;
    if (headings) {
      headings = 1;
    }
    addHeadingOne(event);
  }
  if (event.target.className === 'header2') {
    headings = 2;
    addHeadingTwo(event);
  }
  if (event.target && (event.target.className === 'T-icons1'
  || event.target.className === 'text-area1'
  || event.target.className === 'header-text11'
  || event.target.className === 'header-text21')) {
    headings = 1;
    if (!headings) {
      headings = 1;
    }
    addHeadingOne(event);
  }
  if (event.target && (event.target.className === 'T-icons2'
  || event.target.className === 'text-area2'
  || event.target.className === 'header-text21'
  || event.target.className === 'header-text22')) {
    headings = 2;
    if (!headings) {
      headings = 2;
    }
    addHeadingTwo(event);
  }
}, false);

// methods to display the text content after we hit enter
groupContainer.addEventListener('keyup', (event) => {
  event.preventDefault();
  if (headings === 1 && event.keyCode === 13) {
    AppendHeadingOne(event);
    isSelected = 0;
    headings = 0;
  } else if (headings === 2 && event.keyCode === 13) {
    AppendHeadingTwo(event);
    isSelected = 0;
    headings = 0;
  }
});