// Step 2: Create Tabs
// -----------------------
// Using axios send a GET request to the address: https://lambda-times-backend.herokuapp.com/topics
// Once the data is returned console.log it and review the structure.
// Iterate over the topics creating a new Tab component and add it to the DOM
// under the .topics element.
//
//  The tab component should look like this:
//    <div class="tab">topic here</div>


axios.get('https://lambda-times-backend.herokuapp.com/topics') //get call to the server to get data.
    .then(function (response) { //turning the response into an array we can work with.                       
        const infoArray = response.data.topics;
        console.log(infoArray) //checking to make sure I have the right data.

        const topicDiv = document.querySelector('.topics')
        console.log(topicDiv)

        infoArray.forEach((e) => {
            topicDiv.appendChild(topicsCards(e))
        })

        // We want to create a new div element for each topic and append that to the tabs span.

        return infoArray;
    })
    .catch(function (error) {
        console.log(error);
    })


function topicsCards(Topics) {
    const topic = document.createElement('div')
    topic.classList.add('tab')
    topic.textContent = Topics
    return topic;
}