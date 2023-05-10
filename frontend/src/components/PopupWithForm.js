import Popup from "./Popup";

function PopupWithForm({
  isOpen,
  isLoading,
  isFormValid,
  title,
  name,
  submitBtnText,
  loadingText,
  children,
  onClose,
  onSubmit,
}) {
  return (
    <Popup
      name={name}
      isOpen={isOpen}
      onClose={onClose}
      containerClass="popup__container">
      <h2 className="popup__title">{title}</h2>
      <form
        className={`form form_type_${name}`}
        action="#"
        name={name}
        id={name}
        onSubmit={onSubmit}
        noValidate>
        {children}
        <button
          className={`form__submit-btn ${
            !isFormValid && "form__submit-btn_disabled"
          }`}
          type="submit"
          name="submit-btn"
          disabled={!isFormValid}>
          {isLoading
            ? loadingText || "Сохранение..."
            : submitBtnText || "Сохранить"}
        </button>
      </form>
    </Popup>
  );
}

export default PopupWithForm;
