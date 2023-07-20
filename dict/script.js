const wordInput = document.querySelector('#inp-word');
const btnSearch = document.querySelector('#search-btn');
const wordTile = document.querySelector('.word h3');
const wordMeaning = document.querySelector('.word-meaning');
const wordExample = document.querySelector('.word-example');
const phonetic = document.querySelector('.phonetic');
const soundButton = document.querySelector('.word button');
let wordToSearch;
let audio = new Audio();
const searchWord = (word) => 
{

    const url = "https://api.dictionaryapi.dev/api/v2/entries/en/"+word
    fetch(url)
    .then(res => res.json())
    .then(data=> 
        {
        prindata(data);
    });
}
const prindata = (data = [])=> 
{
    console.log(data);
    data.map(word =>
    {
        wordTile.innerHTML = word.word;
        phonetic.innerHTML = word.phonetic;
        wordMeaning.innerHTML = word.meanings[0].definitions[0].definition;
        wordExample.innerHTML = word.meanings[0].definitions[0].example;
        audio.src = word.phonetics[0].audio;
    })
}

btnSearch.addEventListener('click', ()=>
{
    console.log(wordToSearch)
    searchWord(wordToSearch)
} )

wordInput.addEventListener('input', (e)=> 
{
    wordToSearch = e.target.value;
})

soundButton.addEventListener('click', () => 
{
    audio.play()
})