//step 1
const library = [
    {
    title: 'comic',
    author: 'charilcaplin',
    status: {
        own: true,
        reading: false,
        read: false,
      }
    },
{
    title: 'scince',
    author: 'newton',
    status: {
        own: true,
        reading: false,
        read: false,
    }
    },
    {
        title: 'friction',
        author: 'rohitshetty',
        status: {
            own: true,
            reading: false,
            read: false,
        }
    }
];

console.log(library);
//step 2 set status read property value to true 
library[0].status.read = true;
library[1].status.read = true;
library[2].status.read = true;



console.log(library);
//step 3 destrucure
const { title:firstBook} = library[0];

console.log(firstBook);

//step 4 turn the library object into a json string
const libraryJson = JSON.stringify(library);

console.log(libraryJson);




