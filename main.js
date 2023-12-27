// fetch('https://jsonplaceholder.typicode.com/users')
// .then( resp => {
//     console.log(resp)
//     return resp.json()
// }).then( data => {
//     console.log(data)
//     console.log(typeof data)
//     console.log(data[0])
//     console.log(data[0].name)

// })

// const userList = document.querySelector('.user-list')
// function makeElement(tag, attr_n, attr_v, content) {
//     let output = document.createElement(tag);
//     (!!attr_n) && output.setAttribute(attr_n, attr_v);
//     output.textContent = content;
//     return output;
//   }

fetch('https://jsonplaceholder.typicode.com/users')
    .then(resp => {
        return resp.json();
    })
    .then(data => {
        const userList = document.querySelector('.user-list');

        data.forEach(user => {
            const listItem = makeElement('li', null, null, null);
            const nameElement = makeElement('span', null, null, user.name);
            const emailElement = makeElement('span', null, null, user.email);

            listItem.appendChild(nameElement);
            listItem.appendChild(document.createTextNode('  :  '));
            listItem.appendChild(emailElement);
            userList.appendChild(listItem);
        });
    });

function makeElement(tag, attr_n, attr_v, content) {
    let output = document.createElement(tag);
    (!!attr_n) && output.setAttribute(attr_n, attr_v);
    output.textContent = content;
    return output;
}





// const userList = document.querySelector('.user-list')

//     fetch('https://jsonplaceholder.typicode.com/users')
//         .then(response => response.json())
//         .then(users => {
//             users.forEach(user => {
//                 const listItem = document.createElement('li');
//                 listItem.textContent = `${user.name} ${user.email}`;
//                 userList.appendChild(listItem);
//             });
//         })
//         .catch(error => console.error('Error fetching users:', error));
