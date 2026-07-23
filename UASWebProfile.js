const menuToggle = document.getElementById('menuToggle');
const sidebar = document.getElementById('sidebar');
const overlay = document.getElementById('mobileOverlay');

function toggleMenu(){
	const isOpen = sidebar.classList.toggle('open');
    overlay.classList.toggle('active', isOpen); 
    menuToggle.textContent = isOpen ? '✕' : '☰';
}

function closeMenu(){
	sidebar.classList.remove('open');
	overlay.classList.remove('active');
	menuToggle.textContent = '☰';
}

menuToggle.addEventListener('click', toggleMenu);
overlay.addEventListener('click', closeMenu);


const navItems = document.querySelectorAll('.nav-item');
const content = document.getElementById('dynamicContent')

function aboutPage(){
    return `
    <div class="hero">
        <div class="hero-image">
            <img src="images/profile.jpeg" alt="Profile">
        </div>
        <div class="hero-content">
            <h1 class="section-title">Hello, I'm Steven.</h1>
            <h2>College Student</h2>
            <p class="section-subtitle">
                Second-semester student who is already stressed thinking about his assignments, 
                but still survives and enjoys his life
            </p>
            <div class="about-info">
                <div class="info-item">
                    <span class="info-title">University</span>
                    <span class="info-value">IBBI University</span>
                </div>
                <div class="info-item">
                    <span class="info-title">Major</span>
                    <span class="info-value">Information Systems</span>
                </div>
                <div class="info-item">
                    <span class="info-title">Semester</span>
                    <span class="info-value">2</span>
                </div>
                <div class="info-item">
                    <span class="info-title">Hobby</span>
                    <span class="info-value">Gaming, Watching, Photography</span>
                </div>
            </div>
        </div>
    </div>
`;
}
    
function portfolioPage(){
    return `
    <h2 class="section-title">My Portfolio</h2>
    <p class="section-subtitle">Here are some project that i have completed</P>
    <div class="portfolio-grid">
        <div class="project-card">
            <img src="images/project1.png" alt="Warehouse Stock Management">
            <h3>Warehouse Stock Management</h3>
            <p>Simple Python-Based CLI for Managing Inventory.</p>
        </div>
        <div class="project-card">
            <img src="images/project2.png" alt="Food Delivery System">
            <h3>Food Delivery System</h3>
            <p>Simulation of Food Delivery Services Like GrabFood Using Python</p>
        </div>
        <div class="project-card">
            <img src="images/project3.png" alt="Internet Cafe Billing System">
            <h3>Internet Cafe Billing System</h3>
            <p>A Visual Basic application for Managing Billing At Internet Cafe Integrated with SQL Server</p>
        </div>
    </div>
`;
}
        
function coursePage(){
    return `
    <h2 class="section-title">What Do I Learn?</h2>
    <div class="course-grid">
        <div class="course-card">
            <img src="images/icon1.png" class="course-icon">
            <h3>Buddhist Education</h3>
            <p>Learning Buddhist Value, Events according to Buddhist View, and Biographies of Buddhist figures.</p>
        </div>
        <div class="course-card">
            <img src="images/icon2.png" class="course-icon">
            <h3>English</h3>
            <p>Improving English communication skills in academic and professional fields.</p>
        </div>
        <div class="course-card">
            <img src="images/icon3.png" class="course-icon">
            <h3>Data Structure</h3>
            <p>Implementing efficient data structures to solve programming problems.</p>
        </div>
        <div class="course-card">
            <img src="images/icon4.png" class="course-icon">
            <h3>System Analysis & Design</h3>
            <p>Learning UML Diagrams and Information System Development processes.</p>
        </div>
        <div class="course-card">
            <img src="images/icon5.png" class="course-icon">
            <h3>Statistics & Probability</h3>
            <p>Analyzing data using probability distribution and using correct statistical methods.</p>
        </div>
        <div class="course-card">
            <img src="images/icon6.png" class="course-icon">
            <h3>Visual Programming</h3>
            <p>Building desktop applications using Visual Basic integrated with SQL Server.</p>
        </div>
        <div class="course-card">
            <img src="images/icon7.png" class="course-icon">
            <h3>Web Design</h3>
            <p>Creating simple responsive website using HTML, CSS, and JavaScript.</p>
        </div>
    </div>
`;
}

function contactPage(){
    return `
    <h2 class="section-title">Contact Me</h2>
    <p class="section-subtitle">Feel free to get in touch.</p>
    <div class="contact-container">
        <div class="contact-info">
            <h3>Information</h3>
            <div class="contact-item">
                <img src="images/email.png" alt="">
                <span><a href="mailto:stevencau1837@gmail.com">stevencau1837@gmail.com</a></span>
            </div>
            <div class="contact-item">
                <img src="images/location.png" alt="">
                <span>Medan, Indonesia</span>
            </div>
            <div class="social-media">
                <a href="https://github.com/vevenauuu" target="_blank"><img src="images/github.png"></a>
                <a href="https://www.instagram.com/acces.meee?igsh=MWN3aHRxbzFraTN5dQ==" target="_blank"><img src="images/instagram.png"></a>
            </div>
        </div>
        <form class="contact-form">
            <input type="text" placeholder="Your Name" required>
            <input type="email" placeholder="Your Email" required>
            <textarea rows="6" placeholder="Your Message" required></textarea>
            <button type="submit">Send Message</button>
        </form>
    </div>
`;
}

const contentData = {
    about: aboutPage,
    portfolio: portfolioPage,
    service: coursePage,
    contact: contactPage
};

function loadPage(page){
    if (contentData[page]){
        content.innerHTML = contentData[page]();
    }
}

navItems.forEach(item=>{
	item.addEventListener('click',(e)=>{
		e.preventDefault();
		navItems.forEach(i=>i.classList.remove('active'));
		item.classList.add('active');
		const page = item.dataset.page;
        loadPage(page)
        closeMenu()
	});
});

loadPage("about");
