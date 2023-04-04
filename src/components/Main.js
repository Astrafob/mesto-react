import React from 'react';
// import avatarProfile from '../image/profile-image.jpg';
import api from '../utils/api.js';
import Card from './Card.js';

function Main({ onEditAvatar, onEditProfile, onAddPlace, onCardClick }) {
  const [userName, setUserName] = React.useState('');
  const [userDescription, setUserDescription] = React.useState('');
  const [userAvatar, setUserAvatar] = React.useState('');
  const [cards, setCards] = React.useState([]);

  React.useEffect(() => {
    Promise.all([api.getPersonInfo(), api.getCards()])
      .then(([dataUser, card]) => {
        setUserName(dataUser.name);
        setUserDescription(dataUser.about);
        setUserAvatar(dataUser.avatar);
        setCards(card);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  return (
    <main className="main">
      <section className="profile">
        <div className="profile__info">
          <button onClick={() => onEditAvatar(true)} className="profile__avatar-edit" type="button">
            <img src={userAvatar} className="profile__photo" alt="фото профиля" />
          </button>
          <div className="profile__wrapper">
            <div className="profile__name">
              <h1 className="profile__title">{userName}</h1>
              <button onClick={() => onEditProfile(true)} className="button button_edit_open" aria-label="редактор данных пользователя" type="button"></button>
            </div>
            <p className="profile__subtitle">{userDescription}</p>
          </div>
        </div>
        <button onClick={() => onAddPlace(true)} className="button button_add_open" aria-label="добавление новых картинок" type="button"></button>
      </section>
      <section className="cards">
        {cards.map(card => (
          <Card
            key={card._id}
            id={card._id}
            name={card.name}
            link={card.link}
            counter={card.likes.length}
            onCardClick={onCardClick}
          />
        ))}
      </section>
    </main>
  );
}

export default Main;