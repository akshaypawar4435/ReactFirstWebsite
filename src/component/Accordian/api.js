 const questions = [
    {
        id : 1,
        question : "What is JSX?",
        answer : "JSX is a syntax extension of JavaScript. It is used with React to describe what the user interface should look like. By using JSX, we can write HTML structures in the same file that contains JavaScript code."
    },
    {
        id : 2,
        question : "Can web browsers read JSX directly?",
        answer : "Web browsers cannot read JSX directly. This is because they are built to only read regular JS objects and JSX is not a regular JavaScript object. For a web browser to read a JSX file, the file needs to be transformed into a regular JavaScript object. For this, we use Babel"
    },
    {
        id : 3,
        question : "What is the virtual DOM?",
        answer : "DOM stands for Document Object Model. The DOM represents an HTML document with a logical tree structure. Each branch of the tree ends in a node, and each node contains objects."
    },
    {
        id : 4,
        question : "How do you create a React app?",
        answer : "Install NodeJS on the computer because we need npm to install the React library. Npm is the node package manager that contains many JavaScript libraries, including React."
    },
    {
        id : 5,
        question : "What is an event in React?",
        answer : "React events are named using camelCase, rather than lowercase in HTML. With JSX, you pass a function as the event handler, rather than a string in HTML."
    },
    {
        id : 6,
        question : "What are synthetic events in React?",
        answer : "Synthetic events combine the response of different browser's native events into one API, ensuring that the events are consistent across different browsers."
    },
    {
        id : 7,
        question : "Explain how lists work in React.",
        answer : "We create lists in React as we do in regular JavaScript. Lists display data in an ordered forma"
    }
];

export default questions;