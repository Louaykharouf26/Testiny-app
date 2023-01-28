"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.RecruiterModule = void 0;
const common_1 = require("@nestjs/common");
const config_1 = require("@nestjs/config");
const jwt_1 = require("@nestjs/jwt");
const passport_1 = require("@nestjs/passport");
const typeorm_1 = require("@nestjs/typeorm");
const constants_1 = require("../strategy/constants");
const recruiter_entity_1 = require("./entities/recruiter.entity");
const recruiter_controller_1 = require("./recruiter.controller");
const recruiter_service_1 = require("./recruiter.service");
let RecruiterModule = class RecruiterModule {
};
RecruiterModule = __decorate([
    (0, common_1.Module)({
        controllers: [recruiter_controller_1.RecruiterController],
        providers: [recruiter_service_1.RecruiterService],
        imports: [typeorm_1.TypeOrmModule.forFeature([recruiter_entity_1.recruiterEntity]), config_1.ConfigModule, passport_1.PassportModule.register({
                defaultStrategy: 'jwt'
            }),
            jwt_1.JwtModule.register({
                secret: constants_1.jwtConstants.secret,
                signOptions: {
                    expiresIn: 3600
                }
            })]
    })
], RecruiterModule);
exports.RecruiterModule = RecruiterModule;
//# sourceMappingURL=recruiter.module.js.map