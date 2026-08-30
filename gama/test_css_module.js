const fs = require('fs');
const css = fs.readFileSync('/home/mijash/Downloads/GamaPOkahra/gama/app/components/Header/Header.module.css', 'utf8');
console.log(css.includes('.mobileOpen'));
