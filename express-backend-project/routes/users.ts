import express, { Request, Response, NextFunction } from 'express';
import { validateAndTransform } from './../middlewares/class-validator.middleware';
import { UserAddDTO } from '../dto/users/user.add.dto';
import UserController from './../controllers/users/user.controller';
import AuthenticationMiddleware from './../middlewares/authentication.middleware';
import RateLimiter from './../util/rate-limiter';
import { UserLoginDTO } from '../dto/users/userLogin.dto';

const router = express.Router();
const controller = new UserController();
const authController = new AuthenticationMiddleware();
const rateLimiter = new RateLimiter();

/* GET users listing. */
router.get('/', rateLimiter.getLimiter,
    controller.getUser);

router.post('/',
    validateAndTransform(UserAddDTO),
    controller.addUser);

router.post('/login',
    validateAndTransform(UserLoginDTO),
    controller.loginUser);
module.exports = router;
