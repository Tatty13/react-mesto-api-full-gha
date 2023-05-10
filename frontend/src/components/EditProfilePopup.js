import { useEffect, useContext } from "react";
import useInput from "../hooks/useInput";
import useValidation from "../hooks/useValidation";
import PopupWithForm from "./PopupWithForm";
import CurrentUserContext from "../contexts/CurrentUserContext";

function EditProfilePopup({ isOpen, isLoading, onClose, onUpdateUser }) {
  const currentUser = useContext(CurrentUserContext);

  const [userData, setUserData, handleInputChange] = useInput({
    name: currentUser.name,
    about: currentUser.about,
  });

  const { errorMessages, isFormValid, handleValidityChange, resetValidation } =
    useValidation(1);

  const handleChange = e => {
    handleInputChange(e);
    handleValidityChange(e);
  };

  useEffect(() => {
    if (isOpen) {
      setUserData({ name: currentUser.name, about: currentUser.about });
      resetValidation();
    }
  }, [currentUser, isOpen, setUserData, resetValidation]);

  function handleSubmit(evt) {
    evt.preventDefault();
    onUpdateUser(userData);
  }

  return (
    <PopupWithForm
      isOpen={isOpen}
      isLoading={isLoading}
      isFormValid={isFormValid}
      onClose={onClose}
      onSubmit={handleSubmit}
      title="Редактировать профиль"
      name="edit-profile">
      <label>
        <input
          className="form__input"
          type="text"
          name="name"
          placeholder="Введите имя"
          minLength="2"
          maxLength="40"
          value={userData.name}
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
          type="text"
          name="about"
          minLength="2"
          maxLength="200"
          placeholder="Введите род деятельности"
          value={userData.about}
          onChange={handleChange}
          required
        />
        <span
          className={`form__input-error name-input-error ${
            errorMessages.about ? "form__input-error_active" : ""
          }`}>
          {errorMessages.about}
        </span>
      </label>
    </PopupWithForm>
  );
}

export default EditProfilePopup;
