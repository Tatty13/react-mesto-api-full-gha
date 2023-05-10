import SectionWithForm from "./SectionWithForm";
import useInput from "../hooks/useInput";
import useValidation from "../hooks/useValidation";

function Login({ onLogin, isLoading }) {
  const { values: loginData, handleInputChange } = useInput({
    email: "",
    password: "",
  });

  const { errorMessages, isFormValid, isInputsValid, handleValidityChange } =
    useValidation();

  const handleChange = e => {
    handleInputChange(e);
    handleValidityChange(e);
  };

  const handleSubmit = e => {
    e.preventDefault();
    onLogin(loginData);
  };

  return (
    <SectionWithForm
      title="Вход"
      name="login"
      onSubmit={handleSubmit}
      isFormValid={isFormValid}
      isLoading={isLoading}
      submitBtnText="Войти">
      <label>
        <input
          className={`form__input form__input_theme_dark ${
            isInputsValid.email === false && "form__input_invalid"
          }`}
          type="email"
          name="email"
          placeholder="Email"
          value={loginData.email}
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
          value={loginData.password}
          onChange={handleChange}
          required
        />
        <span className="form__input-error">{errorMessages.password}</span>
      </label>
    </SectionWithForm>
  );
}

export default Login;
