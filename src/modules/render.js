import { createElement, getElement } from './tools.js';

const groupContainer = getElement('.text-div');

const createSlotStructure = (event) => {
  const popUpContainer = createElement('div');

  const title = createElement('div');
  popUpContainer.classList.add('popupcontainer');
  title.classList.add('title-header');
  const addBlocks = createElement('h2');
  addBlocks.classList.add('addBlocks');
  addBlocks.textContent = 'Add blocks';
  const clue = createElement('h3');
  clue.classList.add('clue');
  clue.textContent = 'Keep typing to filter, or escape to exit';
  const filterHeader = createElement('h3');
  filterHeader.textContent = 'Filtering Keyword';
  filterHeader.classList.add('headerfilter');
  title.appendChild(addBlocks);
  title.appendChild(clue);
  title.appendChild(filterHeader);

  const headerContaineer = createElement('div');
  headerContaineer.classList.add('header-container');
  const header1 = createElement('div');
  header1.classList.add('header1');
  const textIcon = createElement('img');
  textIcon.src = '/src/utilities/icons8-type-16.png';
  textIcon.classList.add('T-icons1');
  const headerTextArea1 = createElement('div');
  headerTextArea1.classList.add('text-area1');
  const header1text1 = createElement('h3');
  header1text1.classList.add('header-text11');
  header1text1.textContent = 'Heading 1';
  const header1text2 = createElement('h3');
  header1text2.classList.add('header-text21');
  header1text2.textContent = 'Shortcut type # + space';
  header1.appendChild(textIcon);
  headerTextArea1.appendChild(header1text1);
  headerTextArea1.appendChild(header1text2);
  header1.appendChild(headerTextArea1);

  const header2 = createElement('div');
  header2.classList.add('header2');
  const textIcon2 = createElement('img');
  textIcon2.classList.add('T-icons2');
  textIcon2.src = '/public/icons8-type-16.png';
  const headerTextArea2 = createElement('div');
  headerTextArea2.classList.add('text-area2');
  const header2text1 = createElement('h3');
  header2text1.classList.add('header-text21');
  header2text1.textContent = 'Expandable Heading 1';
  const header2text2 = createElement('h3');
  header2text2.classList.add('header-text22');
  header2text2.textContent = 'Shortcut type # + space';

  header2.appendChild(textIcon2);
  headerTextArea2.appendChild(header2text1);
  headerTextArea2.appendChild(header2text2);
  header2.appendChild(headerTextArea2);

  headerContaineer.appendChild(header1);
  headerContaineer.appendChild(header2);

  popUpContainer.appendChild(title);
  popUpContainer.appendChild(headerContaineer);

  groupContainer.insertAdjacentElement('beforeend', popUpContainer);
  const targetArea = event.currentTarget;
  targetArea.textContent = '/1';
};

// eslint-disable-next-line import/prefer-default-export
export const renderTaskDom = (event) => {
  createSlotStructure(event);
};
