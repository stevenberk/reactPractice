let myData = [
    {
      "userId": 1,
      "id": 1,
      "title": "sunt aut facere repellat provident occaecati excepturi optio reprehenderit",
      "body": "quia et suscipit\nsuscipit recusandae consequuntur expedita et cum\nreprehenderit molestiae ut ut quas totam\nnostrum rerum est autem sunt rem eveniet architecto"
    },
    {
      "userId": 1,
      "id": 2,
      "title": "qui est esse",
      "body": "est rerum tempore vitae\nsequi sint nihil reprehenderit dolor beatae ea dolores neque\nfugiat blanditiis voluptate porro vel nihil molestiae ut reiciendis\nqui aperiam non debitis possimus qui neque nisi nulla"
    },
    {
      "userId": 1,
      "id": 3,
      "title": "ea molestias quasi exercitationem repellat qui ipsa sit aut",
      "body": "et iusto sed quo iure\nvoluptatem occaecati omnis eligendi aut ad\nvoluptatem doloribus vel accusantium quis pariatur\nmolestiae porro eius odio et labore et velit aut"
    } 
]


let h = React.createElement;


var myContent = 
[ h("h1", null, "First time using React js"),
h("ul", null, [    
    h("li", null, myData[0].id + ", " + myData[0].title + ", " + myData[0].body),
    h("li", null, myData[1].id + ", " + myData[1].title + ", " + myData[1].body),
    h("li", null, myData[2].id + ", " + myData[2].title + ", " + myData[2].body)
    ]), 
h("p", null, "Copyright 2019")
];

ReactDOM.render(
    myContent , 
    document.getElementById("root"));  