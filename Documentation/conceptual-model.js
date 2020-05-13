
const json = 'conceptual-model.json';


    fetch(json)
    .then(reply => {
        // return response.json();
        return reply.json();
    })
    .then(data => {

        data.map(sections => {
            
            console.log(sections['About Me'].Objective);
        })
    })