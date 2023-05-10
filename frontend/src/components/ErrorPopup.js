import Popup from "./Popup";

function ErrorPopup({ error, isOpen, onClose }) {
  return (
    <Popup
      name="notification"
      isOpen={isOpen}
      onClose={onClose}
      containerClass="popup__container popup__container_content_notification">
      <h2 className="popup__title">Упс... Кажется, что-то пошло не так.</h2>
      <p className="popup__subtitle">{error}</p>
    </Popup>
  );
}

export default ErrorPopup;
