import fs from 'fs';
import path from 'path';

export default async function handler(req, res) {
  if (req.method === 'POST') {
    try {
      // Define the path to your data file
      const filePath = path.join(process.cwd(), 'assets', 'tasks.json');
      const tasks = JSON.parse(fs.readFileSync(filePath, 'utf8'));

      // Append new task
      tasks.push(req.body);

      // Save updated tasks back to file
      fs.writeFileSync(filePath, JSON.stringify(tasks, null, 2), 'utf8');

      res.status(200).json({ message: 'Task saved successfully' });
    } catch (error) {
      console.error('Error saving task:', error);
      res.status(500).json({ error: 'Internal Server Error' });
    }
  } else {
    res.setHeader('Allow', ['POST']);
    res.status(405).end(`Method ${req.method} Not Allowed`);
  }
}
