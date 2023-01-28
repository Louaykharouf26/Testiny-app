import { Strategy } from 'passport-jwt';
import { ConfigService } from '@nestjs/config';
import { PayloadInterface } from 'src/recruiter/interfaces/payload.interface';
import { Repository } from 'typeorm';
import { recruiterEntity } from 'src/recruiter/entities/recruiter.entity';
declare const JwtStrategy_base: new (...args: any[]) => Strategy;
export declare class JwtStrategy extends JwtStrategy_base {
    private configService;
    private userRepository;
    constructor(configService: ConfigService, userRepository: Repository<recruiterEntity>);
    validate(payload: PayloadInterface): Promise<{
        id: any;
        email: string;
        username: string;
        lastname: string;
        roles: string;
        developers: import("../user/entities/user.entity").userEntity[];
        createdAt: Date;
        updatedAt: Date;
        deletedAt: Date;
    }>;
}
export {};
