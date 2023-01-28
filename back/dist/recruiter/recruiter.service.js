"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.RecruiterService = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const typeorm_2 = require("typeorm");
const recruiter_entity_1 = require("./entities/recruiter.entity");
const bcrypt = require("bcrypt");
const jwt_1 = require("@nestjs/jwt");
let RecruiterService = class RecruiterService {
    constructor(userRepository, jwtService) {
        this.userRepository = userRepository;
        this.jwtService = jwtService;
    }
    async SignUpRecruiter(recruiterinfo) {
        const user = this.userRepository.create(Object.assign({}, recruiterinfo));
        user.salt = await bcrypt.genSalt();
        user.password = await bcrypt.hash(user.password, user.salt);
        try {
            await this.userRepository.save(user);
        }
        catch (e) {
            throw new common_1.ConflictException('email should be unique');
        }
        delete user.salt;
        delete user.password;
        return user;
    }
    async login(creds) {
        const { email, password } = creds;
        const user = await this.userRepository.createQueryBuilder("user")
            .where("user.email=:email or user.password=:password", { email, password }).getOne();
        if (!user)
            throw new common_1.NotFoundException("user not found check again the password and username");
        const hashedpass = await bcrypt.hash(password, user.salt);
        if (hashedpass === user.password) {
            const payload = {
                username: user.username,
                email: user.email,
                roles: user.roles
            };
            const jwt = this.jwtService.sign(payload);
            return { username: user.username,
                email: user.email,
                id: user.id,
                lastname: user.lastname,
                role: user.roles,
                "access_token": jwt
            };
        }
        else {
            throw new common_1.NotFoundException(" password error");
        }
    }
    async findAll(user) {
        return this.userRepository.find(user);
    }
    async getUserById(id) {
        const userId = await this.userRepository.findOneBy({ id: id });
        console.log(userId, id);
        if (!userId) {
            throw new common_1.NotFoundException();
        }
        return userId;
    }
};
RecruiterService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, typeorm_1.InjectRepository)(recruiter_entity_1.recruiterEntity)),
    __metadata("design:paramtypes", [typeorm_2.Repository,
        jwt_1.JwtService])
], RecruiterService);
exports.RecruiterService = RecruiterService;
//# sourceMappingURL=recruiter.service.js.map