function newImage (src, leftPosition, bottomPosition) {
    let image = document.createElement('img');
    image.src = src;
    image.style.position = 'fixed';
    image.style.left = leftPosition;
    image.style.bottom = bottomPosition;
    document.body.append(image);
}

newImage('assets/green-character.gif', '100px', '100px');
newImage('assets/pine-tree.png', '450px', '200px');
newImage('assets/tree.png', '200px', '300px');
newImage('assets/pillar.png', '350px', '100px');
newImage('assets/crate.png', '150px', '200px');
newImage('assets/well.png', '500px', '425px');



function newItem (src, leftPosition, bottomPosition) {
    let item = document.createElement('img');
    item.src = src;
    item.style.position = 'fixed';
    item.style.left = leftPosition;
    item.style.bottom = bottomPosition;
    document.body.append(item);
    return item;
}

newItem('assets/sword.png', '500px', '405px');
newItem('assets/shield.png', '165px', '185px');
newItem('assets/staff.png', '600px', '100px');

sword.addEventListener('dblclick', function(event){
    sword.remove()
}) 