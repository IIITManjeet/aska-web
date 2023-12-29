import express from "express";
import cloudinary from "cloudinary";
import cors from "cors";
import multer from "multer";

const app = express();
app.use(express.urlencoded({ extended: false }));
app.use(cors());

const upload = multer({ dest: "uploads/" });

app.post("/upload", upload.any(), async (req, res) => {
  try {
    // req.files contains the uploaded files
    const imageFile =
      req.files.find((file) => file.fieldname === "image") || null;
    const aadharFile =
      req.files.find((file) => file.fieldname === "aadhar") || null;
    const tenthFile =
      req.files.find((file) => file.fieldname === "tenth") || null;
    const birthFile =
      req.files.find((file) => file.fieldname === "birth") || null;

    // Upload files to Cloudinary
    let imageResult, tenthResult, aadharResult, birthResult;
    if (imageFile) {
      imageResult = await cloudinary.v2.uploader.upload(imageFile.path);
    }
    if (aadharFile) {
      aadharResult = await cloudinary.v2.uploader.upload(aadharFile.path);
    }
    if (tenthFile) {
      tenthResult = await cloudinary.v2.uploader.upload(tenthFile.path);
    }
    if (birthFile) {
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
});

cloudinary.v2.config({
  cloud_name: "dud3qipec",
  api_key: "715248886843945",
  api_secret: "yp6nA1DoP08Qc8vYGe-EfxcceXs",
  secure: true,
});

app.listen(4000, () => {
  console.log("Server started on port 4000");
});
