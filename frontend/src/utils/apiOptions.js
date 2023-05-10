const apiOptions = {
  baseURL: `https://mesto.nomoreparties.co/v1/cohort-59`,
  headers: {
    authorization: "ed75e1f6-f274-4143-80f6-0a17df0f2155",
    "Content-Type": "application/json; charset=UTF-8",
  },
  errorMessages: {
    getUserData: "Не удалось загрузить данные пользователя",
    setUserData: "Не удалось обновить данные пользователя",
    getInitialCards: "Не удалось загрузить карточки",
    addCard: "Не удалось создать карточку",
    deleteCard: "Не удалось удалить карточку",
    toogleCardLike: "Невозможно выполнить действие",
    updateAvatar: "Не удалось обновить аватар",
  },
};

const authApiOptions = {
  baseURL: "https://auth.nomoreparties.co",
  errorMessages: {
    authUser: "Не удалось зарегистрировать пользователя",
    login: "Не удалось авторизовать пользователя",
    validateToken: "Данные не прошли проверку",
  },
};

export { apiOptions, authApiOptions };
