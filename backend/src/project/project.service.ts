import { Injectable } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';
import { CreateProjectInput } from './dto/create-project.input';
import { ProjectType } from './models/project.model';

@Injectable()
export class ProjectService {
  constructor(private readonly prisma: PrismaService) {}

  async findAll(): Promise<ProjectType[]> {
    return this.prisma.project.findMany({
      orderBy: { createdAt: 'asc' },
    });
  }

  async findOne(id: string): Promise<ProjectType | null> {
    return this.prisma.project.findUnique({
      where: { id },
    });
  }

  async create(input: CreateProjectInput): Promise<ProjectType> {
    return this.prisma.project.create({
      data: input,
    });
  }
}
