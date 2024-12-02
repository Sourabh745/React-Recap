// function customRender(reactElement, container){
//     // const domElement = document.createElement(reactElement.type)
//     // domElement.innerHTML = reactElement.children
//     // domElement.setAttribute('href', reactElement.props.href)
//     // domElement.setAttribute('target', reactElement.props.target)

//     // container.appendChild(domElement)

//     const domElement = document.createElement(reactElement.type)
//     domElement.innerHTML = reactElement.children
//     for (const prop in reactElement.props) {
//         if(prop === "children") continue;
//         domElement.setAttribute(prop, reactElement.props[prop])
//     }
//     container.appendChild(domElement)
// }

// const reactElement = {
//     type: 'a',
//     props: {
//         href: "https://google.com",
//         target: "_blank"
//     },
//     children: 'click me to visit google'
// }

// //You can create react component thatwill run directly unlike reactElement 

// //const AnotherElement = ( <a href = "https://google.com",target: "_blank"> Visit Google </a>)

// // react understand this anotherelement when rendering in this form
// // const aReactElement = React.createElement(
// //     'a',
// //     {href: "https://google.com",target: "_blank"},
// //     'click me to visit google'
// // )

// // aReactElement()
// //do it in react file where vite or react app is installed

// const container = document.querySelector('#root')

// customRender(reactElement, container)

const data = {
    name: "soul"
}
const abc = [1,2,3,4]
console.log(delete data);
console.log(delete abc);
console.log(delete abc[1]);
console.log(abc);

const a = []
const b = []
console.log(a == b);
console.log(a === b);
