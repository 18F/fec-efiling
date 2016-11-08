fs = require('fs')

master = fs.readFileSync('templates/master.tmpl.html', 'utf-8')

fs.writeFileSync('index.html', master)
console.log('written: index.html')
