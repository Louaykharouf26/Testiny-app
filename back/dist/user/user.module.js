"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserModule = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const user_entity_1 = require("./entities/user.entity");
const user_controller_1 = require("./user.controller");
const user_service_1 = require("./user.service");
const passport_1 = require("@nestjs/passport");
const jwt_1 = require("@nestjs/jwt");
const jwt_passport_startegy_1 = require("./strategy/jwt-passport.startegy");
const config_1 = require("@nestjs/config");
const constants_1 = require("./strategy/constants");
const platform_express_1 = require("@nestjs/platform-express");
let UserModule = class UserModule {
};
UserModule = __decorate([
    (0, common_1.Module)({
        controllers: [user_controller_1.UserController],
        providers: [user_service_1.UserService, jwt_passport_startegy_1.JwtStrategy],
        imports: [platform_express_1.MulterModule.register({ dest: './uploads' }), typeorm_1.TypeOrmModule.forFeature([user_entity_1.userEntity]), config_1.ConfigModule, passport_1.PassportModule.register({
                defaultStrategy: 'jwt'
            }),
            jwt_1.JwtModule.register({
                secret: constants_1.jwtConstants.secret,
                signOptions: {
                    expiresIn: 3600
                }
            })],
    })
], UserModule);
exports.UserModule = UserModule;
//# sourceMappingURL=user.module.js.map