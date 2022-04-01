import fs from 'fs';

// get application settings and secrets from config.json file
export const config = JSON.parse(fs.readFileSync('./config.json', 'utf8'));
