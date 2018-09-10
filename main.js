let posts = [
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
];


let h = React.createElement;


var myContent = h('main', null, [ 
    h("h1", {className:"myClass"}, "First time using React js"),
    h("ul", null, 
        posts.map(post =>
            h('li', null, [
            h("h2", null, post.id),
            h("h3", null, post.title),
            h("p", null, post.body)
            ])
        )
    ), 
    h("footer", {className:"myClass"}, "Copyright 2019")
])


ReactDOM.render(
    myContent , 
    document.getElementById("root"));  