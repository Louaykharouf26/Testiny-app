import { Strategy } from 'passport-jwt';
import { ConfigService } from '@nestjs/config';
import { PayloadInterface } from '../interfaces/payload.interface';
import { Repository } from 'typeorm';
import { userEntity } from '../entities/user.entity';
declare const JwtStrategy_base: new (...args: any[]) => Strategy;
export declare class JwtStrategy extends JwtStrategy_base {
    private configService;
    private userRepository;
    constructor(configService: ConfigService, userRepository: Repository<userEntity>);
    validate(payload: PayloadInterface): Promise<{
        id: any;
        email: string;
        username: string;
        lastname: string;
        roles: string;
        recruiter: import("../../recruiter/entities/recruiter.entity").recruiterEntity;
        createdAt: Date;
        updatedAt: Date;
        deletedAt: Date;
    }>;
}
export {};
