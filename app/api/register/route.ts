import { hash } from 'bcryptjs';
import { NextResponse } from 'next/server';
import prisma from '@/libs/prismadb';

export async function POST(req: Request, res: Response) {
  const body = await req.json();
  const { email, name, password, lastName } = body;

  //Password hashing
  const hashedPassword = await hash(password, 5);

  const checkUser = async function () {
    const userExists = await prisma.users.findFirst({
      where: {
        email: email,
      },
    });
    return userExists;
  };

  const createUser = async function () {
    if (await checkUser()) {
      return { message: 'User exists' };
    } else {
      const user = await prisma.users.create({
        data: {
          name,
          last_name: lastName,
          email,
          password: hashedPassword,
        },
      });
      return user;
    }
  };

  return NextResponse.json(await createUser());
}
