
const json = 'conceptual-model.json';


    fetch(json)
    .then(reply => {
        // return response.json();
        return reply.json();
    })
    .then(data => {

        data.map((sections) => {

            console.log(sections['About Me'])
            let result = document.getElementById('sections-about-me')

            let li = document.createElement('li');
            let text = document.createTextNode(sections['About Me'])

            li.appendChild(text);
            result.appendChild(li).innerHTML;

        })
    })