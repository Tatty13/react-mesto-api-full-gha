import { apiOptions, authApiOptions } from './apiOptions';

class Api {
  /**
   * @param {object} options
   * @param {string} options.token
   * @param {string} options.cohort
   */
  constructor({ baseURL, errorMessages, headers }) {
    this._baseURL = baseURL;
    this._headers = headers;
    this._errorMessages = errorMessages;
  }

  /**
   * @param {Response} res
   * @param {string} errorPlace - a key from this._errorMessages object to display specific error message
   * @returns {Promise}
   */
  _getResponseData(res, errorPlace) {
    return res.ok
      ? res.json()
      : res
          .json()
          .then((error) =>
            Promise.reject(
              `${this._errorMessages[errorPlace]}. Ошибка: ${res.status} ${
                error.error || error.message || ''
              }`
            )
          );
  }

  /**
   * @param {string} endPoint - a part of URL after baseURL, must start with slash '/'
   * @param {object} options - object with method, headers, body, etc.
   * @param {string} errorPlace - a key from this._errorMessages object to display specific error message
   * @returns {Promise}
   */
  _request(endPoint, options, errorPlace) {
    return fetch(`${this._baseURL}${endPoint}`, options).then((res) =>
      this._getResponseData(res, errorPlace)
    );
  }

  /**
   * @returns {Promise<object>} in case of resolve returns an object with the full user data
   */
  getUserData() {
    return this._request(
      '/users/me',
      { headers: this._headers, credentials: 'include' },
      'getUserData'
    );
  }

  /**
   * @param {object} userData
   * @param {string} userData.name
   * @param {string} userData.about
   * @returns {Promise<object>} in case of resolve returns an object with updated user data
   */
  setUserData(userData) {
    return this._request(
      '/users/me',
      {
        method: 'PATCH',
        headers: this._headers,
        body: JSON.stringify(userData),
        credentials: 'include',
      },
      'setUserData'
    );
  }

  /**
   * @returns {Promise<array>} in case of resolve returns an array of objects with cards data
   */
  getInitialCards() {
    return this._request(
      '/cards',
      { headers: this._headers, credentials: 'include' },
      'getInitialCards'
    );
  }

  /**
   * @param {object} cardData
   * @param {string} cardData.name
   * @param {string} cardData.link
   * @returns {Promise<object>} in case of resolve returns an object with the full data of the added card
   */
  addCard(cardData) {
    return this._request(
      '/cards',
      {
        method: 'POST',
        headers: this._headers,
        body: JSON.stringify(cardData),
        credentials: 'include',
      },
      'addCard'
    );
  }

  /**
   * @param {string} cardId
   * @returns {Promise<object>} in case of resolve returns an object with a deletion confirmation message
   */
  deleteCard(cardId) {
    return this._request(
      `/cards/${cardId}`,
      {
        method: 'DELETE',
        headers: this._headers,
        credentials: 'include',
      },
      'deleteCard'
    );
  }

  /**
   * @param {string} cardId
   * @param {boolean} isLiked - is card liked by current user
   * @returns {Promise<object>} in case of resolve returns an object with the full data of the card
   */
  toogleCardLike(cardId, isLiked) {
    return this._request(
      `/cards/${cardId}/likes`,
      {
        method: isLiked ? 'DELETE' : 'PUT',
        headers: this._headers,
        credentials: 'include',
      },
      'toogleCardLike'
    );
  }

  /**
   * @param {object} avatarData
   * @param {string} avatarData.avatar - avatar image link
   * @returns {Promise<object>} in case of resolve returns an object with updated user data
   */
  updateAvatar(avatarData) {
    return this._request(
      '/users/me/avatar',
      {
        method: 'PATCH',
        headers: this._headers,
        body: JSON.stringify(avatarData),
        credentials: 'include',
      },
      'updateAvatar'
    );
  }

  /**
   * @param {object} authData
   * @param {string} authData.email
   * @param {string} authData.password
   * @returns
   */
  singup(authData) {
    return this._request(
      '/signup',
      {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json; charset=UTF-8',
        },
        body: JSON.stringify(authData),
      },
      'authUser'
    );
  }

  /**
   * @param {object} loginData
   * @param {string} loginData.email
   * @param {string} loginData.password
   * @returns
   */
  login(loginData) {
    return this._request(
      '/signin',
      {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json; charset=UTF-8',
        },
        body: JSON.stringify(loginData),
        credentials: 'include',
      },
      'login'
    );
  }

  logout() {
    return this._request(
      '/signout',
      {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json; charset=UTF-8',
        },
        credentials: 'include',
      },
      'logout'
    );
  }

  /**
   * @param {string} token
   * @returns
   */
  validateToken() {
    return this._request(
      '/users/me',
      {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json; charset=UTF-8',
        },
        credentials: 'include',
      },
      'validateToken'
    );
  }
}

const api = new Api(apiOptions);

const authApi = new Api(authApiOptions);

export { api, authApi };
