function Card(card) {

  function handleCardClick() {
    console.log(card);
    card.onCardClick(card);
  }

  return (
    <article className="card">
      <button className="card__delete" aria-label="удаление карточки" type="button"></button>
      <img src={card.link} className="card__image" alt={card.name} onClick={handleCardClick} />
      <div className="card__name">
        <h2 className="card__title">{card.name}</h2>
        <div className="card__like-container">
          <button className="card__button-like" aria-label="лайк" type="button"></button>
          <p className="card__like-counter">{card.counter}</p>
        </div>
      </div>
    </article>
  );
}

export default Card;