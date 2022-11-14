import {closePopup} from './script.js';

let popupAddCard = document.querySelector('#popup-add-card')
let popupAdd = document.querySelector('.profile__add-button')

let cards = [
    {
      link: 'https://cdn.pixabay.com/photo/2017/02/05/17/40/saint-peters-basilica-2040718_1280.jpg',
      text: 'Rome'
    },
  
    {
      link: 'https://cdn.pixabay.com/photo/2018/07/18/20/25/channel-3547224_1280.jpg',
      text: 'Venice'
    },
  
    {
      link: 'https://cdn.pixabay.com/photo/2019/06/06/13/36/italy-4256018_1280.jpg',
      text: 'Florence'
    },
  
    {
      link: 'https://cdn.pixabay.com/photo/2018/06/26/22/19/italy-3500409_1280.jpg',
      text: 'Lake Como'
    },
  
    {
      link: 'https://cdn.pixabay.com/photo/2021/09/21/19/39/mountains-6644768_1280.jpg',
      text: 'Positano'
    },
  
    {
      link: 'https://cdn.pixabay.com/photo/2017/12/13/13/46/malcesine-3016795_1280.jpg',                                          
      text: 'Lake Garda'
    }
  
  ]

  function renderCards() {
    cards.forEach(function(card, id){
      let div = document.createElement('div');
      div.className = "element";
      div.innerHTML = `<img class="element__image" alt="место" src=${card.link}> 
                      <button class="element__trash" type = "button" id=${id}></button>
                      <div class="element__content"> <h2 class="element__content-title">${card.text}</h2> 
                      <button type="button" class="element__like-button"></button> 
                      </div>`;
      document.querySelector('.elements').append(div)
    
    })
  }
  

  function submitAddPopup(event) {
    event.preventDefault()
    let popupAddLink = document.querySelector('#link-input')
    let popupAddText = document.querySelector('#placeAbout-input')
  
    let newCard = {
      link: popupAddLink.value,
      text: popupAddText.value
    }
  
    cards.push(newCard)
    closePopup()
    removeCards()
    renderCards()
  
    popupAddLink.value = ""
    popupAddText.value = ""
  }
  
  let popupFormAdd = document.querySelector('.popup__form-add')
  popupFormAdd.addEventListener('submit', submitAddPopup)


  
function removeCards() {
 
    let cards = document.querySelectorAll('.element')

   for(let card of cards){
     card.remove()
   }
}

function openPopupAddCard() {
    popupAddCard.classList.add('popup_visible');
}

popupAdd.addEventListener('click', openPopupAddCard);









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

  export {renderCards}; 
  export {popupAddCard};
  export{cards}
  export{removeCards};


