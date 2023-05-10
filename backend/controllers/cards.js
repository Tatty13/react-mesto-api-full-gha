const Card = require('../models/card');

const NotFoundError = require('../errors/not-found-error');
const ForbiddenError = require('../errors/forbidden-error');

const { CREATED_201 } = require('../utils/constants');

async function getCards(_, res, next) {
  try {
    const cards = await Card.find({}).populate(['owner', 'likes']);
    res.send(cards);
  } catch (err) {
    next(err);
  }
}

async function createCard(req, res, next) {
  const { name, link } = req.body;
  const { _id } = req.user;

  try {
    const newCard = await Card.create({ name, link, owner: _id });
    const card = await newCard.populate('owner');
    res.status(CREATED_201).send(card);
  } catch (err) {
    next(err);
  }
}

async function deleteCard(req, res, next) {
  const { id } = req.params;
  const userId = req.user._id;

  try {
    const card = await Card.findById(id);
    if (!card) throw new NotFoundError('Карточка не найдена');

    if (card.owner._id.toString() !== userId) throw new ForbiddenError('Недостаточно прав для удаления карточки');

    await card.deleteOne();

    res.send({ message: 'Карточка удалена' });
  } catch (err) {
    next(err);
  }
}

async function toogleLike(req, res, next) {
  const { id } = req.params;
  const { _id: userId } = req.user;

  try {
    const card = await Card.findByIdAndUpdate(
      id,
      req.method === 'PUT' ? { $addToSet: { likes: userId } } : { $pull: { likes: userId } },
      { new: true },
    ).populate(['owner', 'likes']);

    if (!card) throw new NotFoundError('Карточка не найдена');

    res.send(card);
  } catch (err) {
    next(err);
  }
}

function putLike(req, res, next) {
  toogleLike(req, res, next);
}

function deleteLike(req, res, next) {
  toogleLike(req, res, next);
}

module.exports = {
  getCards,
  createCard,
  deleteCard,
  putLike,
  deleteLike,
};
