const Directorate = require('.');

const directorate = new Directorate();

// alice.setAttribute('signup', new Date())
// alice.setAttribute('black-card', true)
// bob.setAttribute('signup', new Date())
// bob.setAttribute('black-card', true)



const leopard = directorate.createElement('Leopard');
directorate.root.appendChild(leopard);

const application = directorate.createElement('Application');
leopard.appendChild(application);

const menu = directorate.createElement('Menu');
application.appendChild(menu);

const fileMenu = directorate.createElement('MenuCategory');
fileMenu.setAttribute('label', 'File')
const filtersMenu = directorate.createElement('MenuCategory');
filtersMenu.setAttribute('label', 'Filters')
menu.appendChild(fileMenu);
menu.appendChild(filtersMenu);

const blurFilter = directorate.createElement('MenuItem');
blurFilter.setAttribute('id', 'blur');
blurFilter.setAttribute('label', 'Blur');

filtersMenu.appendChild(blurFilter);

console.log(directorate.serialize());
