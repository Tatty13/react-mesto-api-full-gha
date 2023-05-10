function BurgerBtn({ onClick, isOpen }) {
  return (
    <button
      className={`burger-btn ${isOpen && "burger-btn_open"}`}
      aria-label="Бургер-меню"
      type="button"
      onClick={onClick}>
      <span className="burger-btn__line" />
    </button>
  );
}

export default BurgerBtn;
