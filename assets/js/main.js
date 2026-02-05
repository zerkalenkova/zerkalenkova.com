/**
 * Main Logic for Home Page
 */

document.addEventListener('DOMContentLoaded', () => {
    // 1. Fade in page
    setTimeout(() => {
        document.body.classList.add('loaded');
    }, 100);

    // 2. Populate Projects Grid (Home Page)
    const projectsList = document.getElementById('projects-list');
    if (projectsList && window.SITE_DATA) {

        SITE_DATA.projects.forEach(project => {
            // Create Card
            const card = document.createElement('a');
            card.href = `project.html?id=${project.id}`;
            card.className = 'project-card';

            card.innerHTML = `
                <div class="project-thumb-container">
                    <img src="${project.thumbnail}" alt="${project.title}" class="project-thumb" loading="lazy">
                </div>
                <h3 class="project-title">${project.title}</h3>
                <p class="project-desc">${project.shortDescription}</p>
            `;

            projectsList.appendChild(card);
        });
    }

    // 3. Populate Footer Data (Global)
    const footerEmail = document.getElementById('footer-email');
    if (footerEmail && SITE_DATA.profile.cta.email) {
        // footerEmail.textContent = SITE_DATA.profile.cta.email;
        footerEmail.innerHTML = `<img src="assets/images/mail-sharp.svg" alt="" style="width: 32px; margin-right: 12px;"> ${SITE_DATA.profile.cta.email}`;
        footerEmail.href = `mailto:${SITE_DATA.profile.cta.email}`;
    }
    // 4. Mobile Menu Toggle
    const menuToggle = document.querySelector('.menu-toggle');
    const navUl = document.querySelector('nav ul');
    if (menuToggle && navUl) {
        menuToggle.addEventListener('click', () => {
            navUl.classList.toggle('show');
            if (navUl.classList.contains('show')) {
                menuToggle.textContent = 'CLOSE';
            } else {
                menuToggle.textContent = 'MENU';
            }
        });

        // Close on link click
        navUl.querySelectorAll('a').forEach(link => {
            link.addEventListener('click', () => {
                navUl.classList.remove('show');
                menuToggle.textContent = 'MENU';
            });
        });
    }
});
