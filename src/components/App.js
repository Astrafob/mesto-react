import { useState } from 'react';
import Header from "./Header.js";
import Main from "./Main.js";
import Footer from "./Footer.js";
import PopupWithForm from './PopupWithForm.js';
import ImagePopup from './ImagePopup.js';

function App() {
  const [isEditProfilePopupOpen, setIsEditProfilePopupOpen] = useState(false);
  const [isAddPlacePopupOpen, setIsAddPlacePopupOpen] = useState(false);
  const [isEditAvatarPopupOpen, setIsEditAvatarPopupOpen] = useState(false);
  const [selectedCard, setSelectedCard] = useState({});

  function closeAllPopups() {
    setIsEditProfilePopupOpen(false);
    setIsAddPlacePopupOpen(false);
    setIsEditAvatarPopupOpen(false);
    setSelectedCard({});
  }

  return (
    <div className="page__container">
      <Header />
      <Main
        onEditProfile={setIsEditProfilePopupOpen}
        onAddPlace={setIsAddPlacePopupOpen}
        onEditAvatar={setIsEditAvatarPopupOpen}
        onCardClick={setSelectedCard}
      />
      <Footer />

      <ImagePopup
        card={selectedCard}
        onClose={closeAllPopups} 
      />

      <PopupWithForm
        name="avatar"
        title="Обновить аватар"
        buttonText="Сохранить"
        isOpen={isEditAvatarPopupOpen}
        onClose={closeAllPopups}
      >
        <input className="popup__input-text" id="profilePhotoURL" name="link" type="url" placeholder="Ссылка на картинку"
          required />
        <span className="popup__input-error profilePhotoURL-error"></span>
      </PopupWithForm>

      <PopupWithForm
        name="confirm"
        title="Вы уверены?"
        buttonText="Да"
      />

      <PopupWithForm
        name="profile"
        title="Редактировать профиль"
        buttonText="Сохранить"
        isOpen={isEditProfilePopupOpen}
        onClose={closeAllPopups}
      >
        <input className="popup__input-text" id="name" name="name" type="text" maxLength="40" minLength="2"
          placeholder="Имя" required />
        <span className="popup__input-error name-error"></span>
        <input className="popup__input-text" id="about" name="about" type="text" maxLength="200" minLength="2"
          placeholder="Увлечение" required />
        <span className="popup__input-error about-error"></span>
      </PopupWithForm>

      <PopupWithForm
        name="newPlace"
        title="Новое место"
        buttonText="Сохранить"
        isOpen={isAddPlacePopupOpen}
        onClose={closeAllPopups}
      >
        <input className="popup__input-text" id="placeName" name="name" type="text" maxLength="30" minLength="2"
          placeholder="Название" required />
        <span className="popup__input-error placeName-error"></span>
        <input className="popup__input-text" id="placePhotoURL" name="link" type="url" placeholder="Ссылка на картинку"
          required />
        <span className="popup__input-error placePhotoURL-error"></span>
      </PopupWithForm>

    </div>
  );
}

export default App;
