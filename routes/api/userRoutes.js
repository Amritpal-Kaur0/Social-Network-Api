const router = require('express').Router();
const {
  getUsers,
  singleuser,
  updateUser,
  deleteUser,
  createUser,
  addFriend,
  delFriend
} = require('../../controllers/userController.js');

router.route('/').get(getUsers).post(createUser)

router.route('/:userId').get(singleuser).put(updateUser).delete(deleteUser)

router.route('/:userId/friends/:friendId').post(addFriend).delete(delFriend)


module.exports = router;
