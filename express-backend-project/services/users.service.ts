import { UserAddDTO } from '../dto/users/user.add.dto';
import { UserLoginDTO } from '../dto/users/userLogin.dto';
import { IUser } from '../models/user.model';
import UserRepository from '../repositories/user.repository';

export default class UserService {
  readonly userRepository = new UserRepository();

  async createUser(userDataDTO: UserAddDTO): Promise<IUser> {
    const userData: IUser = {
      firstName: userDataDTO.firstName,
      lastName:userDataDTO.lastName,
      email:userDataDTO.email,
      password:userDataDTO.password
    };
    return this.userRepository.createUsers(userData);
  }

  async getUser(): Promise<IUser[]> {
    return this.userRepository.getUsers();
  }
  async validateUser(userLoginDTO:UserLoginDTO){
    const userData= await this.userRepository.getUsersByEmail(userLoginDTO.email)
    if(!userData){
      throw new Error ("User not found");
    }
    else{
      if(userLoginDTO.password==userData.password){
        return userData;
      }
      else{
        return false;
      }
    }
  }
}
