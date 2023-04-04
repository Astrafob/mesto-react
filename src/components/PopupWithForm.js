
function PopupWithForm() {
  return (
    <>
      <div className="popup" id="popupEditAvatarProfile">
        <div className="popup__container">
          <form className="popup__edit-form" id="editAvatar" name="editAvatar" novalidate>
            <h2 className="popup__title">Обновить аватар</h2>
            <input className="popup__input-text" id="profilePhotoURL" name="link" type="url" placeholder="Ссылка на картинку"
              required />
            <span className="popup__input-error profilePhotoURL-error"></span>
            <button className="popup__save-button" aria-label="сохранение данных" type="submit">Сохранить</button>
          </form>
          <button className="popup__close-button" id="closeEditAvatar" aria-label="закрыть попап" type="button"></button>
        </div>
      </div>

      <div className="popup" id="popupDeleteCard">
        <div className="popup__container">
          <form className="popup__edit-form" id="deleteCard" name="deleteCard">
            <h2 className="popup__title">Вы уверены?</h2>
            <button className="popup__save-button" aria-label="сохранение данных" type="submit">Да</button>
          </form>
          <button className="popup__close-button" id="closeDeleteCard" aria-label="закрыть попап" type="button"></button>
        </div>
      </div>

      <div className="popup" id="popupEditProfile">
        <div className="popup__container">
          <form className="popup__edit-form" id="editProfile" name="editProfile" novalidate>
            <h2 className="popup__title">Редактировать профиль</h2>
            <input className="popup__input-text" id="name" name="name" type="text" maxlength="40" minlength="2"
              placeholder="Имя" required />
            <span className="popup__input-error name-error"></span>
            <input className="popup__input-text" id="about" name="about" type="text" maxlength="200" minlength="2"
              placeholder="Увлечение" required />
            <span className="popup__input-error about-error"></span>
            <button className="popup__save-button" aria-label="сохранение данных" type="submit">Сохранить</button>
          </form>
          <button className="popup__close-button" id="closeEditProfile" aria-label="закрыть попап" type="button"></button>
        </div>
      </div>

      <div className="popup" id="popupAddCard">
        <div className="popup__container">
          <form className="popup__edit-form" id="editForm" name="editForm" novalidate>
            <h2 className="popup__title">Новое место</h2>
            <input className="popup__input-text" id="placeName" name="name" type="text" maxlength="30" minlength="2"
              placeholder="Название" required />
            <span className="popup__input-error placeName-error"></span>
            <input className="popup__input-text" id="placePhotoURL" name="link" type="url" placeholder="Ссылка на картинку"
              required />
            <span className="popup__input-error placePhotoURL-error"></span>
            <button className="popup__save-button" aria-label="сохранение данных" type="submit">Сохранить</button>
          </form>
          <button className="popup__close-button" id="closeAddCard" aria-label="закрыть попап" type="button"></button>
        </div>
      </div>

    </>
  );
}

export default PopupWithForm;