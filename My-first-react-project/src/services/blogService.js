const endPoint = "https://jsonplaceholder.typicode.com/posts";

export const getBlogs = () => {
  return fetch(endPoint)
    .then((result) => result.json())
    .then((blogs) => {
      return blogs.map(blog => {
        console.log(blog);
        return {
          title: blog.title,
          body: blog.body,
          id: blog.id,
        }
      });
    });
};
