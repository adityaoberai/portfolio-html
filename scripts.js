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
            { title: 'Personal Portfolio', description: 'A personal portfolio website to showcase my projects and skills.' },
            { title: 'E-commerce Website', description: 'An e-commerce website built with React and Node.js.' },
            { title: 'Weather App', description: 'A weather application that provides real-time weather updates.' }
        ];

        const jobs = [
            { title: 'Frontend Engineer at TechCorp', description: 'Developed and maintained web applications using React and Redux.' },
            { title: 'Web Developer at WebSolutions', description: 'Worked on various client projects, building responsive and interactive websites.' },
            { title: 'Intern at CodeFactory', description: 'Assisted in the development of internal tools and applications.' }
        ];

        const blogs = [
            { title: 'Understanding React Hooks', description: 'A comprehensive guide to understanding and using React Hooks in your projects.' },
            { title: 'CSS Grid vs Flexbox', description: 'A comparison of CSS Grid and Flexbox for layout design.' },
            { title: 'JavaScript ES6 Features', description: 'An overview of the new features introduced in JavaScript ES6.' }
        ];

        // Load projects
        const projectsSection = document.getElementById('projects');
        projects.forEach(project => {
            const projectElement = document.createElement('div');
            projectElement.innerHTML = `<h2>${project.title}</h2><p>${project.description}</p>`;
            projectsSection.appendChild(projectElement);
        });

        // Load jobs
        const jobsSection = document.getElementById('jobs');
        jobs.forEach(job => {
            const jobElement = document.createElement('div');
            jobElement.innerHTML = `<h2>${job.title}</h2><p>${job.description}</p>`;
            jobsSection.appendChild(jobElement);
        });

        // Load blogs
        const blogsSection = document.getElementById('blogs');
        blogs.forEach(blog => {
            const blogElement = document.createElement('div');
            blogElement.innerHTML = `<h2>${blog.title}</h2><p>${blog.description}</p>`;
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
});
