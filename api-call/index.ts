import axios from 'axios';

interface Post {
    userId: number,
    title: string,
    body: string
}

const apiUrl = "https://jsonplaceholder.typicode.com/posts";
axios.get(apiUrl).then(res => {
    const posts: Post[] = res.data;
    posts.forEach(post => {
        PrintFunction(post);
    });
});

const PrintFunction = (post: Post) => {
    console.log(`
        User Id: ${post.userId}
        Title: ${post.title}
        Body: ${post.body}
    `);
}