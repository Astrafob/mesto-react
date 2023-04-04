function ImagePopup() {
  return (
    <>
      <div className="popup popup_overlay_dark" id="popupViewPhoto">
        <div className="popup__box-image">
          <figure className="popup__figure">
            <img className="popup__image" src="#" alt="#" />
            <figcaption className="popup__caption-image"></figcaption>
          </figure>
          <button className="popup__close-button" id="closePopupViewPhoto" aria-label="закрыть попап" type="button"></button>
        </div>
      </div>
    </>
  );
}

export default ImagePopup;