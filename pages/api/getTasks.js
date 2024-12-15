import fs from 'fs';
import path from 'path';

export default function handler(req, res) {
  const filePath = path.join(process.cwd(), 'assets', 'tasks.json');
  const fileData = fs.existsSync(filePath) ? fs.readFileSync(filePath) : '[]';
  const tasks = JSON.parse(fileData);
  res.status(200).json(tasks);
}
