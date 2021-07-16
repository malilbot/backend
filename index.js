const fastify = require("fastify");
const app = fastify();
const pet = require("pet-pet-gif");
const asciify = require("asciify-image");
const options = {
  fit: "box",
  width: 64,
  height: 64,
  color: false,
};

app.get("/", (req, res) => {
  res.send("hi");
});

app.get("/pet/:url", async function (req, res) {
  const url = await pet(await req.query.url).then((b) => b.toString("base64"));
  await res.send(url);
});

app.get("/asciify/:url", function (req, res) {
  return asciify(req.query.url, options, (e, a) => {
    return res.send(a);
  });
});

app.listen(1234, "0.0.0.0");
