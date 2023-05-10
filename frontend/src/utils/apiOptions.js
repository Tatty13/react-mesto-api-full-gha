const apiOptions = {
  baseURL: `https://mesto.nomoreparties.co/v1/cohort-59`,
  headers: {
    authorization: "ed75e1f6-f274-4143-80f6-0a17df0f2155",
    "Content-Type": "application/json; charset=UTF-8",
  },
  errorMessages: {
    getUserData: "Не удалось загрузить данные пользователя. Ошибка:",
    setUserData: "Не удалось обновить данные пользователя. Ошибка:",
    getInitialCards: "Не удалось загрузить карточки. Ошибка:",
    addCard: "Не удалось создать карточку. Ошибка:",
    deleteCard: "Не удалось удалить карточку. Ошибка:",
    toogleCardLike: "Невозможно выполнить действие. Ошибка:",
    updateAvatar: "Не удалось обновить аватар. Ошибка:",
  },
};

export default apiOptions;
