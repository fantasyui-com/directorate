const Directorate = require('.');

const directorate = new Directorate();

const lobby = directorate.createElement('lobby');
const frontDesk = directorate.createElement('front-desk');
const bell = directorate.createElement('bell');
const billing = directorate.createElement('billing');
const members = directorate.createElement('members');

const alice = directorate.createElement('alice');
const bob = directorate.createElement('bob');

alice.setAttribute('signup', new Date())
alice.setAttribute('black-card', true)
bob.setAttribute('signup', new Date())
bob.setAttribute('black-card', true)

directorate.root.appendChild(lobby);
lobby.appendChild(frontDesk);
frontDesk.appendChild(bell);
frontDesk.appendChild(billing);
billing.appendChild(members);
members.appendChild(alice);
members.appendChild(bob);

console.log(directorate.serialize());
