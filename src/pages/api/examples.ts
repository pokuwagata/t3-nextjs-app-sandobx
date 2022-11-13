import { type NextApiRequest, type NextApiResponse } from "next";

import { prisma } from "../../server/db/client";

const examples = async (req: NextApiRequest, res: NextApiResponse) => {
  const { method } = req;

  switch (method) {
    case "GET":
      const example = await prisma.example.findMany();
      res.status(200).json(example);
      break;

    case "PUT":
      const updated = await prisma.example.update({
        data: { id: "3" },
        where: { id: "2" },
      });
      res.status(200).json(updated);
      break;

    default:
      res.setHeader("Allow", ["GET", "PUT"]);
      res.status(405).end(`Method ${method} Not Allowed`);
  }
};

export default examples;
