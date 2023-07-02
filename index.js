function newImage (src, leftPosition, bottomPosition) {
    let object = document.createElement('img');
    object.src = src;
    object.style.position = 'fixed';
    object.style.left = leftPosition;
    object.style.bottom = bottomPosition;
    document.body.append(object);
    return object;
}

newImage('assets/green-character.gif', '100px', '100px');
newImage('assets/pine-tree.png', '450px', '200px');
newImage('assets/tree.png', '200px', '300px');
newImage('assets/pillar.png', '350px', '100px');
newImage('assets/crate.png', '150px', '200px');
newImage('assets/well.png', '500px', '425px');



function newItem (src, leftPosition, bottomPosition) {
    let object=newImage(src, leftPosition, bottomPosition)
    object.addEventListener("click", () => {
        object.remove()

    }) 
    
}

newItem('assets/sword.png', '500px', '405px');
newItem('assets/shield.png', '165px', '185px');
newItem('assets/staff.png', '600px', '100px');
