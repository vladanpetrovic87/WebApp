const endPoint = "https://jsonplaceholder.typicode.com/posts";

export const getBlogs = () => {
  return fetch(endPoint)
    .then((result) => result.json())
    .then((data) => {
      return data;
    });
};
