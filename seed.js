// window.Seed = (function () {
// const submissions= [
//     {
//         id:1,
//         title:'This is the first Title',
//         description:'This is the description of the first submission.',
//         votes:16,
//         image:'assets/img/beach.jpg' 
//     },
// ]
// });


window.Seed = (function () {
    const submissions = [
      {
        id:1,
        title:'This is the first Title',
        description:'This is the description of the first submission.',
        votes:16,
        image:'assets/img/beach.jpg' 
      },
      {
        id:2,
        title:'This is the second Title.',
        description:'This is the second description',
        votes:17,
        image:'assets/img/beach.jpg' 
      },
      {
        id:3,
        title:'This is the third Title.',
        description:'This is the third description',
        votes:18,
        image:'assets/img/beach.jpg' 
      }
    ];
  
    return { submissions: submissions };
  }());
  