let popup = document.querySelector('.popup');
let popupClose = document.querySelector('.popup__close-button');
let popupName = document.querySelector('#userName-input')

popupName.value = document.querySelector('.profile__name').textContent 
let popupJob = document.querySelector('#userAbout-input');
popupJob.value = document.querySelector('.profile__about').textContent;
// let popupSubmit = document.querySelector('.popup__submit-button');

let popupEdit = document.querySelector('.profile__edit-button');
let popupTitle = document.querySelector('.profile__name');
let popupSubtitle = document.querySelector('.profile__about');
let popupForm = document.querySelector('.popup__form');
// likes = document.querySelectorAll('.element__like-button');

function openPopup() {
   // popup.classList.remove('popup_invisible');
   document.querySelector('.popup').style.display="flex";
    popupTitle.textContent = popupName.value;
    popupSubtitle.textContent = popupJob.value;
};

popupEdit.addEventListener('click', openPopup); 

function closePopup() {
    document.querySelector('.popup').style.display="none";
};



function formSubmitHandler(evt) {
    evt.preventDefault();
    popupTitle.textContent = popupName.value;
    popupSubtitle.textContent = popupJob.value;

    closePopup()
}

// function onLike(data) {
//     let isActive = data.target.classList.contains('element__like-button__active');

//     if (isActive) {
//         data.target.classList.remove('element__like-button__active');
//         data.target.classList.add('element__like-button_inactive');
//     } else {
//         data.target.classList.remove('element__like-button_inactive');
//         data.target.classList.add('element__like-button__active');
//     }
// }

// likes.forEach(like => like.addEventListener('click', onLike));

popupForm.addEventListener('submit', formSubmitHandler); 
popupClose.addEventListener('click', closePopup);
popupEdit.addEventListener('click', openPopup);




