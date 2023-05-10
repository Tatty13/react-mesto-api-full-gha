import SectionWithForm from "./SectionWithForm";
import useInput from "../hooks/useInput";
import useValidation from "../hooks/useValidation";

function Register({ onSignup, isLoading }) {
  const { values: singupData, handleInputChange } = useInput({
    email: "",
    password: "",
  });

  const { errorMessages, isFormValid, isInputsValid, handleValidityChange } = useValidation();

  const handleChange = e => {
    handleInputChange(e);
    handleValidityChange(e);
  };

  const handleSubmit = e => {
    e.preventDefault();
    onSignup(singupData);
  };

  return (
    <SectionWithForm
      title="Регистрация"
      name="singup"
      onSubmit={handleSubmit}
      isFormValid={isFormValid}
      isLoading={isLoading}
      submitBtnText="Зарегистрироваться">
      <label>
        <input
          className={`form__input form__input_theme_dark ${
            isInputsValid.email === false && "form__input_invalid"
          }`}
          type="email"
          name="email"
          placeholder="Email"
          value={singupData.email}
          onChange={handleChange}
          required
        />
        <span className="form__input-error">{errorMessages.email}</span>
      </label>
      <label>
        <input
          className={`form__input form__input_theme_dark ${
            isInputsValid.password === false && "form__input_invalid"
          }`}
          type="password"
          name="password"
          placeholder="Пароль"
          minLength="6"
          value={singupData.password}
          onChange={handleChange}
          required
        />
        <span className="form__input-error">{errorMessages.password}</span>
      </label>
    </SectionWithForm>
  );
}

export default Register;
