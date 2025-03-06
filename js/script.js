// /*===============typing animation==============*/


// var typed = new Typed(".typing", { 
//     strings: ["",  "web Developer", "Frontend Developer","Java Developer", "Java Full Stack Developer"], 
//     typeSpeed:100, 
//     BackSpeed:60, 
//     loop:true 
//     }) 

//     /*===============Aside ==============*/
    

    
// const nav  = document.querySelector(".nav"), 
//     navlist = nav.querySelectorAll("li"), 
//     totalNavList = navlist.length; 
//     allSection=document.querySelectorAll(".section"),
//     totalSection = allSection.length;
//     for(let i=0; i<totalNavList; i++) 
//     {
//         const a = navList[i].querySelector("a"); 
//         a.addEventListener("click", function() 
//         {
//             for(let j=0; j<totalNavList; j++) 
//             {
//                 navList[j].querySelector("a").classList.remove("active");
//             } 
//             this.classList.add("active") 
//             showSection(this);
// }) 
// }
// function showSection(element) 
// { 
// I 
// for(let i=0; i<totalSection; i++) 
// { 
// allSection[i].classList.remove("active"); 
// } 
// const target = element.getAttribute("href").split("#")[1]; 
// document.querySelector("#" + target).classList.add("active") 
// }





/*=============== Typing Animation ==============*/
var typed = new Typed(".typing", { 
    strings: ["", "Web Developer", "Frontend Developer", "Java Developer", "Java Full Stack Developer"], 
    typeSpeed: 100, 
    backSpeed: 60, 
    loop: true 
});

/*=============== Navigation Handling ==============*/
const nav = document.querySelector(".nav"),
    navList = nav.querySelectorAll("li"),
    allSections = document.querySelectorAll(".section");

// Function to remove active class from all sections
function removeActiveClass() {
    allSections.forEach(section => section.classList.remove("active"));
}

// Function to show the selected section
function showSection(element) {
    const targetId = element.getAttribute("href").substring(1); // Extract ID from href
    removeActiveClass(); // Hide all sections
    document.getElementById(targetId).classList.add("active"); // Show target section

    // Update URL without reloading the page
    history.pushState(null, "", `#${targetId}`);
}

// Add event listeners to navigation links
navList.forEach(item => {
    const link = item.querySelector("a");
    link.addEventListener("click", function (e) {
        e.preventDefault(); // Prevent default link behavior

        // Remove active class from all nav items
        navList.forEach(navItem => navItem.querySelector("a").classList.remove("active"));
        this.classList.add("active"); // Set clicked item as active

        showSection(this); // Show the corresponding section
    });
});

// Load correct section on page refresh
window.addEventListener("DOMContentLoaded", function () {
    const currentHash = window.location.hash.substring(1); // Get the section ID from URL
    if (currentHash && document.getElementById(currentHash)) {
        showSection(document.querySelector(`a[href="#${currentHash}"]`));
    } else {
        showSection(document.querySelector("a[href='#about']")); // Default section
    }
});
