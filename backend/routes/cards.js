const cardsRouter = require('express').Router();

const { validateCardData, validateCardId } = require('../middlewares/validators/card-validators');

const {
  getCards,
  createCard,
  deleteCard,
  putLike,
  deleteLike,
} = require('../controllers/cards');

cardsRouter.get('/', getCards);
cardsRouter.post('/', validateCardData, createCard);
cardsRouter.delete('/:id', validateCardId, deleteCard);
cardsRouter.put('/:id/likes', validateCardId, putLike);
cardsRouter.delete('/:id/likes', validateCardId, deleteLike);

module.exports = cardsRouter;
