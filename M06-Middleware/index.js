var express = require('express');
var router = express.Router();

var auth = require('../middleware/auth');

var stuffCtrl = require('../controllers/stuff');

var jwt = require('jsonwebtoken');

module.exports = (req, res, next) => {
  try {
    let token = req.headers.authorization.split(' ')[1];
    let decodedToken = jwt.verify(token, 'RANDOM_TOKEN_SECRET');
    let userId = decodedToken.userId;
    if (req.body.userId && req.body.userId !== userId) {
      throw 'User ID tidak ada';
    } else {
      next();
    }
  } catch {
    res.status(401).json({
      error: new Error('Error!')
    });
  }
};

router.get('/', auth, stuffCtrl.getAllStuff);
router.post('/', auth, stuffCtrl.createThing);
router.get('/:id', auth, stuffCtrl.getOneThing);
router.put('/:id', auth, stuffCtrl.modifyThing);
router.delete('/:id', auth, stuffCtrl.deleteThing);











