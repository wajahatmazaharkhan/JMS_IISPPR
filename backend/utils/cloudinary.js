import stream from "stream";
import cloudinary from "../config/cloudinaryConfig.js";

export const uploadTocloudinary = (fileBuffer) => {
  console.log(process.env.CLOUDINARY_CLOUD_NAME);
  console.log(process.env.CLOUDINARY_API_KEY);
  console.log(process.env.CLOUDINARY_API_SECRET);
  return new Promise((resolve, reject) => {
    const cloudStream = cloudinary.uploader.upload_stream(
      { folder: "uploads" , resource_type:"auto"},
      (error, result) => {
        if (error) return reject(error);
        resolve(result);
      },
    );
    const readableStream = new stream.Readable({
      read() {
        this.push(fileBuffer);
        this.push(null);
      },
    });
    readableStream.pipe(cloudStream);
  });
};
