import { createElement, getElement, getElementValue } from './tools.js';

const groupContainer = getElement('.text-field');
const editorArea = getElement('.editor-area');

export const addHeadingOne = (event) => {
  if (event.target.className === 'T-icons1') {
    groupContainer.placeholder = 'Heading 1';
    groupContainer.style.fontSize = '30px';
    event.target.parentNode.parentNode.parentNode.parentNode
      .removeChild(event.target.parentNode
        .parentNode.parentNode);
  } else if (event.target.className === 'text-area1') {
    groupContainer.placeholder = 'Heading 1';
    groupContainer.style.fontSize = '30px';
    event.target.parentNode.parentNode.parentNode.parentNode
      .removeChild(event.target.parentNode
        .parentNode.parentNode);
  } else if (event.target.className === 'header-text11'
  || event.target.className === 'header-text21') {
    groupContainer.placeholder = 'Heading 1';
    groupContainer.style.fontSize = '30px';
    event.target.parentNode.parentNode.parentNode.parentNode.parentNode
      .removeChild(event.target.parentNode.parentNode
        .parentNode.parentNode);
  } else {
    groupContainer.placeholder = 'Heading 1';
    groupContainer.style.fontSize = '30px';
    event.target.parentNode.parentNode.parentNode
      .removeChild(event.target.parentNode
        .parentNode);
  }
};

export const addHeadingTwo = (event) => {
  if (event.target.className === 'T-icons2') {
    groupContainer.placeholder = 'Expanded Heading';
    groupContainer.style.fontSize = '20px';
    event.target.parentNode.parentNode.parentNode.parentNode
      .removeChild(event.target.parentNode
        .parentNode.parentNode);
  } else if (event.target.className === 'text-area2') {
    groupContainer.placeholder = ' Expanded Heading';
    groupContainer.style.fontSize = '20px';
    event.target.parentNode.parentNode.parentNode.parentNode
      .removeChild(event.target.parentNode
        .parentNode.parentNode);
  } else if (event.target.className === 'header-text21'
  || event.target.className === 'header-text22') {
    groupContainer.placeholder = 'Expanded Heading';
    groupContainer.style.fontSize = '20px';
    event.target.parentNode.parentNode.parentNode.parentNode.parentNode
      .removeChild(event.target.parentNode.parentNode
        .parentNode.parentNode);
  } else {
    groupContainer.placeholder = 'Expanded Heading';
    groupContainer.style.fontSize = '20px';
    event.target.parentNode.parentNode.parentNode
      .removeChild(event.target.parentNode
        .parentNode);
  }
};

export const AppendHeadingOne = (event) => {
  const string = getElementValue('.text-field');
  if (string !== '') {
    const header1 = createElement('h1');
    header1.textContent = string;
    editorArea.appendChild(header1);
    groupContainer.value = '';
    groupContainer.placeholder = 'Type / for blocks, @ to link docs or people';
  } else {
    event.preventDefault();
    groupContainer.placeholder = 'Heading 1';
  }
};

export const AppendHeadingTwo = (event) => {
  const string = getElementValue('.text-field');
  if (string !== '') {
    const header1 = createElement('h3');
    header1.classList.add('headerThree');
    header1.textContent = string;
    editorArea.appendChild(header1);
    groupContainer.value = '';
    groupContainer.placeholder = 'Type / for blocks, @ to link docs or people';
  } else {
    event.preventDefault();
    groupContainer.placeholder = 'Expanded Heading';
  }
};
