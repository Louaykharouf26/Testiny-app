import { RecruiterLoginDto } from './dto/recruiter-login.dto';
import { RecruiterSignUpDto } from './dto/recruiter-SignUp.dto';
import { recruiterEntity } from './entities/recruiter.entity';
import { RecruiterService } from './recruiter.service';
export declare class RecruiterController {
    private recruiterService;
    constructor(recruiterService: RecruiterService);
    SignUpRecruiter(recruiterinfo: RecruiterSignUpDto): Promise<recruiterEntity>;
    Login(userlogin: RecruiterLoginDto): Promise<{
        username: string;
        email: string;
        id: any;
        lastname: string;
        role: string;
        access_token: string;
    }>;
    findAll(user: any): Promise<recruiterEntity[]>;
    findById(id: number): Promise<RecruiterLoginDto>;
}
