// fetch('demo.json')
//   .then((res) => {
//     console.log(res);
//     return res.json();
//   })
//   .then((json) => console.log(json));

// fetch('http://unsplash.it/600/400')
//   .then((res) => res.blob())
//   .then((blob) => {
//     let img = document.createElement('img');
//     img.src = URL.createObjectURL(blob);
//     document.querySelector('body').appendChild(img);
//   });

const postSection = document.querySelector('#posts');
const postTemplate = document.querySelector('#post-template');

getData();

async function getData() {
  const postStream = await fetch('https://jsonplaceholder.typicode.com/posts');
  const posts = await postStream.json();
  let i = 0;

  // console.log(posts);

  posts.forEach((post) => {
    i += 1;
    if (i < 10) {
      const { title } = post;
      const { body } = post;

      const newPost = document.importNode(postTemplate.content, true);
      const postTitle = newPost.querySelector('.post__title');
      const postBody = newPost.querySelector('.post__body');

      postTitle.innerText = title;
      postBody.innerText = body;
      postSection.appendChild(newPost);
    }
  });
}
