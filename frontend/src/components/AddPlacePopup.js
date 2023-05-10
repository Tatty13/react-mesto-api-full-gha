import { useEffect } from "react";
import useInput from "../hooks/useInput";
import useValidation from "../hooks/useValidation";
import PopupWithForm from "./PopupWithForm";

function AddPlacePopup({ isOpen, isLoading, onClose, onAddPlace }) {
  const [cardData, setCardData, handleInputChange] = useInput({
    name: "",
    link: "",
  });

  const { errorMessages, isFormValid, handleValidityChange, resetValidation } =
    useValidation(2);

  useEffect(() => {
    if (isOpen) {
      setCardData({ name: "", link: "" });
      resetValidation();
    }
  }, [isOpen, setCardData, resetValidation]);

  function handleSubmit(evt) {
    evt.preventDefault();
    onAddPlace(cardData);
  }

  const handleChange = e => {
    handleInputChange(e);
    handleValidityChange(e);
  };

  return (
    <PopupWithForm
      isOpen={isOpen}
      isLoading={isLoading}
      isFormValid={isFormValid}
      onClose={onClose}
      onSubmit={handleSubmit}
      title="Новое место"
      name="add-card"
      submitBtnText="Создать">
      <label>
        <input
          className="form__input"
          type="text"
          name="name"
          placeholder="Название"
          minLength="2"
          maxLength="30"
          value={cardData.name}
          onChange={handleChange}
          required
        />
        <span
          className={`form__input-error name-input-error ${
            errorMessages.name ? "form__input-error_active" : ""
          }`}>
          {errorMessages.name}
        </span>
      </label>
      <label>
        <input
          className="form__input"
          type="url"
          name="link"
          placeholder="Ссылка на картинку"
          value={cardData.link}
          onChange={handleChange}
          required
        />
        <span
          className={`form__input-error name-input-error ${
            errorMessages.link ? "form__input-error_active" : ""
          }`}>
          {errorMessages.link}
        </span>
      </label>
    </PopupWithForm>
  );
}

export default AddPlacePopup;
