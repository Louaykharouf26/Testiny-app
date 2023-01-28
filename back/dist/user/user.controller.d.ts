import { UserLoginDto } from './dto/user-login.dto';
import { UserSignUpDto } from './dto/user-SignUp.dto';
import { userEntity } from './entities/user.entity';
import { UserService } from './user.service';
export declare class UserController {
    private userService;
    constructor(userService: UserService);
    SignUp(userinfo: UserSignUpDto): Promise<userEntity>;
    Login(userlogin: UserLoginDto): Promise<{
        username: string;
        email: string;
        id: any;
        lastname: string;
        role: string;
        access_token: string;
    }>;
    findAll(user: any): Promise<userEntity[]>;
    findById(id: number): Promise<UserLoginDto>;
    count(id: any): Promise<[userEntity[], number]>;
    remove(id: string): Promise<import("typeorm").UpdateResult>;
    uploadFile(file: any): void;
    seeUplodedFile(file: any, res: any): void;
    logout(req: any, res: any): Promise<any>;
}
