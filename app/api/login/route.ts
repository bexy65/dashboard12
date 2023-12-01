import { NextResponse } from 'next/server';
import prisma from '@/libs/prismadb';
import { compare } from 'bcryptjs';

export async function POST(req: Request, res: Response) {
  // Simulate a login request to your backend
  const body = await req.json();
  const { email, password } = body;

  let response = {
    message: '',
    success: false,
  };

  const user = await prisma.users.findFirst({
    where: {
      email: email,
    },
  });

  if (!user) {
    response.message = 'User not found';
  } else {
    const validPass = await compare(password, user?.password);

    if (validPass) {
      response.message = 'Login successful';
      response.success = true;
    } else {
      response.message = 'Incorrect password';
    }
  }

  return NextResponse.json(response);
}
