import { useEffect } from 'react';
import useInput from '../hooks/useInput';
import useValidation from '../hooks/useValidation';
import PopupWithForm from './PopupWithForm';

function AddPlacePopup({ isOpen, isLoading, onClose, onAddPlace }) {
  const {
    values: cardData,
    setValues: setCardData,
    handleInputChange,
  } = useInput({
    name: '',
    link: '',
  });

  const {
    errorMessages,
    isFormValid,
    isInputsValid,
    handleValidityChange,
    resetValidation,
  } = useValidation();

  useEffect(() => {
    if (isOpen) {
      setCardData({ name: '', link: '' });
      resetValidation();
    }
  }, [isOpen, setCardData, resetValidation]);

  function handleSubmit(evt) {
    evt.preventDefault();
    onAddPlace(cardData);
  }

  const handleChange = (e) => {
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
      title='Новое место'
      name='add-card'
      submitBtnText='Создать'
      theme='light'>
      <label>
        <input
          className={`form__input form__input_theme_light ${
            isInputsValid.name === false && 'form__input_invalid'
          }`}
          type='text'
          name='name'
          placeholder='Название'
          minLength='2'
          maxLength='30'
          value={cardData.name}
          onChange={handleChange}
          required
        />
        <span className='form__input-error'>{errorMessages.name}</span>
      </label>
      <label>
        <input
          className={`form__input form__input_theme_light ${
            isInputsValid.link === false && 'form__input_invalid'
          }`}
          type='url'
          name='link'
          placeholder='Ссылка на картинку'
          value={cardData.link}
          onChange={handleChange}
          required
        />
        <span className='form__input-error'>{errorMessages.link}</span>
      </label>
    </PopupWithForm>
  );
}

export default AddPlacePopup;
