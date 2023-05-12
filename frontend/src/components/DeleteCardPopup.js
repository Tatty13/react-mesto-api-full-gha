import PopupWithForm from './PopupWithForm';

function DeleteCardPopup({
  isOpen,
  isLoading,
  onClose,
  onDeleteConfirm,
  card,
}) {
  function handleSubmit(evt) {
    evt.preventDefault();
    onDeleteConfirm(card.id);
  }

  return (
    <PopupWithForm
      isOpen={isOpen}
      isLoading={isLoading}
      isFormValid={true}
      onClose={onClose}
      onSubmit={handleSubmit}
      theme='light'
      title='Вы уверены?'
      name='confirmation'
      submitBtnText='Да'
      loadingText='Удаление...'
    />
  );
}

export default DeleteCardPopup;
