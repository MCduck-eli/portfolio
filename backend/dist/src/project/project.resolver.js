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
exports.ProjectResolver = void 0;
const graphql_1 = require("@nestjs/graphql");
const project_service_1 = require("./project.service");
const project_model_1 = require("./models/project.model");
const create_project_input_1 = require("./dto/create-project.input");
let ProjectResolver = class ProjectResolver {
    projectService;
    constructor(projectService) {
        this.projectService = projectService;
    }
    async getProjects() {
        return this.projectService.findAll();
    }
    async getProject(id) {
        return this.projectService.findOne(id);
    }
    async createProject(input) {
        return this.projectService.create(input);
    }
};
exports.ProjectResolver = ProjectResolver;
__decorate([
    (0, graphql_1.Query)(() => [project_model_1.ProjectType], { name: 'getProjects' }),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], ProjectResolver.prototype, "getProjects", null);
__decorate([
    (0, graphql_1.Query)(() => project_model_1.ProjectType, { name: 'getProject', nullable: true }),
    __param(0, (0, graphql_1.Args)('id', { type: () => graphql_1.ID })),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], ProjectResolver.prototype, "getProject", null);
__decorate([
    (0, graphql_1.Mutation)(() => project_model_1.ProjectType),
    __param(0, (0, graphql_1.Args)('input')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [create_project_input_1.CreateProjectInput]),
    __metadata("design:returntype", Promise)
], ProjectResolver.prototype, "createProject", null);
exports.ProjectResolver = ProjectResolver = __decorate([
    (0, graphql_1.Resolver)(() => project_model_1.ProjectType),
    __metadata("design:paramtypes", [project_service_1.ProjectService])
], ProjectResolver);
//# sourceMappingURL=project.resolver.js.map