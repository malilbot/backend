const fs = require('fs');
const path = require('path');
const files = fs.readdirSync(path.join(__dirname, './images'));
const filess = [];
const fileMap = {};
for (const file of files) {
	const filePath = `https://raw.githubusercontent.com/malilbot/backend/main/images/${file}`;
	const name = file.replace('.png', '');
	filess.push(filePath);
	fileMap[name] = filePath;
}
fs.writeFileSync('filemap.json', JSON.stringify(fileMap));
fs.writeFileSync('files.json', JSON.stringify(filess));
