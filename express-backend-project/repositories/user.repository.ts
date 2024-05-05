import mongoose from 'mongoose';
import { IUser, UserModel } from '../models/user.model';

export default class UserRepository {
  async createUsers(userData: IUser): Promise<IUser> {
    const createdUser = await UserModel.create(userData);
    return createdUser.toObject();
  }
  async getUsers(): Promise<IUser[]> {
    return await UserModel.find();
  }
  async getUsersByEmail(email:string): Promise<IUser|null> {
    return await UserModel.findOne({email:email});
  }
}
