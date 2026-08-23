import { Resolver, Mutation, Args } from '@nestjs/graphql';
import { ContactService } from './contact.service';
import { ContactResponse } from './models/contact-response.model';
import { CreateContactInput } from './dto/create-contact.input';

@Resolver()
export class ContactResolver {
  constructor(private readonly contactService: ContactService) {}

  @Mutation(() => ContactResponse)
  async sendMessage(
    @Args('input') input: CreateContactInput,
  ): Promise<ContactResponse> {
    return this.contactService.sendMessage(input);
  }
}
