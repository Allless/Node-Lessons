const request = require('request');
const prompt = require('prompt');
const fs = require('fs');

const KEYWORD = 'Input joke search keyword';

async function getJoke() {
    const jokeArg = (await prompt.get(KEYWORD))[KEYWORD];
    const options = getOptionsForRequest(jokeArg);

    request(options, (err, response, body) => {
        if (err) return console.log(err);

        const joke = getJokeFromResponseBody(body);
        if (!joke) return console.log('Jokes not found');

        writeJokeToFile('jokes.txt', joke, jokeArg);
    });
}

function getJokeFromResponseBody(body) {
    const jokeList = JSON.parse(body);

    if (!jokeList.total_jokes) return console.log('No jokes found');

    const jokeNumber = Math.floor(Math.random() * jokeList.total_jokes);
    const joke = jokeList.results[jokeNumber].joke;
    return joke;
}

async function writeJokeToFile(fileName, joke, jokeArg) {
    console.log(jokeArg);
    fs.exists(fileName, function (exists) {
        if (exists) {
            fs.promises.appendFile(fileName, `\n${jokeArg}: ${joke}`);
        } else {
            fs.promises.writeFile(fileName, `${jokeArg}: ${joke}`);
        }
    });
}

function getOptionsForRequest(arg) {
    const options = {
        url: `https://icanhazdadjoke.com/search?term=${arg}`,
        method: 'GET',
        headers: {
            Accept: 'application/json',
        },
    };
    return options;
}

getJoke();
