let apiurl = 'https://pokeapi.co/api/v2/pokemon?limit=898&offset=0'

fetch(apiurl)
    .then((data) => data.json())
    .then((pokemons) => generateHtml(pokemons))

const generateHtml = (data) => {
    console.log(data)
    data.results.forEach(poke => {
        let node = create('div')
        let name = create('span')
        let img = create('img')
        node.className = 'pokemon'
        img.className = 'images'
        // details.className = 'details'
        // details.id = '${poke.name}'
        append(node,img)
        fetch(poke.url)
            .then((dat) => dat.json())
            .then((pokemon) => {
                let ID = create('span')
                ID.className = 'id'
                ID.innerHTML ='ID:'+pokemon.id
                append(node, ID)
                
                img.src = pokemon.sprites.front_default
            })
        name.innerHTML ='Name: '+poke.name.charAt(0).toUpperCase() + poke.name.substring(1)
        append(node, name)
        // append(node, details)
        myglobal = (pok) => {
            
        }
        document.querySelector('.list').appendChild(node)
    })
}
create = (val) => {
    return document.createElement(val)
}

append = (node, element) => {
    node.appendChild(element)
}