document.addEventListener('DOMContentLoaded', function() {
    // Smooth scrolling for navigation links
    const navLinks = document.querySelectorAll('nav ul li a');
    navLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            const targetId = this.getAttribute('href').substring(1);
            const targetSection = document.getElementById(targetId);
            targetSection.scrollIntoView({ behavior: 'smooth' });
        });
    });

    // Function to dynamically load project, job, and blog data
    function loadData() {
        // Realistic mock data
        const projects = [
            { title: 'Personal Portfolio', description: 'A personal portfolio website to showcase my projects and skills.', techStack: 'HTML, CSS, JavaScript' },
            { title: 'E-commerce Website', description: 'An e-commerce website built with React and Node.js.', techStack: 'React, Node.js, MongoDB' },
            { title: 'Weather App', description: 'A weather application that provides real-time weather updates.', techStack: 'JavaScript, OpenWeatherMap API' }
        ];

        const jobs = [
            { title: 'Frontend Engineer at TechCorp', description: 'Developed and maintained web applications using React and Redux.', skills: 'React, Redux, JavaScript' },
            { title: 'Web Developer at WebSolutions', description: 'Worked on various client projects, building responsive and interactive websites.', skills: 'HTML, CSS, JavaScript' },
            { title: 'Intern at CodeFactory', description: 'Assisted in the development of internal tools and applications.', skills: 'JavaScript, HTML, CSS' }
        ];

        const blogs = [
            { title: 'Understanding React Hooks', description: 'A comprehensive guide to understanding and using React Hooks in your projects.', link: 'https://example.com/react-hooks' },
            { title: 'CSS Grid vs Flexbox', description: 'A comparison of CSS Grid and Flexbox for layout design.', link: 'https://example.com/css-grid-vs-flexbox' },
            { title: 'JavaScript ES6 Features', description: 'An overview of the new features introduced in JavaScript ES6.', link: 'https://example.com/js-es6-features' }
        ];

        // Load projects
        const projectsSection = document.getElementById('projects');
        projects.forEach(project => {
            const projectElement = document.createElement('div');
            projectElement.innerHTML = `<h2>${project.title}</h2><p>${project.description}</p><p><strong>Tech Stack:</strong> ${project.techStack}</p>`;
            projectsSection.appendChild(projectElement);
        });

        // Load jobs
        const jobsSection = document.getElementById('jobs');
        jobs.forEach(job => {
            const jobElement = document.createElement('div');
            jobElement.innerHTML = `<h2>${job.title}</h2><p>${job.description}</p><p><strong>Skills:</strong> ${job.skills}</p>`;
            jobsSection.appendChild(jobElement);
        });

        // Load blogs
        const blogsSection = document.getElementById('blogs');
        blogs.forEach(blog => {
            const blogElement = document.createElement('div');
            blogElement.innerHTML = `<h2>${blog.title}</h2><p>${blog.description}</p><p><a href="${blog.link}">Read more</a></p>`;
            blogsSection.appendChild(blogElement);
        });
    }

    // Call loadData function to load the data
    loadData();

    // Add icons for all the skills using SimpleIcons
    const skills = [
        { name: 'HTML', icon: 'https://cdn.simpleicons.org/html5' },
        { name: 'CSS', icon: 'https://cdn.simpleicons.org/css3' },
        { name: 'JavaScript', icon: 'https://cdn.simpleicons.org/javascript' },
        { name: 'React', icon: 'https://cdn.simpleicons.org/react' },
        { name: 'Vue', icon: 'https://cdn.simpleicons.org/vue.js' }
    ];

    const skillsSection = document.getElementById('skills');
    const skillsList = skillsSection.querySelector('ul');
    skillsList.innerHTML = ''; // Clear existing list items

    skills.forEach(skill => {
        const skillItem = document.createElement('li');
        skillItem.innerHTML = `<img src="${skill.icon}" alt="${skill.name} icon" class="skill-icon">${skill.name}`;
        skillsList.appendChild(skillItem);
    });

    // Function to dynamically load social media links in the footer section
    function loadSocialMediaLinks() {
        const socialMediaLinks = [
            { name: 'Twitter', url: 'https://twitter.com/johndoe' },
            { name: 'LinkedIn', url: 'https://linkedin.com/in/johndoe' },
            { name: 'GitHub', url: 'https://github.com/johndoe' }
        ];

        const footer = document.querySelector('footer ul');
        footer.innerHTML = ''; // Clear existing list items

        socialMediaLinks.forEach(link => {
            const listItem = document.createElement('li');
            listItem.innerHTML = `<a href="${link.url}">${link.name}</a>`;
            footer.appendChild(listItem);
        });
    }

    // Call loadSocialMediaLinks function to load the social media links
    loadSocialMediaLinks();

    // Function to animate the hero section on page load
    function animateHeroSection() {
        const heroSection = document.getElementById('hero');
        heroSection.style.opacity = 0;
        heroSection.style.transition = 'opacity 2s';
        setTimeout(() => {
            heroSection.style.opacity = 1;
        }, 100);
    }

    // Call animateHeroSection function to animate the hero section on page load
    animateHeroSection();
});
