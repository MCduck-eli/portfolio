import { PrismaService } from '../prisma/prisma.service';
import { CreateContactInput } from './dto/create-contact.input';
import { ContactResponse } from './models/contact-response.model';
export declare class ContactService {
    private readonly prisma;
    private transporter;
    constructor(prisma: PrismaService);
    sendMessage(input: CreateContactInput): Promise<ContactResponse>;
}
