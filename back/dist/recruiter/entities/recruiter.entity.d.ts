import { TimestampEntites } from "src/timestamp/timestamp.entity";
import { userEntity } from "src/user/entities/user.entity";
export declare class recruiterEntity extends TimestampEntites {
    id: any;
    email: string;
    username: string;
    lastname: string;
    password: string;
    roles: string;
    salt: string;
    developers: userEntity[];
}
