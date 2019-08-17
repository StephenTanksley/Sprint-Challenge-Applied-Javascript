// STEP 3: Create Article cards.
// -----------------------
// Send an HTTP GET request to the following address: https://lambda-times-backend.herokuapp.com/articles
// Stduy the response data you get back, closely.
// You will be creating a component for each 'article' in the list.
// This won't be as easy as just iterating over an array though.
// Create a function that will programmatically create the following DOM component:
//
// <div class="card">
//   <div class="headline">{Headline of article}</div>
//   <div class="author">
//     <div class="img-container">
//       <img src={url of authors image} />
//     </div>
//     <span>By {authors name}</span>
//   </div>
// </div>
//
// Create a card for each of the articles and add the card to the DOM.


function ArticleMap(Topics) {
    Topics.map(headlines => {
            axios.get('https://lambda-times-backend.herokuapp.com/articles') //get call to the server to get data.
                .then(function (response) { //turning the response into an array we can work with.                       
                    const articleArray = response.data.articles;
                    const newCard = Array.from(articleArray)
                    console.log(newCard)

                })
                .catch(function (error) {
                    console.log(error);
                })
        }

    )
}
const cardsContainer = document.querySelector('.cards-container')

function ArticleMap(Topics) {
    Topics.map(headlines => {

    })
}


//This is the component creator.
function articleCreator() {

    const cardDiv = document.createElement('div')
    const headlineDiv = document.createElement('div')
    const authorDiv = document.createElement('div')
    const imageContainer = document.createElement('div')
    const authorHeadshot = document.createElement('img')
    const authorSpan = document.createElement('span')

    cardDiv.classList.add('card')
    headlineDiv.classList.add('headline')
    authorDiv.classList.add('author')
    imageContainer.classList.add('img-container')
    authorHeadshot.setAttribute('src', `${authorPhoto}`)
    authorSpan.textContent = `By ${authorName}`

    cardDiv.append(headlineDiv)
    cardDiv.append(authorDiv)
    authorDiv.append(imageContainer)
    imageContainer.append(authorHeadshot)
    authorDiv.append(authorSpan)

    return cardDiv
}

// console.log(articleCreator())