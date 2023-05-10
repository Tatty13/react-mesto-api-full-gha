import { useRef, useEffect } from "react";
import useValidation from "../hooks/useValidation";
import PopupWithForm from "./PopupWithForm";

function EditAvatarPopup({ isOpen, isLoading, onClose, onUpdateAvatar }) {
  const avatarRef = useRef();

  const { errorMessages, isFormValid, handleValidityChange, resetValidation } =
    useValidation(1);

  useEffect(() => {
    if (isOpen) {
      avatarRef.current.value = "";
      resetValidation();
    }
  }, [isOpen, resetValidation]);

  function onSubmit(evt) {
    evt.preventDefault();
    onUpdateAvatar({ avatar: avatarRef.current.value });
  }

  return (
    <PopupWithForm
      isOpen={isOpen}
      isLoading={isLoading}
      isFormValid={isFormValid}
      onClose={onClose}
      onSubmit={onSubmit}
      title="Обновить аватар"
      name="edit-avatar">
      <label>
        <input
          ref={avatarRef}
          className="form__input"
          type="url"
          name="avatar"
          placeholder="Ссылка на картинку"
          onChange={handleValidityChange}
          required
        />
        <span
          className={`form__input-error name-input-error ${
            errorMessages.avatar ? "form__input-error_active" : ""
          }`}>
          {errorMessages.avatar}
        </span>
      </label>
    </PopupWithForm>
  );
}

export default EditAvatarPopup;
