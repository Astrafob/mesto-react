import avatarProfile from '../image/profile-image.jpg';

function Main() {

  function handleEditAvatarClick() {
    const popup = document.querySelector('#popupEditAvatarProfile');
    popup.classList.add('popup_opened');
  }

  function handleEditProfileClick() {
    const popup = document.querySelector('#popupEditProfile');
    popup.classList.add('popup_opened');
  }

  function handleAddPlaceClick() {
    const popup = document.querySelector('#popupAddCard');
    popup.classList.add('popup_opened');
  }

  return (
    <main className="main">
      <section className="profile">
        <div className="profile__info">
          <button onClick={handleEditAvatarClick} className="profile__avatar-edit" type="button">
            <img src={avatarProfile} className="profile__photo" alt="фото профиля" />
          </button>
          <div className="profile__wrapper">
            <div className="profile__name">
              <h1 className="profile__title">Жак-Ив Кусто</h1>
              <button onClick={handleEditProfileClick} className="button button_edit_open" aria-label="редактор данных пользователя" type="button"></button>
            </div>
            <p className="profile__subtitle">Исследователь океана</p>
          </div>
        </div>
        <button onClick={handleAddPlaceClick} className="button button_add_open" aria-label="добавление новых картинок" type="button"></button>
      </section>
      <section className="cards">
      </section>
    </main>
  );
}

export default Main;