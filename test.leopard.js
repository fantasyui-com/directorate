const Directorate = require('.');

const directorate = new Directorate();

// alice.setAttribute('signup', new Date())
// alice.setAttribute('black-card', true)
// bob.setAttribute('signup', new Date())
// bob.setAttribute('black-card', true)



const leopard = directorate.createElement('leopard');
directorate.root.appendChild(leopard);

const application = directorate.createElement('application');
leopard.appendChild(application);

const menu = directorate.createElement('menu');
application.appendChild(menu);

const fileMenu = directorate.createElement('menu-category');
fileMenu.setAttribute('label', 'File')
const filtersMenu = directorate.createElement('menu-category');
filtersMenu.setAttribute('label', 'Filters')
menu.appendChild(fileMenu);
menu.appendChild(filtersMenu);

const blurFilter = directorate.createElement('menu-item');
blurFilter.setAttribute('id', 'blur');
blurFilter.setAttribute('label', 'Blur');

filtersMenu.appendChild(blurFilter);

console.log(directorate.serialize());
