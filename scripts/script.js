import {
  cards
} from './cards.js';

let popupEditProfile = document.querySelector('#popup-edit-profile');
let popupName = document.querySelector('#userName-input');
let popupJob = document.querySelector('#userAbout-input');
let popupEditButton = document.querySelector('.profile__edit-button');
let popupNameForm = document.querySelector('.profile__name');
let popupJobForm = document.querySelector('.profile__about');
let closeButtons = document.querySelectorAll('.popup__close-button');
let popupAddCard = document.querySelector('#popup-add-card');
let popupAdd = document.querySelector('.profile__add-button');
let popupImage = document.querySelector('#popup-image');
let submitAddButton = document.querySelector('#submit-add-button');
let submitEditButton = document.querySelector('#submit-edit-button');
let popupImageCloseButton = document.querySelector('.popup-image__button-close')


//функция открытия попапа редактирования
function openEditPopup() {
  popupEditProfile.classList.add('popup_visible');
  popupName.value = popupNameForm.textContent;
  popupJob.value = popupJobForm.textContent;
}

// функция закрытия попапа
function closePopup() {
  popupEditProfile.classList.remove('popup_visible');
  popupAddCard.classList.remove('popup_visible');
  popupImage.classList.remove('popup_visible');
}

let popups = document.querySelectorAll('.popup')
let closeByEscape = (evt) => {
  if(evt.key === 'Escape') {
    popups.forEach()
    // if(popup.classList.contains('popup_visible')) {
    //  closePopup()
   // } ????? 
  }
}

popups.forEach(popup => popup.addEventListener('Escape', closeByEscape))



function editProfileHandler(evt) {
  evt.preventDefault();
  popupNameForm.textContent = popupName.value;
  popupJobForm.textContent = popupJob.value;

  closePopup()
}

function addProfileHandler(evt) {
  evt.preventDefault();
  closePopup()
}


// функция открытия попапа для добавления карточки
function openAddPopup() {
  popupAddCard.classList.add('popup_visible');
}

function addCard(title, link) {
  let titleNode = document.createElement('h2');
  titleNode.className = 'element__content-title';
  titleNode.textContent = title;

  let like = document.createElement('button');
  like.className = 'element__like-button';

  like.addEventListener('click', onLike)

  let image = document.createElement('img')
  image.className = 'element__image';
  image.src = link;
  image.alt = 'место';
  image.addEventListener('click', (event) => popupImageCard(event, link, title)) 

  let content = document.createElement('div');
  content.className = 'element__content';
  content.appendChild(titleNode)
  content.appendChild(like)

  let trashButtonElement = document.createElement('button');
  trashButtonElement.className = 'element__trash'
  trashButtonElement.type = 'button'
  trashButtonElement.addEventListener('click', deleteCard)

  let newElement = document.createElement('div');
  newElement.className = 'element';
  newElement.appendChild(image)
  newElement.appendChild(trashButtonElement)
  newElement.appendChild(content)
  document.querySelector('.elements').append(newElement)
}

// open popup card full view 

function popupImageCard(event, link, title) {
  popupImage.childNodes[1].childNodes[3].src = link
  popupImage.childNodes[1].childNodes[5].textContent = title
  popupImage.classList.add('popup_visible')
}

// close popup card full view

function closePopupImageCard() {
  popupImage.classList.remove('popup_visible')
}


popupImageCloseButton.addEventListener('click', closePopupImageCard)


function renderCards() {
  cards.forEach(function (card) {
    addCard(card.text, card.link)
  })
}

function newCard() {
  let popupAddLink = document.querySelector('#link-input');
  let popupAddText = document.querySelector('#placeAbout-input');

  closePopup()
  addCard(popupAddText.value, popupAddLink.value)
}


//ставим лайки
function onLike(data) {
  let islikeActive = data.target.classList.contains('element__like-button_active');

  if (islikeActive) {
    data.target.classList.remove('element__like-button_active');
    data.target.classList.add('element__like-button');
  } else {
    data.target.classList.remove('element__like-button');
    data.target.classList.add('element__like-button_active');
  }
}

function deleteCard(data) {
  data.target.parentNode.remove();
}


popupAdd.addEventListener('click', openAddPopup);
popupEditButton.addEventListener('click', openEditPopup);
closeButtons.forEach(button => button.addEventListener('click', closePopup))

renderCards()


submitAddButton.addEventListener('click', newCard);
submitAddButton.addEventListener('click', addProfileHandler)
submitEditButton.addEventListener('click', editProfileHandler);
