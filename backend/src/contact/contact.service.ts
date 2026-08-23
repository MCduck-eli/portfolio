import { Injectable } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';
import { CreateContactInput } from './dto/create-contact.input';
import { ContactResponse } from './models/contact-response.model';
import * as nodemailer from 'nodemailer';

@Injectable()
export class ContactService {
  private transporter: nodemailer.Transporter;

  constructor(private readonly prisma: PrismaService) {
    this.transporter = nodemailer.createTransport({
      service: 'gmail',
      auth: {
        user: process.env.SMTP_USER,
        pass: process.env.SMTP_PASS,
      },
    });
  }

  async sendMessage(input: CreateContactInput): Promise<ContactResponse> {
    await this.prisma.message.create({
      data: {
        name: input.name,
        email: input.email,
        content: input.content,
      },
    });

    if (process.env.SMTP_USER && process.env.SMTP_PASS) {
      await this.transporter.sendMail({
        from: `"${input.name}" <${process.env.SMTP_USER}>`,
        replyTo: input.email,
        to: process.env.CONTACT_RECEIVER_EMAIL || process.env.SMTP_USER,
        subject: `New Portfolio Message from ${input.name}`,
        text: `Sender: ${input.name} (${input.email})\n\nMessage:\n${input.content}`,
      });
    }

    return {
      success: true,
      message: 'Message sent successfully',
    };
  }
}
