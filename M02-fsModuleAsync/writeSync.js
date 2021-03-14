const fs = require('fs');

try {
  fs.writeFile('web.txt', 'Web Lanjutan');

  console.log('Berhasil menuliskan "Web Lanjutan" ke dalam "web.txt" ');
} catch (err) {
  console.error(err);
}