const listDOM = document.querySelector(".people")

fetch("./data/people.json")
    .then(response => response.json())
    .then(data =>{
        listDOM.innerHTML = data.people.map(person => `
                    <li>
                    ${person.name} ${person.age} år
                    </li>
                    `)
                    .join("")
        
    })