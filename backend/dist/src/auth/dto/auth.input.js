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
Object.defineProperty(exports, "__esModule", { value: true });
exports.SocialAuthInput = exports.LoginInput = exports.RegisterInput = void 0;
const graphql_1 = require("@nestjs/graphql");
let RegisterInput = class RegisterInput {
    name;
    email;
    password;
};
exports.RegisterInput = RegisterInput;
__decorate([
    (0, graphql_1.Field)(),
    __metadata("design:type", String)
], RegisterInput.prototype, "name", void 0);
__decorate([
    (0, graphql_1.Field)(),
    __metadata("design:type", String)
], RegisterInput.prototype, "email", void 0);
__decorate([
    (0, graphql_1.Field)(),
    __metadata("design:type", String)
], RegisterInput.prototype, "password", void 0);
exports.RegisterInput = RegisterInput = __decorate([
    (0, graphql_1.InputType)()
], RegisterInput);
let LoginInput = class LoginInput {
    email;
    password;
};
exports.LoginInput = LoginInput;
__decorate([
    (0, graphql_1.Field)(),
    __metadata("design:type", String)
], LoginInput.prototype, "email", void 0);
__decorate([
    (0, graphql_1.Field)(),
    __metadata("design:type", String)
], LoginInput.prototype, "password", void 0);
exports.LoginInput = LoginInput = __decorate([
    (0, graphql_1.InputType)()
], LoginInput);
let SocialAuthInput = class SocialAuthInput {
    email;
    name;
    avatar;
    provider;
    providerId;
};
exports.SocialAuthInput = SocialAuthInput;
__decorate([
    (0, graphql_1.Field)(),
    __metadata("design:type", String)
], SocialAuthInput.prototype, "email", void 0);
__decorate([
    (0, graphql_1.Field)(),
    __metadata("design:type", String)
], SocialAuthInput.prototype, "name", void 0);
__decorate([
    (0, graphql_1.Field)({ nullable: true }),
    __metadata("design:type", String)
], SocialAuthInput.prototype, "avatar", void 0);
__decorate([
    (0, graphql_1.Field)(),
    __metadata("design:type", String)
], SocialAuthInput.prototype, "provider", void 0);
__decorate([
    (0, graphql_1.Field)(),
    __metadata("design:type", String)
], SocialAuthInput.prototype, "providerId", void 0);
exports.SocialAuthInput = SocialAuthInput = __decorate([
    (0, graphql_1.InputType)()
], SocialAuthInput);
//# sourceMappingURL=auth.input.js.map