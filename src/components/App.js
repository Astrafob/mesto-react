import { useEffect, useState } from 'react';
import Header from "./Header.js";
import Main from "./Main.js";
import Footer from "./Footer.js";
import PopupWithForm from './PopupWithForm.js';
import ImagePopup from './ImagePopup.js';
import api from '../utils/api.js';
import { CurrentUserContext } from '../contexts/CurrentUserContext.js';
import EditProfilePopup from './EditProfilePopup.js';

function App() {
  const [isEditProfilePopupOpen, setIsEditProfilePopupOpen] = useState(false);
  const [isAddPlacePopupOpen, setIsAddPlacePopupOpen] = useState(false);
  const [isEditAvatarPopupOpen, setIsEditAvatarPopupOpen] = useState(false);
  const [selectedCard, setSelectedCard] = useState({});
  const [currentUser, setCurrentUser] = useState('');
  const [cards, setCards] = useState([]);

  useEffect(() => {
    Promise.all([api.getPersonInfo(), api.getCards()])
      .then(([dataUser, card]) => {
        setCurrentUser(dataUser);
        setCards(card);
      })
      .catch((error) => {
        console.log(error);
      })
  }, []);

  function closeAllPopups() {
    setIsEditProfilePopupOpen(false);
    setIsAddPlacePopupOpen(false);
    setIsEditAvatarPopupOpen(false);
    setSelectedCard({});
  }

  function handleUpdateUser(userInfo) {
    api.setUserInfo(userInfo)
      .then(data => {
        setCurrentUser(data);
        closeAllPopups();
      })
      .catch((error) => {
        console.log(error)
      });
  }

  function handleCardLike(card) {
    const isLiked = card.likes.some(i => i._id === currentUser._id);

    api.changeLikeCardStatus(card._id, isLiked)
      .then((newCard) => {
        setCards((state) =>
          state.map((item) =>
            item._id === card._id ? newCard : item))
      })
      .catch((error) => {
        console.log(error);
      })
  }

  function handleCardDelete(card) {
    api.deleteCard(card._id)
      .then(() => setCards(
        state => state.filter(
          item => item._id !== card._id
        )
      ))
      .catch((error) => {
        console.log(error);
      })
  }

  return (
    <CurrentUserContext.Provider value={currentUser}>
      <div className="page__container">
        <Header />
        <Main
          onEditProfile={setIsEditProfilePopupOpen}
          onAddPlace={setIsAddPlacePopupOpen}
          onEditAvatar={setIsEditAvatarPopupOpen}
          onCardClick={setSelectedCard}
          onCardLike={handleCardLike}
          onCardDelete={handleCardDelete}
          cards={cards}
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

        <EditProfilePopup
          isOpen={isEditProfilePopupOpen}
          onClose={closeAllPopups}
          onUpdateUser={handleUpdateUser}
        />

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
    </CurrentUserContext.Provider>
  );
}

export default App;
