import Popup from "./Popup";
import Form from "./Form";

function PopupWithForm({
  isOpen,
  isLoading,
  isFormValid,
  title,
  name,
  submitBtnText,
  loadingText,
  children,
  onClose,
  onSubmit,
  theme,
}) {
  return (
    <Popup
      name={name}
      isOpen={isOpen}
      onClose={onClose}
      containerClass="popup__container">
      <h2 className="popup__title">{title}</h2>
      <Form
        name={name}
        onSubmit={onSubmit}
        isFormValid={isFormValid}
        isLoading={isLoading}
        loadingText={loadingText}
        submitBtnText={submitBtnText}
        theme={theme}>
        {children}
      </Form>
    </Popup>
  );
}

export default PopupWithForm;
