import { recruiterEntity } from "src/recruiter/entities/recruiter.entity";
import { TimestampEntites } from "src/timestamp/timestamp.entity";
export declare class userEntity extends TimestampEntites {
    id: any;
    email: string;
    username: string;
    lastname: string;
    password: string;
    roles: string;
    salt: string;
    recruiter: recruiterEntity;
}
