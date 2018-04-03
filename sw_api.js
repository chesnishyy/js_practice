import fetch from 'isomorphic-fetch';

export const getAllFilms = () => {
    return fetch('https://swapi.co/api/films/')
        .then((res) => {
            if (res.status === 200) {
                return res.json();
            }
            else {
                console.log(`Request status: ${res.status}`)
            }
        })
        .then(res => res)
        .catch(err => console.log(err))
};
