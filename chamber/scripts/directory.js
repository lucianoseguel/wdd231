// Last modified function

let lastmod = document.getElementById('lastModified')

lastmod.textContent = `Last Modified: ${document.lastModified}`

//Current year function

const current_year = document.getElementById("currentyear");


current_year.textContent = new Date().getFullYear()



//Requesting json information


let jsonfilename = "members.json"




async function loadingJSON(file_url) {

    const requesturl = file_url

    const request = new Request(requesturl)

    const response = await fetch(request)

    if (!response.ok) {
        throw new Error(`Error HTTP: ${response.status} .`);
    }

    let commerces = await response.json()
    //console.log(commerces)
    return commerces


}

//Variable OBJECT .json on js



async function createCards() {
    try {
        const commerces = await loadingJSON("members.json")
        console.log(commerces)


        let grid_container = document.querySelector(".commerce-container")

        commerces.forEach(comerce => {
            const commerce_container = `
                <div> 
                <h3>${comerce.business_name}</h3>
                <p>${comerce.business_tag_name}</p>
                </div>
                <hr>
                
                <img src="${comerce.image}" alt="${comerce.business_name}">
                <div> 
                <p>Email: ${comerce.email}</p>
                <p>Phone: ${comerce.phone}</p>
                <p><a href="${comerce.url}" target="_blank">Visit site</a></p>
                <p>Level: ${comerce.membership_level}</p>
                
                </div> 
                
             `

            const commerce_box = document.createElement("article")
            commerce_box.innerHTML = commerce_container
            grid_container.appendChild(commerce_box)
        });




        console.log(card1)
    }
    catch (error) {
        console.error("Fail Loading .json file");
    }


}


createCards()





const list_button = document.getElementById("list-button")
const grid_button = document.getElementById("grid-button")


let commerce_container = document.getElementById("main-commerce-container")


list_button.addEventListener('click', () => {

    console.log("clicked")
    commerce_container.classList.add("commerce-container-list")
    commerce_container.classList.remove("commerce-container")
})


grid_button.addEventListener('click', () => {

    console.log("clicked")
        commerce_container.classList.add("commerce-container")
    commerce_container.classList.remove("commerce-container-list")
})



