// content array:
let posts = [
  {
    "userId": 1,
    "id": 1,
    "title": "Life and Death of Great American Cities",
    "author": "Jane Jacobs",
    "date": "1961",
    "genre": "nonfiction"
  },
  {
    "userId": 1,
    "id": 2,
    "title": "Burmese Days",
    "author": "George Orwell",
    "date": "1934",
    "genre": "novel"
  },
  {
    "userId": 1,
    "id": 3,
    "title": "The Crucible",
    "author": "Arthur Miller",
    "date": "1953",
    "genre": "play"
  },
  {
    "userId": 1,
    "id": 4,
    "title": "The Life-Changing Magic of Tidying Up",
    "author": "Marie Kondo",
    "date": "2011",
    "genre": "self-help"
  },
  {
    "userId": 1,
    "id": 5,
    "title": "Silent Spring",
    "author": "Rachel Carson",
    "date": "1962",
    "genre": "nonfiction"
  },
  {
    "userId": 1,
    "id": 6,
    "title": "Sharon and My Mother-in-law",
    "author": "Saud Amiry",
    "date": "2003",
    "genre" : "Memoir"
  },
  {
    "userId": 1,
    "id": 7,
    "title": "Call Me By Your Name",
    "author": "Andre Aciman",
    "date": "2007",
    "genre" : "novel"
  },
  {
    "userId": 1,
    "id": 8,
    "title": "Cabaret",
    "author": "Joe Masteroff",
    "date": "1966",
    "genre": "Musical"
  },
  {
    "userId": 1,
    "id": 9,
    "title": "The Bell Jar",
    "author": "Sylvia Plath",
    "date": "1963",
    "genre": "novel"
  } 
];
/// react js code:
let h = React.createElement;

let header = "Booklist made with React js";
let newHeader = "🐍";

let blogPage = (props) =>
h('main', null, [ 
h("h1", {className:"myClass"}, header),
h("ul", null,
  props.posts.map(post =>
    h('li', {}, [
    h("h2", {}, post.id),
    h("h3", {}, post.title),
    h("p", {}, post.author),
    h("p", {className:"dateClass"}, post.date),
    h("p", {className:"hiddenClass"}, post.userId),
    h("p", {}, post.genre),
    h('button', {
      onClick: () => {
        removeItem(post.title);
       snakify();
      }
    }, "Delete")
  ])
  ),
),
h("footer", {className:"myClass"}, "Copyright 2019")
]);

let rerender = () => {
  ReactDOM.render(
    h(blogPage, {posts}), 
    document.getElementById("root"));  
};

let snakify = () => {
  header = header + "sss";
  rerender();
  snakeCounter();
}

let deleteCounter = 0
let snakeCounter = () =>{
  deleteCounter = deleteCounter + 1;
  if (deleteCounter > 7){
    header = newHeader;
  }
;}

let removeItem = (itemToRemove) => {
posts = posts.filter(currentPost => currentPost.title !== itemToRemove);}

rerender();