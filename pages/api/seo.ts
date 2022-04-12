import type { NextApiRequest, NextApiResponse } from "next";
type Data = {
  name: string;
};
const baseUrl = "http://localhost:3000";
export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
  const background = `${baseUrl}/images/bg-bounty-card.png`;
  const logo = `${baseUrl}/images/bepro-icon.png`;
  const font = `${baseUrl}/fonts/SpaceGrotesk.woff2`;
  const html = `<html>
<head>
  <meta charset="utf-8" />
  <title>SEO Image</title>
  <style>
    @font-face {
      font-family: "Space Grotesk";
      src: url(${font}) format("woff2");
      font-weight: 300 700;
    }

    html{
      margin: 0;
      padding: 0;
    }

    body {
      margin: 0;
      padding: 0;
      width: 1200px;
      height: 627px;
      overflow: hidden;
      background: transparent;
      font-family: "Space Grotesk", sans-serif;
      font-feature-settings: "tnum" on, "lnum" on, "ss02" on, "ss03" on,
        "ss04" on;
    }

    .container {
      max-width: 1200px;
      max-height: 627px;
      overflow: hidden;
      justify-content: space-arround;
      padding: 60px;
      display: flex;
      flex-direction: column;
      background: url(${background});
      color: white;
    }

    .container-status {
      display: flex;
      flex-direction: row;
      align-items: center;
      gap: 20px;
    }

    .status-label {
      padding: 10px;
      text-transform: uppercase;
      font-weight: 700;
      font-size: 35px;
      line-height: 120%;
      letter-spacing: 3px;
      background: #4250e4;
      border-radius: 8px;
    }

    .issue-number {
      font-size: 33px;
      font-weight: 500;
      line-height: 120%;
      color: rgba(255, 255, 255, 0.4);
    }

    .title {
      font-weight: 500;
      font-size: 46px;
      line-height: 120%;
      color: #ffffff;

      overflow: hidden;
      text-overflow: ellipsis;
      display: -webkit-box;
      -webkit-line-clamp: 3;
      line-clamp: 3;
      -webkit-box-orient: vertical;
    }

    .repo-tag {
      font-weight: 700;
      font-size: 25.6px;
      line-height: 120%;
      letter-spacing: 0.1em;
      text-transform: uppercase;
      color: #4250e4;
      border: #4250e4 solid 2px;
      border-radius: 8px;
      padding: 6px 10px;
      max-width: fit-content;
    }

    .ammount {
      font-size: 70px;
      line-height: 120%;
      display: flex;
      align-items: center;
      font-weight: 500;
      color: #ffffff;
      margin: 0.75rem 0;
    }

    .currency {
      margin-left: 10px;
      color: #4250e4;
      font-size: 38px;
      line-height: 120%;
      font-weight: 500;
    }

    .container-legend {
      display: flex;
      flex-direction: row;
      align-items: center;
      justify-content: space-between;
    }

    .container-legend h3 {
      font-weight: 600;
      font-size: 38px;
      line-height: 100%;
      color: #ffffff;
      margin: 0.5rem 0;
    }

    .container-legend span {
      font-weight: 500;
      font-size: 30px;
      line-height: 100%;
      color: rgba(255, 255, 255, 0.4);
      text-transform: uppercase;
    }
  </style>
</head>
<body>
  <div id="content" class="container">
    <div class="container-status">
      <div class="status-label"><span>OPEN</span></div>
      <span class="issue-number">#99999</span>
    </div>
    <div>
      <h1 class="title">
        Remove all getContract functions from Application and instead calling
        Remove all getContract functions from Application and instead calling
        Remove all getContract functions from Application and instead calling
        Remove all getContract functions from Application and instead calling
        Remove all getContract functions from Application and instead calling
      </h1>
    </div>
    <div class="repo-tag">
      <span>BEPRO-JS</span>
    </div>
    <h2 class="ammount">1,200,000 <span class="currency">$BEPRO</span></h2>
    <div class="container-legend">
      <div>
        <h3>12</h3>
        <span>WORKING</span>
      </div>
      <div>
        <h3>12</h3>
        <span>PULL REQUESTS</span>
      </div>
      <div>
        <h3>12</h3>
        <span>PROPOSALS</span>
      </div>
      <div class="logo">
        <img src='${logo}' />
      </div>
    </div>
  </div>
</body>
</html>
`;

  const image = await Buffer.from(html, "base64");
  res.writeHead(200, { "Content-Type": "image/png" });
  res.end(image, "binary");
}
