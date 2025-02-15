const express = require("express");
const path = require("path");
const multer = require("multer");
const { pdfMerger } = require("./merger"); //PDF merger engine

const app = express();
app.use("/static", express.static("public"));
const port = 1000;

const upload = multer({ dest: "uploads/" });

app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "template/index.html"));
});

app.post("/merge", upload.array("pdfs", 2), async (req, res, next) => {
  console.log(req.files);
  await pdfMerger(
    path.join(__dirname, req.files[0].path),
    path.join(__dirname, req.files[1].path)
  );
  res.redirect("http://localhost:1000/static/merged.pdf");

  // res.send({ data: req.files });
  // req.files is array of `photos` files
  // req.body will contain the text fields, if there were any
});

app.listen(port, () => {
  console.log(`Example app listening on port http://localhost${port}`);
});
