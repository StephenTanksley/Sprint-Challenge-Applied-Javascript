// STEP 1: Create a header component.
// -----------------------
// Using a function create the component you see below:
//
//  <div class="header">
//    <span class="date">SMARCH 28, 2019</span>
//    <h1>Lambda Times</h1>
//    <span class="temp">98°</span>
//  </div >
// And add it to the DOM in the .headerContainer component

const headerContainer = document.querySelector('.header-container')

function Header() {

    const headerDiv = document.createElement('div')
    const dateSpan = document.createElement('span')
    const headerTitle = document.createElement('h1')
    const tempSpan = document.createElement('span')

    headerDiv.classList.add('header')
    dateSpan.classList.add('date')
    dateSpan.textContent = 'MARCH 28, 2019'
    headerTitle.textContent = 'Lambda Times'
    tempSpan.classList.add('temp')
    tempSpan.textContent = '98°'

    
    headerDiv.append(dateSpan)
    headerDiv.append(headerTitle)
    headerDiv.append(tempSpan)

    return headerDiv
}

headerContainer.appendChild(Header())


//DEBUG THIS