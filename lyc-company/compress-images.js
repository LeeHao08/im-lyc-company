import imagemin from "imagemin";
import mozjpeg from "imagemin-mozjpeg";
import pngquant from "imagemin-pngquant";
import gifsicle from "imagemin-gifsicle";
import svgo from "imagemin-svgo";
import webp from "imagemin-webp";

import path from "path";
import { promises as fs } from "fs";
import sharp from "sharp";

const ASSETS_FOLDER = path.resolve("./src/assets"); // 图片源文件夹
const OUTPUT_FOLDER = path.resolve("./src/assets"); // 生成图片目标文件夹

// 定义要处理的图片格式
const IMAGE_EXTENSIONS = ["png", "jpg", "jpeg", "gif", "svg"];

// 定义你想生成的响应式尺寸（宽度）
const SIZES = [232, 464, 696, 928];

// 获取指定目录所有图片文件（递归）
async function getFiles(dir, exts) {
  let files = [];
  const entries = await fs.readdir(dir, { withFileTypes: true });
  for (const entry of entries) {
    const fullPath = path.join(dir, entry.name);
    if (entry.isDirectory()) {
      files = files.concat(await getFiles(fullPath, exts));
    } else {
      const ext = entry.name.split(".").pop().toLowerCase();
      if (exts.includes(ext)) {
        files.push(fullPath);
      }
    }
  }
  return files;
}

// 压缩图片（原始尺寸）
async function compressOriginal(filePath, outputPath) {
  const ext = path.extname(filePath).toLowerCase();
  const plugins = [];

  if ([".jpg", ".jpeg"].includes(ext)) {
    plugins.push(mozjpeg({ quality: 75 }));
  } else if (ext === ".png") {
    plugins.push(pngquant({ quality: [0.6, 0.8] }));
  } else if (ext === ".gif") {
    plugins.push(gifsicle({ optimizationLevel: 2 }));
  } else if (ext === ".svg") {
    plugins.push(svgo());
  } else {
    // 其他格式不处理压缩
  }

  if (plugins.length === 0) {
    // 直接复制文件
    await fs.copyFile(filePath, outputPath);
    return;
  }

  const buffer = await imagemin([filePath], { plugins });

  if (buffer.length > 0) {
    await fs.writeFile(outputPath, buffer[0].data);
  } else {
    await fs.copyFile(filePath, outputPath);
  }
}

// 生成指定尺寸图片及webp格式
async function generateResponsiveImages(filePath, outputDir) {
  const ext = path.extname(filePath).toLowerCase();
  if (![".jpg", ".jpeg", ".png"].includes(ext)) {
    // 目前只对jpg/jpeg/png处理尺寸缩放和webp
    return;
  }

  const fileName = path.basename(filePath, ext);

  const img = sharp(filePath);

  const metadata = await img.metadata();

  for (const width of SIZES) {
    if (width > metadata.width) continue; // 不放大图片

    const resizedFileName = `${fileName}-${width}w${ext}`;
    const resizedFilePath = path.join(outputDir, resizedFileName);

    await img.resize(width).toFile(resizedFilePath);
    console.log(`生成缩略图: ${resizedFilePath}`);

    // 生成对应 webp 格式
    const webpFileName = `${fileName}-${width}w.webp`;
    const webpFilePath = path.join(outputDir, webpFileName);
    await img.resize(width).webp({ quality: 75 }).toFile(webpFilePath);
    console.log(`生成WebP: ${webpFilePath}`);
  }
}

async function main() {
  console.log("开始处理图片...");

  // 1. 确保输出目录存在
  await fs.mkdir(OUTPUT_FOLDER, { recursive: true });

  // 2. 获取所有图片文件
  const files = await getFiles(ASSETS_FOLDER, IMAGE_EXTENSIONS);
  console.log(`找到图片: ${files.length} 张`);

  for (const file of files) {
    // 根据源路径，生成目标路径
    const relativePath = path.relative(ASSETS_FOLDER, file);
    const outputFilePath = path.join(OUTPUT_FOLDER, relativePath);
    
    // 确保文件夹存在
    await fs.mkdir(path.dirname(outputFilePath), { recursive: true });

    // 3. 压缩原始图片
    await compressOriginal(file, outputFilePath);
    console.log(`压缩完成: ${relativePath}`);

    // 4. 生成响应式多尺寸图片及 WebP
    await generateResponsiveImages(outputFilePath, path.dirname(outputFilePath));
  }

  console.log("所有图片处理完成！");
}

main().catch(console.error);
