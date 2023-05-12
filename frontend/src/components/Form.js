function Form({
  name,
  onSubmit,
  children,
  isFormValid,
  isLoading,
  loadingText,
  submitBtnText,
  theme,
}) {
  return (
    <form
      className={`form form_type_${name}`}
      action='#'
      name={name}
      id={name}
      onSubmit={onSubmit}
      noValidate>
      {children}
      <button
        className={`form__submit-btn form__submit-btn_theme_${theme} ${
          !isFormValid && 'form__submit-btn_disabled'
        }`}
        type='submit'
        name='submit-btn'
        disabled={!isFormValid}>
        {isLoading
          ? loadingText || 'Сохранение...'
          : submitBtnText || 'Сохранить'}
      </button>
    </form>
  );
}

export default Form;
