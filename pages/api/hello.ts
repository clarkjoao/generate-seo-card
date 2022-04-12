// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from "next";
import { makeSeo } from "../../make-seo";
type Data = {
  name: string;
};

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
  try {
    const image = await makeSeo();
    console.log(image);
    res.writeHead(200, { "Content-Type": "image/png" });
    res.end(image, "binary");
  } catch {
    res.end("error");
  }
}
