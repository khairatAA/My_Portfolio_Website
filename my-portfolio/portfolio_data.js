// This file contains data used for the portfolio section of the website
import simple_shell from "./src/assets/simple_shell.svg";
import portfolio_image from "./src/assets/portfolio_image.svg";
import monty from "./src/assets/monty.svg";
import fast_travel from "./src/assets/fast_travel.svg";


const data = [
    {
        Id: 4,
        name: "Simple Shell",
        img: `${simple_shell}`,
        stack: "Stack: C programming",
        content: "Using concepts like linked lists, bit manipulation, file I/O, and data structures, developed a shell interface, mirroring the functionalities of established shells such as bash or sh."
    },
    {
        Id: 3,
        name: "Portfolio Website",
        img: `${portfolio_image}`,
        stack: "Stack: React JS || Vanilla JS || Bootstrap",
        content: "My portfolio project was developed with essential React JS libraries like Email.js and Slider JS. I employed various tools such as Vanilla JavaScript and Bootstrap to enhance and showcase the functionalities of my portfolio website."
    },
    {
        Id: 2,
        name: "Monty Bytecode Interpreter",
        img: `${monty}`,
        stack: "Stack: C programming",
        content: "Utilized the concept of stacks (LIFO) and queues (FIFO) in C programming language, built a Monty interpreter that reads and executes Monty bytecode files. "
    },
    {
        Id: 1,
        name: "Fast Travel",
        img: `${fast_travel}`,
        stack: "Stack: HTML || CSS || JS",
        content: "Fast Travel is a website that caters to users' travel needs and enhancing their experience through comprehensive travel services such access to fexible plan section and access to tour guides."
    }
]

export default data
