import HttpStatusCode from './../../util/http-status-code';
import UserService from '../../services/users.service';
import { UserAddDTO } from '../../dto/users/user.add.dto';
import { UserLoginDTO } from '../../dto/users/userLogin.dto';
/**
 * This controller handle all the resource request related to the 
 * User resource
 */
export default class UserController {
  readonly userService = new  UserService();
  getUser = async (request: any, response: any) => {
    try {
      const data = await this.userService.getUser();
      response.success(data);
    } catch (error: any) {
      response.error(
        'Failed to save user',
        HttpStatusCode.BAD_REQUEST,
        error.message
      );
    }
  }
  addUser = async (request: any, response: any) => {
    try {
      const userDataDTO: UserAddDTO = request.data;
      const data = await this.userService.createUser(userDataDTO);
      response.success(
        data,
        HttpStatusCode.CREATED,
        'User created successfully'
      );
    } catch (error: any) {
      response.error(
        'Failed to save User',
        HttpStatusCode.BAD_REQUEST,
        error.message
      );
    }

  }
  loginUser = async (request: any, response: any) => {
    try {
      const userDataDTO: UserLoginDTO = request.data;
      const data = await this.userService.validateUser(userDataDTO);
      if (data) {
        response.success(
          data,
          HttpStatusCode.CREATED,
          'User created successfully'
        );
      } else {
        response.error(
          'Failed to authenticate user',
          HttpStatusCode.BAD_REQUEST,
          'Invalid username and password'
        );
      }

    } catch (error: any) {
      response.error(
        'Failed to save User',
        HttpStatusCode.BAD_REQUEST,
        error.message
      );
    }

  }
 
}
