const results = document.getElementById("results")
const regions = document.getElementById("regions")
const cards = document.getElementsByClassName("country-card")
const input = document.getElementById("input")
const littleCards = document.getElementsByClassName("country-details")


fetch("https://restcountries.com/v3.1/all?fields=name,capital,region,flags,population")
.then((res) => res.json())
.then((res) => {
    console.log(res)

    for (let i = 0; i < 50; i++) {
        const element = res[i];
        
        // create the element for the cards
        let div = document.createElement('div')
        let h2 = document.createElement('h2')
        let img = document.createElement('img')
        let underdiv = document.createElement('div')
        let ul = document.createElement('ul')
        let populLi = document.createElement('li')
        let regionLi = document.createElement('li')
        let capitalLi = document.createElement('li')

        // add text in the element
        h2.textContent = element.name.official
        populLi.textContent = "Population : " + element.population
        regionLi.textContent = "Region : " + element.region
        capitalLi.textContent = "Capital : " + element.capital[0]

        // set attribute in img
        img.setAttribute("src", element.flags.svg)
        img.setAttribute("alt", element.flags.alt)

        // add a class to element
        div.className = "country-card"
        div.setAttribute("id", element.region)
        img.className = "country-flag"
        underdiv.className = "country-details"
        underdiv.setAttribute("id", element.name.official)

        // append element
        div.append(img)
        underdiv.append(h2)
        results.append(div)
        div.append(underdiv)
        underdiv.append(ul)        
        ul.append(populLi)
        ul.append(regionLi)
        ul.append(capitalLi)        
        
    }

    regions.addEventListener("change", (ev) => {
        console.log(ev.target.value)
        let e = ev.target.value 

        for (let i = 0; i < cards.length; i++) {
            const card = cards[i]
            let element = cards[i].id;
            element = element.toLowerCase()
            card.className = "country-card"

            if (element !== e && e !== "") {
                card.className += " erase"
            }
            
        }
    })


    input.addEventListener("input", (ev) => {
        console.log(ev.target.value)
        let e = ev.target.value 

        for (let i = 0; i < littleCards.length; i++) {
            const card = littleCards[i]
            let element = littleCards[i].id;
            let clas = cards[i].className
            element = element.toLowerCase()
            cards[i].className = "country-card"


            if (!element.includes(e)) {
                cards[i].className += " erase"
            }
            
        }

    })
    
})
