document.addEventListener('DOMContentLoaded', function() {
    let testimonials = [
        {
            logo:'./images/FreeCodeCamp_logo.png',
            name:'Freecodecamp',
            Specialization:'JavaScript Algorithms and Data Structures',
            link:'https://freecodecamp.org/certification/fccca45e0f9-e5cd-49a7-9ae0-ce150813dc60/javascript-algorithms-and-data-structures',
        },
        {
            logo:'./images/FreeCodeCamp_logo.png',
            name:' Responsive Web Design',
            link:'https://freecodecamp.org/certification/fccca45e0f9-e5cd-49a7-9ae0-ce150813dc60/responsive-web-design',
        },
        {
            logo:'./images/udacity.jpeg',
            name:' Front End Development Track',
            link:'https://s3-us-west-2.amazonaws.com/udacity-printer/production/certificates/d5e727dd-99ae-487e-8549-d87255211d4a.pdf',
        },
        {
            logo:'./images/udacity.jpeg',
            name:' WEB DEVELOPMENT CHALLENGER TRACK',
            link:'https://s3-us-west-2.amazonaws.com/udacity-printer/production/certificates/b2fa3900-6cce-4a91-badc-bc23c4e30b5b.pdf',
        },
    ]
    testimonials.forEach(testimonial => {
        let testimonialDiv = document.createElement('div')
        testimonialDiv.classList.add('testimonial')
        let logo = document.createElement('img')
        logo.src = testimonial.logo
        logo.alt = testimonial.name
        let name = document.createElement('a')
        name.href = testimonial.link
        name.textContent = testimonial.Specialization
        testimonialDiv.appendChild(logo)
        testimonialDiv.appendChild(name)
        document.querySelector('#testimonials').appendChild(testimonialDiv)
    })
})