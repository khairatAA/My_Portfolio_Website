/* eslint-disable no-unused-vars */
// This file contains data used for the portfolio section of the website
import simple_shell from "../../assets/simple_shell.svg";
import portfolio_image from "../../assets/portfolio_image.svg";
import monty from "../../assets/monty.svg";
import fast_travel from "../../assets/fast_travel.png";
import api from '../../assets/api.png'
import clearLink from '../../assets/clearLink.png'
import Naytif from '../../assets/Naytif.png'



const data = [
    {
        name: "Naytif",
        description:
            "A dynamic food delivery platform tailored for Nigerian users, facilitating seamless ordering from local restaurants. Empowered restaurant owners with menu management tools and integrated a rider section.",
        tags: [
            {
                name: "ReactJs",
                color: "blue",
            },
            {
                name: "Tailwind",
                color: "gold",
            },
            {
                name: "Python",
                color: "blue",
            },
        ],
        image: Naytif,
        source_code_link: "https://github.com/khairatAA/Naytif",
        live_link: "https://naytif.vercel.app/"
    },
    {
        name: "ClearLink",
        description:
            "Crafted a static webpage for ClearLink, a video conferencing application, leveraging React JS for the frontend. Harnessing the power of ReactJS, known for its code reusability and redundancy prevention.",
        tags: [
            {
                name: "React Js",
                color: "blue",
            },
            {
                name: "Tailwind",
                color: "gold",
            },
        ],
        image: clearLink,
        source_code_link: "https://github.com/khairatAA/ClearLink",
        live_link: "https://clear-link-nu.vercel.app/"
    },
    {
        name: "MongoDB Image API",
        description:
            "API to seamlessly upload, retrieve, and delete images stored in a MongoDB database. Supporting various image formats including JPG, PNG, and GIF, all stored in base64 format.",
        tags: [
            {
                name: "MongoDB",
                color: "green",
            },
            {
                name: "TypeScript",
                color: "blue",
            },
            {
                name: "Node JS",
                color: "black",
            },
        ],
        image: api,
        source_code_link: "https://github.com/khairatAA/mongo-image-api",
        live_link: "https://mongo-image-api.onrender.com/"
    },
    {
        name: "Simple Shell",
        description:
            "Using concepts like linked lists, bit manipulation, file I/O, and data structures, developed a shell interface, mirroring the functionalities of established shells such as bash or sh.",
        tags: [
            {
                name: "C",
                color: "blue",
            },
            {
                name: "DSA",
                color: "purple",
            },
            {
                name: "Linux",
                color: "Brown",
            },
        ],
        image: simple_shell,
        source_code_link: "https://github.com/khairatAA/simple_shell",
        live_link: "https://github.com/khairatAA/simple_shell/blob/main/README.md"
    },
    {
        name: "Fast Travel",
        description:
            "Fast Travel is a website that caters to users' travel needs and enhancing their experience through comprehensive travel services such access to fexible plan section and access to tour guides.",
        tags: [
            {
                name: "HTML",
                color: "blue",
            },
            {
                name: "CSS",
                color: "brown",
            },
            {
                name: "JavaScript",
                color: "yellow",
            },
        ],
        image: fast_travel,
        source_code_link: "https://github.com/khairatAA/Fast_travel",
        live_link: "https://creative-horse-e0511c.netlify.app/"
    },
    {
        name: "Monty Bytecode Interpreter",
        description:
            "Utilized the concept of stacks (LIFO) and queues (FIFO) in C programming language, built a Monty interpreter that reads and executes Monty bytecode files.",
        tags: [
            {
                name: "C",
                color: "blue",
            },
            {
                name: "DSA",
                color: "red",
            },
            {
                name: "Bytecode",
                color: "pink",
            },
        ],
        image: monty,
        source_code_link: "https://github.com/khairatAA/monty",
        live_link: "https://github.com/khairatAA/monty"
    },
]

export default data
