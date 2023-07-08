const router = require('express').Router();
const {
  getSingleThought,
  getThought,
  postThought,
  postReaction,
  delReaction,
  updateThought,
  deleteThought
} = require('../../controllers/thoughtsController.js');

router.route('/').get(getThought)
router.route('/:userId/new/:thoughtId').post(postThought)
router.route('/:thoughtId').get(getSingleThought).put(updateThought).delete(deleteThought)

router.route('/:thoughtId/reaction').post(postReaction)
router.route('/:thoughtId/del/:reactionId').delete(delReaction)

module.exports = router;
