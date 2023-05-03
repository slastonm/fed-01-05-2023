let productInfo = prompt('Product Information');

switch (productInfo){
    case 'bread':
        console.log('bread cost 1$');
        break;
    case 'eggs':
        console.log('Eggs cost 2$');
        break;
    case 'orange':
        console.log('Orange cost 3$');
        break;
    default:
        console.log(`Sorry we have just milk, eggs and orange. Yo want ${productInfo}`);
}

switch (productInfo){
    case 'milk':
    case 'beef':
        console.log('beef or milk cost 2$');
        break;
    case 'orange':
    case 'cake':
        console.log('Orange and cake cost 3$');
        break;
    default:
        console.log(`Sorry 2 we have just milk, eggs and orange. Yo want ${productInfo}`);
}