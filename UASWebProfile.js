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
                Second semester student who is already stressed thinking about his assignments, 
                but still survives and enjoys his life
            </p>
        </div>
    </div>
`;
}
    
function portfolioPage(){
    return `
    <h2 class="section-title">My Portfolio</h2>
    <p class="section-subtitle">Here are some project that i have made</P>
    <div class="portfolio-grid">
        <div class="project-card">
            <h3>Warehouse Stock Management</h3>
            <p>Simple Python-Based CLI for Managing Inventory.</p>
        </div>
        <div class="project-card">
            <h3>Food Delivery</h3>
            <p>Simulation of Food Delivery Services Like GrabFood Using Pyhton</p>
        </div>
        <div class="project-card">
            <h3>Internet Cafe Billing System</h3>
            <p>A Visual Basic application for Managing Billing At Internet Cafe Integrated with SQL Server</p>
        </div>
    </div>
`;
}
        
function servicePage(){
    return `
    <h2 class="section-title">What Can I Do?</h2>
    <div class="service-grid">
        <div class="service-card">
            <h3>Data Structure</h3>
            <p>Implementing efficient data structures to solve programming case.</p>
        </div>
        <div class="service-card">
            <h3>Algorithm & Programming</h3>
            <p>Developing logical and structured programs using programming fundamentals</p>
        </div>
        <div class="service-card">
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
            <p>
                stevencau1837@gmail.com
            </p>
            <p>
                Medan, Indonesia
            </p>
        </div>
        <form class="contact-form">
            <input type="text" placeholder="Your Name">
            <input type="email" placeholder="Your Email">
            <textarea rows="6" placeholder="Your Message"></textarea>
            <button>Send Message</button>
        </form>
    </div>`;
}

const contentData = {
    about: aboutPage,
    portfolio: portfolioPage,
    service: servicePage,
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