// Last modified function

let lastmod = document.getElementById('lastModified')

lastmod.textContent = `Last Modified: ${document.lastModified}`

//Current year function

const current_year = document.getElementById("currentyear");


current_year.textContent = new Date().getFullYear()



//Requesting json information


let jsonfilename = "data/members.json"




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
        const commerces = await loadingJSON("data/members.json")
        //console.log(commerces)


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




    }
    catch (error) {
        console.log("Fail Loading .json file");
    }


}











/**--------------------------------------------
 *               RANDOM MATH FOR MEMBERS GOLD AND SILVER
 *---------------------------------------------**/



async function getRandomMembers(filename) {

    const commerces = await loadingJSON(filename)

    const premiumMembers = commerces.filter(member => member.membership_level == "Gold" || member.membership_level == "Silver")

    // console.log(premiumMembers)    

    let members_array = []
    let counter_random = 0

    premiumMembers.forEach(member => {
        members_array.push(member)


    })
    //console.log(random_members)

    let random_members = [] //Creating Array for random members

    //Creating the random array complete
    while (counter_random < 3) {

        let random_place = Math.floor(Math.random() * members_array.length)

        if (!random_members.includes(members_array[random_place]) ){
        random_members.push(members_array[random_place])
        counter_random += 1
        }
       
        
    }

    //console.log(random_members)

    return random_members



}

/**--------------------------------------------
 *               CREATING RANDOM MEMBER CARDS
 *---------------------------------------------**/

async function creationMemberCards(){

    const members = await getRandomMembers(jsonfilename)
    //console.log( members  )

    let members_container = document.getElementById("members-section")

    members.forEach(member => {

        const member_card = `
        <div>
        <img src="${member.image}" alt="${member.business_name}">
        <p>${member.business_name}</p>
        <p> Level: ${member.membership_level} </p>
        </div>
        `

        members_container.innerHTML += member_card
    })
}


/**============================================
 *               MAIN FUNCTION
 *=============================================**/

function main() {



    const list_button = document.getElementById("list-button")
    const grid_button = document.getElementById("grid-button")


    let commerce_container = document.getElementById("main-commerce-container")


    list_button?.addEventListener('click', () => {

        console.log("clicked")
        if (commerce_container.classList.contains("commerce-container")) {
            commerce_container.classList.toggle("commerce-container")
            commerce_container.classList.toggle("commerce-container-list")



        }

    })


    grid_button?.addEventListener('click', () => {

        console.log("clicked")
        if (commerce_container.classList.contains("commerce-container-list")) {
            commerce_container.classList.toggle("commerce-container")
            commerce_container.classList.toggle("commerce-container-list")



        }
    })


    createCards()


    creationMemberCards()


}



main()