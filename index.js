#!/usr/bin/env node
const fs = require('fs');
const path = require('path');

const filePath = '.github/workflow/deploy.yaml'

const sourceFilePath = path.resolve(__dirname, filePath);
const targetFilePath = path.resolve(process.cwd(), filePath); // 使用 process.cwd() 获取当前工作目录

// 判断目标文件是否存在
const isExistDeployYaml = fs.existsSync(targetFilePath);
if (isExistDeployYaml) {
  console.log('deploy.yaml already exists in your project.');
  process.exit(1);
}

// 读取源文件内容
const fileContent = fs.readFileSync(sourceFilePath, 'utf8');

// 写入目标文件
if (!fs.existsSync(path.dirname(targetFilePath))) {
  fs.mkdirSync(path.dirname(targetFilePath), { recursive: true });
}
fs.writeFileSync(targetFilePath, fileContent, 'utf8');

console.log(`File ${filePath} has been copied to your project.`);

