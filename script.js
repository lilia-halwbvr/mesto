popup = document.querySelector('.popup');
popupClose = document.querySelector('.popup__close-button');
popupName = document.querySelector('.popup__input-name')
popupName.value = 'Жак-Ив Кусто'
popupJob = document.querySelector('.popup__input-job');
popupJob.value = 'Исследователь океана'
popupSubmit = document.querySelector('.popup__submit-button');

popupEdit = document.querySelector('.profile__edit-button');
popupTitle = document.querySelector('.profile__name');
popupSubtitle = document.querySelector('.profile__about');
likes = document.querySelectorAll('.element__like-button');

function openPopup() {
    popup.classList.remove('popup_invisible');
    popupTitle.textContent = popupName.value;
    popupSubtitle.textContent = popupJob.value;
};

popupEdit.addEventListener('click', openPopup); 

function closePopup() {
    popup.classList.add('popup_invisible');
};

let popupForm = document.querySelector('.popup__form');

function formSubmitHandler(evt) {
    evt.preventDefault();
    popupTitle.textContent = popupName.value;
    popupSubtitle.textContent = popupJob.value;
}

function onLike(data) {
    let isActive = data.target.classList.contains('element__like-button__active');

    if (isActive) {
        data.target.classList.remove('element__like-button__active');
        data.target.classList.add('element__like-button_inactive');
    } else {
        data.target.classList.remove('element__like-button_inactive');
        data.target.classList.add('element__like-button__active');
    }
}

likes.forEach(like => like.addEventListener('click', onLike));

popupForm.addEventListener('submit', formSubmitHandler); 
popupClose.addEventListener('click', closePopup);
popupEdit.addEventListener('click', openPopup);
popupSubmit.addEventListener('click', closePopup);



