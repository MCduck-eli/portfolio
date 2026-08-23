import { PrismaService } from '../prisma/prisma.service';
import { CreateProjectInput } from './dto/create-project.input';
import { ProjectType } from './models/project.model';
export declare class ProjectService {
    private readonly prisma;
    constructor(prisma: PrismaService);
    findAll(): Promise<ProjectType[]>;
    findOne(id: string): Promise<ProjectType | null>;
    create(input: CreateProjectInput): Promise<ProjectType>;
}
