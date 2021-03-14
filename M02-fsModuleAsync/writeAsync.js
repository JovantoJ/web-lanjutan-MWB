const fs = require('fs');

fs.writeFile('web.txt', 'Web Lanjutan', (err) => {
  if (err) {
    return console.error(err);
  }

  console.log('Berhasil menuliskan "Web Lanjutan" ke dalam "web.txt" ');
});