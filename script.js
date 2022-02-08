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
        name.innerHTML ='Name: '+poke.name.charAt(0).toUpperCase() + poke.name.substring(1)
        
        fetch(poke.url)
            .then((dat) => dat.json())
            .then((pokemon) => {
                let ID = create('span')
                ID.className = 'id'
                ID.innerHTML = 'Id:' + pokemon.id
                let type = create('span')
                type.className = 'type'
                let m = typeset(pokemon.types) 
                type.innerHTML = m
                append(node,img)
                append(node, ID)
                append(node, name)
                append(node,type)
                img.src = pokemon.sprites.front_default
            })
        document.querySelector('.list').appendChild(node)
        typeset = (x) => {
            // console.log(x)
            let p = ''
            for (let i = 0; i < x.length; i++) {
                p += ` 
                <div class = 'types'>${x[i].type.name.charAt(0).toUpperCase() + x[i].type.name.substring(1)}</div>
                `
            }
            // console.log(p)
            return p
        }
    })
}
create = (val) => {
    return document.createElement(val)
}

append = (node, element) => {
    node.appendChild(element)
}

let t = document.querySelectorAll('.types')
console.log(t)
t.forEach(x => {
    console.log(x)
    switch (x.text) {
        case 'Green': {
            // x.style.background - color= 'green';
            break;
        }
    }
})