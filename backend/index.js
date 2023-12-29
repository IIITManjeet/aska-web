import express from "express";
import cloudinary from "cloudinary";
import cors from "cors";
import multer from "multer";

const app = express();
app.use(express.urlencoded({ extended: false }));
app.use(cors());

const upload = multer({ dest: "uploads/" });

app.post(
  "/upload",
  upload.fields([
    { name: "image", maxCount: 1 },
    { name: "aadhar", maxCount: 1 },
    { name: "tenth", maxCount: 1 },
    { name: "birth", maxCount: 1 },
  ]),
  async (req, res) => {
    // req.files contains the uploaded files
    try {
      const imageFile = req?.files["image"][0] || "";
      const aadharFile = req?.files["aadhar"][0] || "";
      const tenthFile = req?.files["tenth"][0] || "";
      const birthFile = req?.files["birth"][0] || "";
      // Upload files to Cloudinary
      let imageResult, tenthResult, aadharResult, birthResult;
      if (imageFile !== "") {
        imageResult = await cloudinary.v2.uploader.upload(imageFile.path);
      }
      if (aadharFile !== "") {
        aadharResult = await cloudinary.v2.uploader.upload(aadharFile.path);
      }
      if (imageFile !== "") {
        tenthResult = await cloudinary.v2.uploader.upload(tenthFile.path);
      }
      if (imageFile !== "") {
        birthResult = await cloudinary.v2.uploader.upload(birthFile.path);
      }
      const imageURL = imageResult?.secure_url || "";
      const aadharURL = aadharResult?.secure_url || "";
      const tenthURL = tenthResult?.secure_url || "";
      const birthURL = birthResult?.secure_url || "";
      res.json({
        imageURL,
        aadharURL,
        tenthURL,
        birthURL,
      });
    } catch (error) {
      console.error(error);
      res.status(500).json({ error: "Failed to upload files" });
    }
  }
);

cloudinary.v2.config({
  cloud_name: "dud3qipec",
  api_key: "715248886843945",
  api_secret: "yp6nA1DoP08Qc8vYGe-EfxcceXs",
  secure: true,
});

app.listen(4000, () => {
  console.log("Server started on port 4000");
});
