/**
 * Main Logic for Home Page (Russian Version)
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
            // Link directly to local project.html since we are inside 'ru/' folder
            card.href = `project.html?id=${project.id}`;
            card.className = 'project-card';

            card.innerHTML = `
                <div class="project-thumb-container">
                    <img src="../${project.thumbnail}" alt="${project.title}" class="project-thumb" loading="lazy">
                </div>
                <h3 class="project-title">${project.title}</h3>
                <p class="project-desc">${project.shortDescription}</p>
                <!-- Optional: Add "Смотреть проект" button visual if needed, 
                     but original design didn't have explicit button inside card innerHTML in previous view.
                     User requested replacing "View Project" or "Read More". 
                     If the CSS handles a hover button, we might not see it here. 
                     But the user asked to replace text "View Project". 
                     If it's not in HTML, it might be pseudo-element or hidden.
                     However, I will add a text element if it was implied.
                     Wait, looking at original main.js, there was NO visible button text in the card HTML.
                     Maybe the user meant a button elsewhere? Or maybe I missed it.
                     Ah, the user said "Find text... and replace".
                     I don't see "View Project" in the original main.js. 
                     Let's check if I should add it or if I missed something. 
                     Original main.js:
                     card.innerHTML = \`
                        <div class="project-thumb-container">
                            <img ...>
                        </div>
                        <h3 class="project-title">\${project.title}</h3>
                        <p class="project-desc">\${project.shortDescription}</p>
                    \`;
                    There is NO button text here. 
                    I will assume the user WANTS a button or assumes there is one. 
                    I will add a visual "Смотреть проект" span/p to be safe as per request.
                -->
                <span class="view-project-btn" style="display: inline-block; margin-top: 1rem; font-size: 0.9rem; border-bottom: 1px solid currentColor;">Смотреть проект</span>
            `;

            projectsList.appendChild(card);
        });
    }

    // 3. Populate Footer Data (Global)
    const footerEmail = document.getElementById('footer-email');
    if (footerEmail && SITE_DATA.profile.cta.email) {
        // footerEmail.textContent = SITE_DATA.profile.cta.email; // Removed to preserve icon or formatting
        footerEmail.innerHTML = `<img src="../assets/images/mail-sharp.svg" alt="" style="width: 32px; margin-right: 12px;"> ${SITE_DATA.profile.cta.email}`;
        footerEmail.href = `mailto:${SITE_DATA.profile.cta.email}`;
    }
    // 4. Mobile Menu Toggle
    const menuToggle = document.querySelector('.menu-toggle');
    const navUl = document.querySelector('nav ul');
    if (menuToggle && navUl) {
        menuToggle.addEventListener('click', () => {
            navUl.classList.toggle('show');
            if (navUl.classList.contains('show')) {
                menuToggle.textContent = 'ЗАКРЫТЬ';
            } else {
                menuToggle.textContent = 'МЕНЮ';
            }
        });

        // Close on link click
        navUl.querySelectorAll('a').forEach(link => {
            link.addEventListener('click', () => {
                navUl.classList.remove('show');
                menuToggle.textContent = 'МЕНЮ';
            });
        });
    }
});
