
/* <div id = "parent">
     <div id = "child">
     <h1> i am h1 tag here <h1>
     </div>
     </div>

*/

const parent = React.createElement(

   "div",

   {id:"parent"},

   React.createElement(

    "div",

    {id:"child1"},

    [React.createElement("h1", {} , "I am an h1 tag"),
    React.createElement("h2", {} , "I am an h2 tag")]

),
React.createElement(

    "div",

    {id:"child2"},

    [React.createElement("h1", {} , "I am an h1 tag"),
    React.createElement("h2", {} , "I am an h2 tag")]

)

);


console.log(parent)

const root = ReactDOM.createRoot(
 
document.getElementById("root")

);



root.render(parent); 