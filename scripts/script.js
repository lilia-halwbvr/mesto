import {renderCards} from './popupAddCard.js';
import {popupAddCard} from './popupAddCard.js';
import {cards} from './popupAddCard.js';
import {removeCards} from './popupAddCard.js';



let popupEditProfile = document.querySelector('#popup-edit-profile');
let popupName = document.querySelector('#userName-input')
let popupJob = document.querySelector('#userAbout-input');
let popupEdit = document.querySelector('.profile__edit-button');
let popupTitle = document.querySelector('.profile__name');
let popupSubtitle = document.querySelector('.profile__about');
let popupFormEdit = document.querySelector('.popup__form-edit');
let closeButtons = document.querySelectorAll('.popup__close-button')



renderCards()
let trashes = document.querySelectorAll('.element__trash');

function removeCard(event) {
  delete cards[event.target.id];
  removeCards();
  renderCards();
  trashes = document.querySelectorAll('.element__trash');
  trashes.forEach(trash => trash.addEventListener('click', removeCard))
  
}


trashes.forEach(trash => trash.addEventListener('click', removeCard))

closeButtons.forEach(button => button.addEventListener('click', closePopup))


function openPopupEditProfile() {
  popupEditProfile.classList.add('popup_visible');
  popupName.value = popupTitle.textContent;
  popupJob.value = popupSubtitle.textContent;
};

popupEdit.addEventListener('click', openPopupEditProfile);

function closePopup() {
  popupEditProfile.classList.remove('popup_visible');
  popupAddCard.classList.remove('popup_visible');
};



function formSubmitHandler(evt) {
  evt.preventDefault();
  popupTitle.textContent = popupName.value;
  popupSubtitle.textContent = popupJob.value;

  closePopup()
}


// let likes = document.querySelectorAll('.element__like-button')
// function onLike(data) {
//     let isActive = data.target.classList.contains('element__like-button__active');
//     console.log(isActive)
//     if (isActive) {
//         data.target.classList.remove('element__like-button__active');
//         data.target.classList.add('element__like-button_inactive');
//     } else {
//         data.target.classList.remove('element__like-button_inactive');
//         data.target.classList.add('element__like-button__active');
//     }
// }

// likes.forEach(like => like.addEventListener('click', onLike));



popupFormEdit.addEventListener('submit', formSubmitHandler);
popupEdit.addEventListener('click', openPopupEditProfile);


export {closePopup}; 