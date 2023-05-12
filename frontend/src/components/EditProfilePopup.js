import { useEffect, useContext } from 'react';
import useInput from '../hooks/useInput';
import useValidation from '../hooks/useValidation';
import PopupWithForm from './PopupWithForm';
import CurrentUserContext from '../contexts/CurrentUserContext';

function EditProfilePopup({ isOpen, isLoading, onClose, onUpdateUser }) {
  const currentUser = useContext(CurrentUserContext);

  const {
    values: userData,
    setValues: setUserData,
    handleInputChange,
  } = useInput({
    name: currentUser.name,
    about: currentUser.about,
  });

  const {
    errorMessages,
    isFormValid,
    isInputsValid,
    handleValidityChange,
    resetValidation,
  } = useValidation();

  const handleChange = (e) => {
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
      title='Редактировать профиль'
      name='edit-profile'
      theme='light'>
      <label>
        <input
          className={`form__input form__input_theme_light ${
            isInputsValid.name === false && 'form__input_invalid'
          }`}
          type='text'
          name='name'
          placeholder='Введите имя'
          minLength='2'
          maxLength='40'
          value={userData.name}
          onChange={handleChange}
          required
        />
        <span className='form__input-error'>{errorMessages.name}</span>
      </label>
      <label>
        <input
          className={`form__input form__input_theme_light ${
            isInputsValid.about === false && 'form__input_invalid'
          }`}
          type='text'
          name='about'
          minLength='2'
          maxLength='200'
          placeholder='Введите род деятельности'
          value={userData.about}
          onChange={handleChange}
          required
        />
        <span className='form__input-error'>{errorMessages.about}</span>
      </label>
    </PopupWithForm>
  );
}

export default EditProfilePopup;
