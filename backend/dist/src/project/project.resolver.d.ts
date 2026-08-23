import { ProjectService } from './project.service';
import { ProjectType } from './models/project.model';
import { CreateProjectInput } from './dto/create-project.input';
export declare class ProjectResolver {
    private readonly projectService;
    constructor(projectService: ProjectService);
    getProjects(): Promise<ProjectType[]>;
    getProject(id: string): Promise<ProjectType | null>;
    createProject(input: CreateProjectInput): Promise<ProjectType>;
}
