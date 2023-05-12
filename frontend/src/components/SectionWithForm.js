import { Link } from 'react-router-dom';
import Form from './Form';

function SectionWithForm({
  title,
  name,
  onSubmit,
  isFormValid,
  isLoading,
  loadingText,
  submitBtnText,
  theme,
  children,
}) {
  return (
    <section className='section'>
      <h2 className='section__title'>{title}</h2>
      <Form
        name={name}
        onSubmit={onSubmit}
        isFormValid={isFormValid}
        isLoading={isLoading}
        loadingText={loadingText || 'Загрузка...'}
        submitBtnText={submitBtnText}
        theme={theme || 'dark'}>
        {children}
      </Form>
      {name === 'singup' && (
        <p className='section__text'>
          Уже зарегистрированы?{' '}
          <Link
            to='/sign-in'
            className='section__link'>
            Войти
          </Link>
        </p>
      )}
    </section>
  );
}

export default SectionWithForm;
