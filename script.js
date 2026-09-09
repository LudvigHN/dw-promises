const listDOM = document.querySelector(".people")

fetch("./data/people.json")
    .then(response => {
        if (!response.ok) {
            throw new Error("Kunne ikke hente data");
        }
        return response.json();
    })
    .then(data => {
        listDOM.innerHTML = data.people.map(person => `
                    <li>
                    ${person.name} ${person.age} år
                    </li>
                    `)
            .join("")

    })
    .catch(error =>{
        console.error("Fejl:",error);
        
    })