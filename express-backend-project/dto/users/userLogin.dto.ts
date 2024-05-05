import { IsNotEmpty, IsString, IsEmail, Length } from "class-validator";
import 'reflect-metadata';

export class UserLoginDTO{
    @IsNotEmpty({message:'Email cannot be empty'})
    @IsEmail({},{message:'Invalid email format'})
    email!: string;

    @IsNotEmpty({message:'Password cannot be empty'})
    @Length(2,10, {message:'Name must be between 2 and 10 characters'})
    @IsString({message:'Password must be string'})
    password!: string;
}