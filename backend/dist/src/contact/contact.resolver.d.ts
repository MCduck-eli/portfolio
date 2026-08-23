import { ContactService } from './contact.service';
import { ContactResponse } from './models/contact-response.model';
import { CreateContactInput } from './dto/create-contact.input';
export declare class ContactResolver {
    private readonly contactService;
    constructor(contactService: ContactService);
    sendMessage(input: CreateContactInput): Promise<ContactResponse>;
}
