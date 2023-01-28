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
var recruiterEntity_1;
Object.defineProperty(exports, "__esModule", { value: true });
exports.recruiterEntity = void 0;
const timestamp_entity_1 = require("../../timestamp/timestamp.entity");
const typeorm_1 = require("typeorm");
const uuid_1 = require("uuid");
let recruiterEntity = recruiterEntity_1 = class recruiterEntity extends timestamp_entity_1.TimestampEntites {
    constructor() {
        super(...arguments);
        this.id = (0, uuid_1.v4)();
    }
};
__decorate([
    (0, typeorm_1.PrimaryGeneratedColumn)(),
    __metadata("design:type", Object)
], recruiterEntity.prototype, "id", void 0);
__decorate([
    (0, typeorm_1.Column)({ unique: true }),
    __metadata("design:type", String)
], recruiterEntity.prototype, "email", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", String)
], recruiterEntity.prototype, "username", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", String)
], recruiterEntity.prototype, "lastname", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", String)
], recruiterEntity.prototype, "password", void 0);
__decorate([
    (0, typeorm_1.Column)({
        default: "Recruiter"
    }),
    __metadata("design:type", String)
], recruiterEntity.prototype, "roles", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", String)
], recruiterEntity.prototype, "salt", void 0);
__decorate([
    (0, typeorm_1.OneToMany)(type => recruiterEntity_1, (user) => user.developers),
    __metadata("design:type", Array)
], recruiterEntity.prototype, "developers", void 0);
recruiterEntity = recruiterEntity_1 = __decorate([
    (0, typeorm_1.Entity)('recruiters')
], recruiterEntity);
exports.recruiterEntity = recruiterEntity;
//# sourceMappingURL=recruiter.entity.js.map