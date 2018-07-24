# directorate
Business in a Box Modeling, A Company Object Model that helps you define business requirements prior to implementation.

Like prd/brd it is a pre/requisite mapping language used for mapping companies/applications prior to funding phase.


```JavaScript

const Directorate = require('directorate');

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


```

Result

```XML
<root>
 <lobby>
  <front-desk>
   <bell>
   </bell>
   <billing>
    <members>
     <alice signup="Tue Jul 24 2018 11:12:49 GMT-0400 (Eastern Daylight Time)" black-card="true">
     </alice>
     <bob signup="Tue Jul 24 2018 11:12:49 GMT-0400 (Eastern Daylight Time)" black-card="true">
     </bob>
    </members>
   </billing>
  </front-desk>
 </lobby>
</root>
```

```XML

<root>
 <leopard>
  <application>
   <menu>
    <menu-category label="File">
    </menu-category>
    <menu-category label="Filters">
     <menu-item id="blur" label="Blur">
     </menu-item>
    </menu-category>
   </menu>
  </application>
 </leopard>
</root>

```

## Sister Projects (Candidate)

### Basics
Directorate Serializer (for tree serialization)

### Modeling
Directorate Query (for simplifying node building)

### Manipulation
Directorate Hydration (for reading serialized trees (transformation purposes, etc.))
Directorate Transformations (for extracting project requirements)
