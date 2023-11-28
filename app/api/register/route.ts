import { hash } from 'bcryptjs';
import { NextResponse } from 'next/server';
import prisma from '@/libs/prismadb';

export async function POST(req: Request, res: Response) {
  const body = await req.json();

  const { email, name, password, lastName } = body;

  const hashedPassword = await hash(password, 5);

  const userExists = await prisma.users.findFirst({
    where: {
      email: email,
    },
  });

  if (userExists) {
    return NextResponse.json({ massage: 'User exists' });
  }

  const user = await prisma.users.create({
    data: {
      name,
      last_name: lastName,
      email,
      password: hashedPassword,
    },
  });

  return NextResponse.json(user);
}
