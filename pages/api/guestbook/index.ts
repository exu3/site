import type { NextApiRequest, NextApiResponse } from "next";
import prisma from "../../../lib/prisma";

export const getGuestbook = async (
  req: NextApiRequest,
  res: NextApiResponse
) => {
  const guestbook = await prisma.guestbook.findMany({
    orderBy: {
      createdAt: "desc",
    },
    select: {
      id: true,
      name: true,
      message: true,
      createdAt: true,
    },
  });

  res.status(200).json({
    guestbook,
  });
};
