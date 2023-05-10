import Popup from "./Popup";

function ImagePopup({ isOpen, card, onClose }) {
  return (
    <Popup
      name="photo"
      isOpen={isOpen}
      onClose={onClose}
      containerClass="popup__img-container">
      <img className="popup__img" src={card.link} alt={card.name} />
      <span className="popup__img-heading">{card.name}</span>
    </Popup>
  );
}

export default ImagePopup;
