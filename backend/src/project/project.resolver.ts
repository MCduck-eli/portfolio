import { Resolver, Query, Mutation, Args, ID } from '@nestjs/graphql';
import { ProjectService } from './project.service';
import { ProjectType } from './models/project.model';
import { CreateProjectInput } from './dto/create-project.input';

@Resolver(() => ProjectType)
export class ProjectResolver {
  constructor(private readonly projectService: ProjectService) {}

  @Query(() => [ProjectType], { name: 'getProjects' })
  async getProjects(): Promise<ProjectType[]> {
    return this.projectService.findAll();
  }

  @Query(() => ProjectType, { name: 'getProject', nullable: true })
  async getProject(
    @Args('id', { type: () => ID }) id: string,
  ): Promise<ProjectType | null> {
    return this.projectService.findOne(id);
  }

  @Mutation(() => ProjectType)
  async createProject(
    @Args('input') input: CreateProjectInput,
  ): Promise<ProjectType> {
    return this.projectService.create(input);
  }
}
