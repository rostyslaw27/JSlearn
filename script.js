console.log(document.body);
console.log(document.documentElement);
console.log(document.body.childNodes);
console.log(document.body.firstChild);
console.log(document.body.lastChild);

console.log(document.querySelector('#current').parentNode.parentNode);

for (let node of document.body.clildNodes) {

    if (node.nodeName == '#text') {
        continue;
    }
    console.log(node);
}