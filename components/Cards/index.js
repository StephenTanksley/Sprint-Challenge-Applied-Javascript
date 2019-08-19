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


axios.get('https://lambda-times-backend.herokuapp.com/articles') //get call to the server to get data.
    .then(function (response) { //turning the response into an array we can work with.                       
        const articleArray = response.data.articles;
        const cardsContainer = document.querySelector('.cards-container')
        console.log(articleArray)

        articleArray.javascript.map((e) => {
            cardsContainer.appendChild(articleCreator(e))
        })

        articleArray.bootstrap.map((e) => {
            cardsContainer.appendChild(articleCreator(e))
        })

        articleArray.technology.map((e) => {
            cardsContainer.appendChild(articleCreator(e))
        })

        articleArray.jquery.map((e) => {
            cardsContainer.appendChild(articleCreator(e))
        })

        articleArray.node.map((e) => {
            cardsContainer.appendChild(articleCreator(e))
        })


        // This is something I want to work. I'd like to programmatically 
        // update all cards without having to spell things out.

        articleArray.map(section => {
            section.map(e => {
                cardsContainer.append(articleCreator(e))
            })
        })


    })
    .catch(function (error) {
        console.log(error);
    })





//This is the component creator.
function articleCreator(article) {

    const cardDiv = document.createElement('div')
    const headlineDiv = document.createElement('div')
    const authorDiv = document.createElement('div')
    const imageContainer = document.createElement('div')
    const authorHeadshot = document.createElement('img')
    const authorSpan = document.createElement('span')

    cardDiv.classList.add('card')
    headlineDiv.classList.add('headline')
    headlineDiv.textContent = article.headline

    // console.log(article.headline)
    authorDiv.classList.add('author')
    imageContainer.classList.add('img-container')
    authorHeadshot.setAttribute('src', article.authorPhoto)
    authorSpan.textContent = `By ${article.authorName}`

    cardDiv.append(headlineDiv)
    cardDiv.append(authorDiv)
    authorDiv.append(imageContainer)
    imageContainer.append(authorHeadshot)
    authorDiv.append(authorSpan)

    return cardDiv
}


//FIXED.


// .then(function (response) { //turning the response into an array we can work with.                       
//     const articleArray = response.data.articles;
//     const cardsContainer = document.querySelector('.cards-container')
//     console.log(articleArray)

//     articleArray.javascript.map((e) => {
//         cardsContainer.appendChild(articleContainer(e));
//     })

//     articleArray.bootstrap.map((e) => {
//         cardsContainer.appendChild(articleContainer(e));
//     })
// })
// .catch(function (error) {
//     console.log(error);
// })