import { getServerSession } from "next-auth";
import { authOptions } from "./[...nextauth]";
import type { NextApiRequest, NextApiResponse } from "next";

export default async function getStatus(
  req: NextApiRequest,
  res: NextApiResponse
) {
  console.log("req", req);
  console.log("res", res);
  const session = await getServerSession(req, res, authOptions);
  if (!session) {
    return res.status(200).json({ session: null });
  }
  console.log("session", session);

  return res.status(200).json({ session });
}
