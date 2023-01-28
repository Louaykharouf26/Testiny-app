import { Repository } from 'typeorm';
import { RecruiterSignUpDto } from './dto/recruiter-SignUp.dto';
import { recruiterEntity } from './entities/recruiter.entity';
import { RecruiterLoginDto } from './dto/recruiter-login.dto';
import { JwtService } from "@nestjs/jwt";
export declare class RecruiterService {
    private userRepository;
    private jwtService;
    constructor(userRepository: Repository<recruiterEntity>, jwtService: JwtService);
    SignUpRecruiter(recruiterinfo: RecruiterSignUpDto): Promise<recruiterEntity>;
    login(creds: RecruiterLoginDto): Promise<{
        username: string;
        email: string;
        id: any;
        lastname: string;
        role: string;
        access_token: string;
    }>;
    findAll(user: any): Promise<recruiterEntity[]>;
    getUserById(id: number): Promise<RecruiterLoginDto>;
}
