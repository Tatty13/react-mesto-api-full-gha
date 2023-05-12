const apiOptions = {
  baseURL: `https://api.mesto.russia.nomoredomains.monster`,
  headers: {
    'Content-Type': 'application/json; charset=UTF-8',
  },
  errorMessages: {
    getUserData: 'Не удалось загрузить данные пользователя',
    setUserData: 'Не удалось обновить данные пользователя',
    getInitialCards: 'Не удалось загрузить карточки',
    addCard: 'Не удалось создать карточку',
    deleteCard: 'Не удалось удалить карточку',
    toogleCardLike: 'Невозможно выполнить действие',
    updateAvatar: 'Не удалось обновить аватар',
  },
};

const authApiOptions = {
  baseURL: 'https://api.mesto.russia.nomoredomains.monster',
  errorMessages: {
    authUser: 'Не удалось зарегистрировать пользователя',
    login: 'Не удалось авторизовать пользователя',
    validateToken: 'Данные не прошли проверку',
  },
};

export { apiOptions, authApiOptions };
