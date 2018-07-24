
class Element {

  constructor(tagName){

    this.tagName = tagName
     .replace(/([A-Z])/g, '-$1') // kebab case
     .toLowerCase() // normalize
     .replace(/\b./g, function(str){ return str.toUpperCase(); }) // capitalize at boundary
     .replace(/[^A-Za-z]/g,'') // strip non alpha
    this.childNodes = new Array();
    this.attributes = new Map();

  }

  prependChild(element){

    this.childNodes.unshift(element); // local reference, including order

  }
  appendChild(element){

    this.childNodes.push(element); // local reference, including order

  }

  setAttribute(name, value){

    if(name === 'id') this.document.childrenById.set(value, this);
    return this.attributes.set(name, value);

  }

  getAttribute(name, value){

    return this.attributes.get(name);

  }

}

class Document {

  constructor(){
    this.childrenById = new Map();
    this.children = new Set();

    this.root = this.createElement('root');
  }

  createElement(tagName){
    const element = new Element(tagName);
    element.document = this;
    this.children.add(element); // central Set
    return element;
  }

  getElementsByTagName(){

  }

  serialize(){
    const log = [];
    const walk = function(node, visitor, depth = []){
      node.childNodes.forEach(function(node){
        log.push(`${depth.join("")} <${node.tagName}${node.attributes.size?' ':''}${[...node.attributes].map(i=>`${i[0]}="${i[1]}"`).join(" ")}${node.childNodes.length?'':'/'}>`);
        if(node.childNodes.length){
          depth.push(" ");
            walk(node, visitor, depth);
          depth.shift();
        log.push(`${depth.join("")} </${node.tagName}>`);
        }
      })
    }



    log.push("<Root>")
    walk(this.root);
    log.push("</Root>")
    return log.join('\n');

  }

}



module.exports = {Directorate:Document};
