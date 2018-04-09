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

export const getAllPeople = () => {
    return fetch('https://swapi.co/api/people/')
            .then((res) => {
                if (res.status === 200) {
                    return res.json();
                }
                else {
                    console.log(`Request status: ${res.status}`)
                }
            })
            .then((res) => {
                return +res.count % 10 < 5 ? Math.round(res.count / 10) + 1 : Math.round(res.count / 10);
            })
            .then((res) => {
                let arr_of_promises = [];

                for (let i = 0; i < res; i++) {
                    arr_of_promises[i] = fetch(`https://swapi.co/api/people/?page=${i + 1}`)
                }
                return Promise.all(arr_of_promises)
            })
            .then((res) => {
                const results =  res.map((item) => item.status === 200 && item.json())
                return Promise.all(results)
            })
            .then((res) => {
                return res.map((item) => item.results)
            })
            .catch(err => console.log(err))
};

export const getPersonById = (id) => {
    return fetch(`https://swapi.co/api/people/${id}/`)
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
}