const http = require("http");
const fs = require("fs/promises");
const path = require("path");

const server = http.createServer();

const PORT = process.env.PORT || 8000;

server.on("request", async (req, res) => {
  if (req.method === "GET" && req.url?.includes("/image_part")) {
    const filePath = path.join(__dirname, `./public/images${req.url}`);
    const file = await fs.open(filePath, "r");
    const fileStream = file.createReadStream();
    fileStream.pipe(res);

    fileStream.on("end", () => {
      res.end();
    });
  }

  if (req.method === "GET" && req.url === "/styles.css") {
    res.setHeader("Content-Type", "text/css");

    const file = await fs.open(
      path.join(__dirname, "../client/styles.css"),
      "r"
    );
    const fileStream = file.createReadStream();

    fileStream.pipe(res);

    fileStream.on("end", () => {
      res.end();
    });
  }

  if (req.method === "GET" && req.url === "/") {
    res.setHeader("Content-Type", "text/html");

    const file = await fs.open(
      path.join(__dirname, "../client/index.html"),
      "r"
    );
    const fileStream = file.createReadStream();
    fileStream.pipe(res);

    fileStream.on("end", () => {
      res.end();
    });
  }
});

server.listen(PORT, () => {
  console.log("Lister server on ", server.address());
});
