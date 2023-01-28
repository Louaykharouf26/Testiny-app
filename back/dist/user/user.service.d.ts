import { Repository } from 'typeorm';
import { UserSignUpDto } from './dto/user-SignUp.dto';
import { userEntity } from './entities/user.entity';
import { UserLoginDto } from "./dto/user-login.dto";
import { JwtService } from "@nestjs/jwt";
export declare class UserService {
    private userRepository;
    private jwtService;
    constructor(userRepository: Repository<userEntity>, jwtService: JwtService);
    SignUp(userinfo: UserSignUpDto): Promise<userEntity>;
    login(creds: UserLoginDto): Promise<{
        username: string;
        email: string;
        id: any;
        lastname: string;
        role: string;
        access_token: string;
    }>;
    findAll(user: any): Promise<userEntity[]>;
    getUserById(id: number): Promise<UserLoginDto>;
    getUserByRole(devid: any): Promise<[userEntity[], number]>;
    deleteById(id: any): Promise<import("typeorm").UpdateResult>;
}
