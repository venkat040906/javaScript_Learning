const post = {
    id: 1,
    titile: 'Post one',
    body: 'this is the body',
};

//convert to json string
const str = JSON.stringify(post);

console.log(str.id);//undefined out put as first we need ot parse it in json to object 
console.log(JSON.parse(str).id);//this will give us the output

//Parse Json

const obj = JSON.parse(str);

const posts = [
    {
        id: 2,
        titile: 'Post two',
        body: 'this is the body',
    },
    {
        id: 1,
        titile: 'Post two',
        body: 'this is the body',
    }
]
    
const str2 = JSON.stringify(posts);


console.log(str2);