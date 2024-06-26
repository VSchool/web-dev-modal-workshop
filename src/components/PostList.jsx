import { useState } from "react";
import Post from "./Post";

function PostList() {

    const [posts, setPosts] = useState([
        {
            id: 1,
            title: "The Benefits of Learning JavaScript",
            description: "JavaScript is a versatile language that allows developers to create dynamic and interactive web applications. This post explores the various benefits of learning JavaScript and how it can enhance your web development skills."
        },
        {
            id: 2,
            title: "Understanding CSS Flexbox",
            description: "Flexbox is a powerful layout module in CSS that helps create flexible and responsive layouts. In this post, we dive into the basics of Flexbox and how you can use it to build modern web designs."
        },
        {
            id: 3,
            title: "A Guide to RESTful APIs",
            description: "RESTful APIs are a standard way of enabling communication between different systems over the web. This guide covers the principles of REST, how to design RESTful APIs, and best practices for implementation."
        },
        {
            id: 4,
            title: "Introduction to React",
            description: "React is a popular JavaScript library for building user interfaces. This post provides an introduction to React, covering its core concepts, the component-based architecture, and how to get started with creating React applications."
        },
        {
            id: 5,
            title: "Mastering Git and GitHub",
            description: "Version control is crucial for managing code changes, and Git is the most widely used version control system. In this post, we discuss the basics of Git, how to use GitHub for collaboration, and advanced Git techniques for efficient workflow management."
        }
    ])


    const handleEdit = (id, update) => setPosts(prevPosts => prevPosts.map(post => post.id === id ? update : post))

    const postElements = posts.map(post => <Post key={post.id} {...post} handleEdit={handleEdit} />)

    return (
        <div className="post--list">
            {postElements}
        </div>
    );
}

export default PostList;