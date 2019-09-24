
import axios from 'axios';

async function getResults(query){
    const proxy = 'https://cors-anywhere.herokuapp.com/';
    const key = 'aa9ed1b747c75daa4aab10e48fd4e0f0';
   const res = await axios(`${proxy}https://www.food2fork.com/api/search?key=${key}&q=${query}`);
    console.log
}

getResults('pizza');
// 
//https://www.food2fork.com/api/search