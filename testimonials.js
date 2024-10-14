alert('This site is not responsive yet') // Alert the user that the site is not responsive yet
       
// ----------------- Default Theme ----------------- //
 document.addEventListener('DOMContentLoaded', function() {
     let Body = document.getElementsByTagName('body')[0]
     let Default = localStorage.getItem('theme')
     if(Default == 'light'){ 
         Body.classList.remove('dark');
         Body.classList.add(Default);
         console.log('Theme:', 'light');}
     else{ 
         Body.classList.remove('light');
         Body.classList.add(Default);
         console.log('Theme:', 'dark');}
 })
 // -----------------End of Default Theme ----------------- //

  // -----------------Changing Themes ----------------- //
document.addEventListener('DOMContentLoaded', function() {
document.getElementById('Theme').addEventListener('click', function() {
 let Body = document.getElementsByTagName('body')[0];
 if(Body.classList.contains('dark')) {
     Body.classList.remove('dark');
     Body.classList.add('light');
     localStorage.setItem('theme', 'light');
 }
 else{
     Body.classList.remove('light');
     Body.classList.add('dark');
     localStorage.setItem('theme', 'dark');
 }
})

})
  // -----------------End of Changing Themes ----------------- //

     // -----------------Testimonials----------------- //
document.addEventListener('DOMContentLoaded', function() {
let testimonials = [
 {
     logo:'./images/Assiut University Logo.jpeg',
     name:'Assiut University',
     Specialization:'Computer Engineering Student',
     link:'#',
     note: 'undergraduated'
 },
 {
     logo:'./images/FreeCodeCamp_logo.png',
     name:'Freecodecamp',
     Specialization:'JavaScript Algorithms and Data Structures',
     link:'https://freecodecamp.org/certification/fccca45e0f9-e5cd-49a7-9ae0-ce150813dc60/javascript-algorithms-and-data-structures',
 },
 {
     logo:'./images/FreeCodeCamp_logo.png',
     name:' Responsive Web Design',
     Specialization:' Responsive Web Design',
     link:'https://freecodecamp.org/certification/fccca45e0f9-e5cd-49a7-9ae0-ce150813dc60/responsive-web-design',
 },
 {
     logo:'./images/udacity.jpeg',
     name:' Front End Development Track',
     Specialization:'Front End Development Track',
     link:'https://s3-us-west-2.amazonaws.com/udacity-printer/production/certificates/d5e727dd-99ae-487e-8549-d87255211d4a.pdf',
 },
 {
     logo:'./images/udacity.jpeg',
     name:' WEB DEVELOPMENT CHALLENGER TRACK',
     Specialization:'WEB DEVELOPMENT CHALLENGER TRACK',
     link:'https://s3-us-west-2.amazonaws.com/udacity-printer/production/certificates/b2fa3900-6cce-4a91-badc-bc23c4e30b5b.pdf',
 },
]
testimonials.forEach(testimonial => {
 let testimonialDiv = document.createElement('div')
 testimonialDiv.className = "d50g d950c w-4/5 m-auto flex flex-row p-5 justify-between items-center mb-4 rounded-xl testimonial "
 // testimonialDiv.classList.add('testimonial')
 let logo = document.createElement('img')
 logo.src = testimonial.logo
 logo.alt = testimonial.name
 logo.className = "w-1/5   border-red-400 border-4 hover:opacity-45 justify-self-center  rounded-full !h-25 self-start"
 let Specialization = document.createElement('h3')
 Specialization.textContent = testimonial.Specialization
 Specialization.className = "text-l mx-10 w-3/5 dec"
 let link = document.createElement('a')
 link.target = "_blank"
 link.href = testimonial.link
 link.className = "w-2/5 text-center object-cover "
 header3 = document.createElement('h3')
 header3.className = "rounded-full deg  w-5/5  p-2 hover:opacity-60 cursor-pointer"
 if(testimonial.note){
     header3.textContent = testimonial.note
 }
 else{
 header3.textContent = "Link to certificate"
 }
 link.appendChild(header3)
 testimonialDiv.appendChild(logo)
 testimonialDiv.appendChild(Specialization)
 testimonialDiv.appendChild(link)
 document.querySelector('#testimonials').appendChild(testimonialDiv)
})
})
 // ------------------------ Animation ---------------------- //
 document.addEventListener('DOMContentLoaded', function() {
     let testimonials = document.querySelectorAll('.testimonial');
     console.log('Testimonials:', testimonials); // Check if testimonials are selected
 
     const observer = new IntersectionObserver(entries => {
         entries.forEach(entry => {
             if (entry.isIntersecting) {
                 entry.target.classList.add('animate');
                 observer.unobserve(entry.target); // Stop observing once the animation starts
             }
         });
     }, { threshold: 0.1 });
 
     testimonials.forEach(testimonial => {
         observer.observe(testimonial); // Start observing each testimonial element
     });
 });