
// --------------------------------------------- tracking the light and dark mode  --------------------------------------------
document.addEventListener('DOMContentLoaded', function() {
    let Body = document.getElementsByTagName('body')[0]
    let Default = localStorage.getItem('theme')
    if(Default == undefined){
        localStorage.setItem('theme', 'dark');
    }
    else{
    if(Default == 'light'){ 
        Body.classList.remove('dark');
        Body.classList.add(Default);
        console.log('Theme:', 'light');}
    else{ 
        Body.classList.remove('light');
        Body.classList.add(Default);
        console.log('Theme:', 'dark');}
    }
})

document.addEventListener('DOMContentLoaded', function() {
    const preferredColorScheme = getPreferredColorScheme();
    if (preferredColorScheme === 'dark') {
        document.body.classList.add('dark');
    } else {
        document.body.classList.add('light');
    }
    console.log(preferredColorScheme);
    const toggleButton = document.getElementById('mode');
    toggleButton.addEventListener('click', () => {
    // add a short transition helper so color/background changes animate smoothly
    document.documentElement.classList.add('theme-transition');
    setTimeout(() => {
        document.documentElement.classList.remove('theme-transition');
    }, 500);

    // toggle theme classes and persist preference
    if (document.body.classList.contains('dark')) {
        document.body.classList.remove('dark');
        document.body.classList.add('light');
        localStorage.setItem('theme', 'light');
    } else {
        document.body.classList.remove('light');
        document.body.classList.add('dark');
        localStorage.setItem('theme', 'dark');
    }

    });
    
});

function getPreferredColorScheme() {
    if (window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches) {
        return 'dark';
    } else {
        return 'light';
    }
}
// ----------------------------------------- end of tracking the light and dark mode  --------------------------------------------

// --------------------------------------------- creating nav for mobile  --------------------------------------------
document.addEventListener('DOMContentLoaded', function() {
let menu = document.getElementById('menu');
let Close = document.getElementById('close');
let nav = document.getElementsByTagName('nav')[0];
let header = document.getElementsByTagName('h2')[0];
console.log(header);
let ul = document.getElementsByTagName('ul')[0];
console.log(    menu);
console.log(ul);
console.log(nav);
    menu.addEventListener('click', () => {
    nav.classList.add('flex-col', '!items-start','text-left', 'justify-start');
    ul.classList.remove('hidden');
    ul.classList.add( 'flex-col', '!items-start','text-left', 'justify-start');
    menu.classList.add('hidden');
    Close.classList.remove('hidden');
});
    Close.addEventListener('click', () => {
    nav.classList.remove( 'flex-col', '!items-start','text-left', 'justify-start');
    ul.classList.add('hidden');
    ul.classList.remove( 'flex-col', '!items-start','text-left', 'justify-start');
    menu.classList.remove('hidden');
    Close.classList.add('hidden');
    })
})
// ----------------------------------------- end of creating nav for mobile  --------------------------------------------


// ---------------------------------------------  Creating the skills section  --------------------------------------------


    document.addEventListener('DOMContentLoaded', function() {
        let skills = document.getElementById('skills');                                                            // Get the skills container
        let container = document.getElementById('second');                                                        // Get the container to append the skills to
        let skillsn = 4;                                                                                         // Number of skills to display
        let skillsobj = [                                                                                       // Array of skills to display
            { name: 'HTML5', classname: 'html5', color: '#f06925' },
            { name: 'CSS3', classname: 'css3-alt', color: '#2965f1' },
            { name: 'JavaScript', classname: 'js', color: '#f0db4f' },
            { name: 'Tailwind CSS', imgsrc: './images/tailwind icon.png' }
        ];
        console.log(skills);                                                                            // Log the skills container to the console *TEST!*
        for (let i = 0; i < skillsn; i++) {                                                                     // Loop through the skills array
            let skill = document.createElement('div');                                                          // Create a div element for each skill
            skill.className = 'md:!w-1/3 w-full  text-center p-4';                                                        // Add classes to the skill div                           

            // Check if the object exists and has the classname property
            if (skillsobj[i] && skillsobj[i].classname) {
                let logo = document.createElement('i');                                                             // Create an i element for the logo
                                                                                
                logo.className = `fa-brands fa-${skillsobj[i].classname} fa-2xl text-6xl`;                          // Add classes to the logo
                logo.style.color = skillsobj[i].color;                                                              // Add color to the logo
                skill.appendChild(logo);                                                                        // Append the logo to the skill div                     
            } else if (skillsobj[i] && skillsobj[i].imgsrc) {
                let logo = document.createElement('img');                                                         // Create an img element for the logo         
                logo.className = 'mb-2 m-auto';                                                                    // Add classes to the logo     
                logo.src = skillsobj[i].imgsrc;                                                               // Add the source to the logo                 
                skill.appendChild(logo);                                                                    // Append the logo to the skill div             
            
            }
            
            let n = document.createElement('h5');                                                            // Create an h5 element for the skill name         
            n.className = 'd950c';                                                                       // Add classes to the skill name           
            n.textContent = skillsobj[i].name;                                                        // Add the skill name to the h5 element               
            skill.appendChild(n);                                                                  // Append the skill name to the skill div                
            skills.appendChild(skill);                                                         // Append the skill div to the skills container      
        }
        container.appendChild(skills);                                                                       // Append the skills container to the container
        
    });

// --------------------------------------------- End of Creating the skills section  --------------------------------------------


// ---------------------------------------------  Creating the projects section  --------------------------------------------
    document.addEventListener('DOMContentLoaded', function() {
        let projects = document.getElementById('projects');                                                        // Get the projects container
       
        let projectsobj = [                                                                                       // Array of projects to display
            { name: 'Random Quote Generator',
              imgsrc: './images/Quate Gen.png',
              introduction: 'This is a simple web page that generates random quotes when the button is clicked. The quotes are fetched from an API.',
              skills: ['HTML5', 'CSS3', 'JavaScript'],
              link: 'https://mazen-magdy.github.io/Random-quote/'},
            { name: 'TODO List',
              imgsrc: './images/To Do list.png',
              introduction: 'This is a simple web page that allows you to add, delete, and filter tasks. The tasks are stored in the local storage.',
              skills: ['HTML5', 'CSS3', 'JavaScript'],
              link: 'https://mazen-magdy.github.io/To-Do-list/'},
    

              { name: '2048 Game',
              imgsrc: './images/2048.png',
              introduction: '',
              skills: ['HTML5', 'CSS3', 'JS'],
              link: 'https://mazen-magdy.github.io/2048-Game/'},
              { name: 'Memory Game',
                imgsrc: './images/memory.png',
                introduction: '',
                skills: ['HTML5', 'CSS3', 'JS'],
                link: 'https://mazen-magdy.github.io/memory-Game/'},
              
                          ];    
         let projectsn = projectsobj.length;                                                                                         // Number of projects to display
        for(let i = 0 ; i<projectsn ; i++){
            let project = document.createElement('div');                                                      // Create a div element for each project                  
           project.className = 'rounded-lg overflow-hidden w-full md:!w-full  d950g flex flex-col md:!flex-row mb-4';                       // Add classes to the project div
           let imgcontainer = document.createElement('div');                                               // Create a div element for the image container 
           imgcontainer.className = 'w-full md:!w-full h-auto overflow-hidden py-4 d50g flex justify-center items-center';                                                               // Add classes to the image container
           let img = document.createElement('img');                                                        // Create an img element for the image                
            img.className = 'object-contain rounded-lg';                                                                        // Add classes to the image         
            img.src = projectsobj[i].imgsrc;                                                              // Add the source to the image   
            imgcontainer.appendChild(img);                                                                // Append the image to the image container
            project.appendChild(imgcontainer);                                                                    // Append the image to the project div                       
            let textcontainer = document.createElement('div');                                               // Create a div element for the container
            textcontainer.className = 'flex flex-col w-full md:!w-1/2 d100g d950c p-10';                                                        // Add classes to the container
            project.appendChild(textcontainer);                                                             // Append the container to the project div
            let n = document.createElement('h4');                                                       // Create an h5 element for the project name                 
            n.className = 'mb-8 text-left font-bold ';                                                                     // Add classes to the project name                             
            n.textContent = projectsobj[i].name;                                                      // Add the project name to the h5 element
            textcontainer.appendChild(n);                                                                  // Append the project name to the project div                      
            let intro = document.createElement('h5');                                                // Create a p element for the introduction
            intro.className = 'mb-8';                                                           // Add classes to the introduction                   
            intro.textContent = projectsobj[i].introduction;                                      // Add the introduction to the p element            
            textcontainer.appendChild(intro);                                                          // Append the introduction to the project div                       
            let s = document.createElement('h5');                                                // Create a p element for the skills                    
            s.className = 'mb-8 flex flex-row flex-wrap';                                                           // Add classes to the skills        
            console.log(projectsobj[i].skills);                                              // Log the skills array to the console *TEST!*
            for(j = 0; j < projectsobj[i].skills.length; j++) {                                 // Loop through the skills array
            console.log(projectsobj[i].skills[j]);                                      // Log the skill to the console *TEST!*
            let Skill = document.createElement('span');                                      // Create a span element for each skill
            Skill.className = 'mb-4 d950g dec rounded-full py-1 px-2 mr-2 hover:bg-gray-700  hover:text-white hover:cursor-pointer';    // Add classes to the skill
            Skill.textContent = projectsobj[i].skills[j];                                  // Add the skill to the span element
            s.appendChild(Skill);                                                         // Append the skill to the skills p element
             }
            let link = document.createElement('a');                                      // Create an a element for the link
            link.href = projectsobj[i].link;                                            // Add the link to the a element
            link.target = '_blank';                                                    // Add the target to the a element
            link.style.color = 'inherit';                                               // Add color to the link
            link.className = 'text-blue-500 hover:underline';                          // Add classes to the link
            let linkcontent = document.createElement('i');                           // Create an i element for the link content
            linkcontent.className = 'fa-solid fa-arrow-up-right-from-square';                                  // Add classes to the link content
            link.appendChild(linkcontent);                                         // Append the link content to the link
            textcontainer.appendChild(s);                                                          // Append the skills to the project div                     
            textcontainer.appendChild(link);                                       // Append the link to the project div
            projects.appendChild(project);                                                  // Append the project div to the projects container                     
         }
    });
  
    // ---------------------------------------------- End of Creating the projects section  --------------------------------------------

    // ----------------------------------------------- copy email to clipboard  ------------------------------------------------
    document.addEventListener('DOMContentLoaded',() =>{
        let email = document.getElementById('email');
        let done1 = document.getElementById('copiedmail');
        let phone = document.getElementById('phone');
        let done2 = document.getElementById('copiedphone');
        email.addEventListener('click',()=>{
            navigator.clipboard.writeText('mm1759467@gmail.com')
            done1.style.display = 'inline';
             setTimeout(() => {
                 done1.style.display = 'none';
             }, 1500);
        }) 
        phone.addEventListener('click',()=>{
            navigator.clipboard.writeText('01016359580')
            done2.style.display = 'inline';
            setTimeout(() => {
                done2.style.display = 'none';
                done2.style.animation = 'visualizing 1s ease-in-out ';
            }, 1500);
         }) 
    }) 