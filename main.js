// eslint-disable no-console
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

getData().catch((err) => console.error(err));

async function getData() {
  const postStream = await fetch('https://jsonplaceholder.typicode.com/posts');
  const posts = await postStream.json();
  let i = 0;

  // throw 'Get Data Error';
  // console.log(posts);

  posts.forEach((post) => {
    i += 1;
    if (i < 10) {
      const { title } = post;
      const { body } = post;

      fetch('https://unsplash.it/300/200')
        .then((res) => res.blob())
        .then((blob) => {
          const newPost = document.importNode(postTemplate.content, true);
          const postTitle = newPost.querySelector('.post__title');
          const postBody = newPost.querySelector('.post__body');
          const postImg = newPost.querySelector('.post__img');

          // throw 'Image Fetch Error';

          postImg.src = URL.createObjectURL(blob);
          postTitle.innerText = title;
          postBody.innerText = body;
          postSection.appendChild(newPost);
        })
        .catch((err) => console.error(err));
    }
  });
}
