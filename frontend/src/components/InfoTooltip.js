import { useNavigate } from 'react-router-dom';
import Popup from './Popup';

function InfoTooltip({ isOpen, isSuccess, moreInfo, onClose }) {
  const navigate = useNavigate();

  const content = isSuccess ? 'success' : 'error';

  const title = isSuccess
    ? 'Вы успешно зарегистрировались!'
    : 'Что-то пошло не так! Попробуйте ещё раз.';

  function handleClose() {
    onClose();
    isSuccess && navigate('/sign-in', { replace: true });
  }

  return (
    <Popup
      name='notification'
      isOpen={isOpen}
      onClose={handleClose}
      containerClass={`popup__container popup__container_content_notification popup__container_content_${content}`}>
      <h2 className='popup__title popup__title_place_notification'>{title}</h2>
      <p className='popup__subtitle'>{moreInfo}</p>
    </Popup>
  );
}

export default InfoTooltip;
