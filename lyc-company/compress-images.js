import imagemin from "imagemin";
import mozjpeg from "imagemin-mozjpeg";
import pngquant from "imagemin-pngquant";
import gifsicle from "imagemin-gifsicle";
import svgo from "imagemin-svgo";
import path from "path";
import { promises as fs } from "fs";

const ASSETS_FOLDER = path.resolve("./src/assets"); // 根据你的目录调整

async function compressImages() {
  const extensions = ["png", "jpg", "jpeg", "gif", "svg"];

  async function getFiles(dir) {
    let files = [];
    const entries = await fs.readdir(dir, { withFileTypes: true });
    for (const entry of entries) {
      const fullPath = path.join(dir, entry.name);
      if (entry.isDirectory()) {
        files = files.concat(await getFiles(fullPath));
      } else {
        if (extensions.includes(entry.name.split(".").pop().toLowerCase())) {
          files.push(fullPath);
        }
      }
    }
    return files;
  }

  const files = await getFiles(ASSETS_FOLDER);
  console.log(`找到 ${files.length} 张图片，开始压缩...`);

  for (const file of files) {
    try {
      const buffer = await imagemin([file], {
        plugins: [
          mozjpeg({ quality: 75 }),
          pngquant({ quality: [0.6, 0.8] }),
          gifsicle({ optimizationLevel: 2 }),
          svgo(),
        ],
      });

      if (buffer.length > 0) {
        await fs.writeFile(file, buffer[0].data);
        console.log(`压缩完成: ${file}`);
      }
    } catch (err) {
      console.error(`压缩失败: ${file}`, err);
    }
  }

  console.log("所有图片压缩完成！");
}

// compressImages();

import webp from "imagemin-webp";



async function generateWebp() {
  const extensions = ["jpg", "jpeg", "png"];
  
  async function getFiles(dir) {
    let files = [];
    const entries = await fs.readdir(dir, { withFileTypes: true });
    for (const entry of entries) {
      const fullPath = path.join(dir, entry.name);
      if (entry.isDirectory()) {
        files = files.concat(await getFiles(fullPath));
      } else {
        if (extensions.includes(entry.name.split(".").pop().toLowerCase())) {
          files.push(fullPath);
        }
      }
    }
    return files;
  }

  const files = await getFiles(ASSETS_FOLDER);

  for (const file of files) {
    try {
      const buffer = await imagemin([file], {
        plugins: [
          webp({ quality: 75 })
        ],
      });

      if (buffer.length > 0) {
        const webpPath = file.replace(/\.(jpg|jpeg|png)$/i, ".webp");
        await fs.writeFile(webpPath, buffer[0].data);
        console.log(`生成 WebP 图片: ${webpPath}`);
      }
    } catch (error) {
      console.error(`生成 WebP 失败: ${file}`, error);
    }
  }
  console.log("所有 WebP 图片生成完毕！");
}

generateWebp();
