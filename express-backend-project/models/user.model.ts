import mongoose, { Schema, Document } from 'mongoose';

export type IUser = {
  firstName: string;
  lastName:string;
  password:string;
  email:string
};

const UserSchema: Schema = new Schema(
  {
    email: { type: String, required: true, unique: true },
    firstName: { type: String, required: true},
    lastName: { type: String, required: true},
    password:{type:String,required:true}
  },
  { timestamps: true }
);

const UserModel = mongoose.model<IUser>('User', UserSchema);

export { UserModel };
