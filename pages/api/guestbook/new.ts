import type { NextApiRequest, NextApiResponse } from "next";
import prisma from "../../../lib/prisma";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const { name, message, email } = req.body;
  const guestbook = await prisma.guestbook.create({
    data: {
      name,
      message: message.slice(0, 500),
      email,
    },
  });
  res.status(200).json({
    id: guestbook.id,
    name: guestbook.name,
    message: guestbook.message,
    created_at: guestbook.createdAt,
  });
}
