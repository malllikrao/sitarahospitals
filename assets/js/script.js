/* Data Arrays - UPDATED based on brochure and directory board image data */

const SPECIALITIES = [
    "Emergency & Critical Care",
    "General Medicine & Diabetology",
    "General Surgery & Laparoscopic Surgery",
    "E.N.T. (Ear, Nose, and Throat)",
    "Orthopedics & Joint Replacement (Computer Navigation)",
    "Medical & Surgical Gastroenterology",
    "Urology & Nephrology",
    "Neurosurgery & Neurology",
    "Plastic & Reconstructive Surgery",
    "Surgical Oncology",
    "Pulmonology",
    "Maxillofacial Surgery",
];

// Replaced the old SERVICES list with ALL SPECIALITIES to meet the user request.
const SERVICES = SPECIALITIES.map(name => {
    // FINALIZED ICON MAP: All 16 specialities have unique, appropriate Lucide icons.
    const iconMap = {
        "Orthopedics": "bone",
        "Cardiology": "heart-pulse",
        "Gastroenterology": "stomach",
        "Emergency": "siren",
        "Urology": "kidney",
        "Nephrology": "kidney",
        "Neurosurgery": "brain",
        "Neurology": "brain",
        "Surgical Oncology": "flask-conical", // Specialized treatment/oncology
        "Plastic": "zap",
        "General Medicine": "stethoscope",
        "Diabetology": "syringe",
        "Gynaecology": "baby",
        "Obstetrics": "baby",
        "E.N.T.": "ear",
        "Pulmonology": "lungs",
        "Vascular": "activity",
        "Maxillofacial": "smile",
        "Poly Trauma": "ambulance",
        "General Surgery": "scalpel",
        "Laparoscopic": "scalpel"
    };

    // IMPROVED LOGIC: Check for the longest matching key first to prioritize specific icons
    let matchingKey = "layout-list"; // Default if no match is found

    // Sort keys by length descending to prioritize more specific matches (e.g., "General Surgery" over "Surgery")
    const sortedKeys = Object.keys(iconMap).sort((a, b) => b.length - a.length);

    for (const key of sortedKeys) {
        // Use a case-insensitive check to be robust
        if (name.toLowerCase().includes(key.toLowerCase())) {
            matchingKey = key;
            break;
        }
    }

    // --- UPDATED LOGIC: Specific Image Placeholders for Missing/Custom Icons ---
    let customImage = undefined;

    // 1. General Surgery & Laparoscopic Surgery
    if (name.includes("General Surgery")) customImage = "../assets/images/operating-room.png"; // Note: Path will be corrected by getRelativePath

    // 2. Urology & Nephrology
    if (name.includes("Urology & Nephrology")) customImage = "../assets/images/urology_4664887.png";

    // 3. Pulmonology
    if (name.includes("Pulmonology")) customImage = "../assets/images/disease_14437788.png";

    // Medical & Surgical Gastroenterology (Keeping this as a custom image is fine)
    if (name.includes("Gastroenterology")) customImage = "../assets/images/stomach.png";
    
    // Emergency & Critical Care (Using the 'siren' icon is fine, but adding the image for consistency)
    if (name.includes("Emergency & Critical Care")) customImage = "../assets/images/emergency-kit_18325086.png";


    return {
        name: name,
        icon: iconMap[matchingKey],
        description: `Comprehensive diagnostic and therapeutic services for ${name}. Consult with our expert team today.`,
        // Store path with a relative prefix for ease of correction later
        image: customImage ? customImage.replace('../', '') : undefined 
    };
});


const DOCTORS = [
    { name: "Dr. Venkata Bharadwaj", specialty: "General Medicine", degree: "MBBS, DNB General Medicine", image: "assets/images/placeholder-male.jpg" },
    { name: "Dr. Jadhav Rajkumar", specialty: "ENT (Ear, Nose, Throat)", degree: "MBBS, MS ENT", image: "assets/images/placeholder-male.jpg" },
    { name: "Dr. M. Rajkumar", specialty: "General & Laparoscopic Surgery", degree: "MBBS, MS General Surgery", image: "assets/images/placeholder-male.jpg" },
    { name: "Dr. Sudheer Dwarak", specialty: "Orthopedics", degree: "Dip. in Ortho, DNB Ortho (Computer Navigation Specialist)", image: "assets/images/placeholder-male.jpg" },
    { name: "Dr. Nataraj Goud", specialty: "Gastroenterology", degree: "MBBS, MD, DNB (Med. Gastroenterology)", image: "assets/images/placeholder-male.jpg" },
    { name: "Dr. Ch. Srikanth", specialty: "Anesthesia & Critical Care", degree: "MBBS, MD Anesthesia", image: "assets/images/placeholder-male.jpg" },
    { name: "Dr. R. Nishanth", specialty: "Maxillofacial Surgeon", degree: "MDS, Fellow in Maxillofacial Surgery", image: "assets/images/placeholder-male.jpg" },
    { name: "Dr. Ch. Praveen Kumar", specialty: "Pulmonologist", degree: "MBBS MD (Pulmonology)", image: "assets/images/placeholder-male.jpg" },
    { name: "Dr. Vamsichandra .B", specialty: "Urologist", degree: "MCh, MS, DNB Urology", image: "assets/images/placeholder-male.jpg" },
    { name: "Dr. Hanuma", specialty: "Neuro Surgeon", degree: "MBBS, MS, MCh Consultant Neuro-Surgeon", image: "assets/images/placeholder-male.jpg" },
    { name: "Dr. Prashanth Kumar", specialty: "Surgical Oncologist", degree: "MS, MCh Consultant Surgical Oncologist", image: "assets/images/placeholder-male.jpg" },
    { name: "Dr. Ashok Reddy", specialty: "Plastic Surgeon", degree: "MCh Consultant Plastic Surgeon", image: "assets/images/placeholder-male.jpg" },
    { name: "Dr. Divya Reddy B.", specialty: "Nephrology", degree: "MBBS, DNB General Medicine (Consultant Nephrologist)", image: "assets/images/placeholder-female.jpg" },
    { name: "Dr. Avani Bhardwaj", specialty: "Gynaecologist & Infertility Specialist", degree: "MBBS, DNB, OBG", image: "assets/images/placeholder-female.jpg" },
    
];

const TESTIMONIALS = [
    { quote: "The best orthopedic care I've ever received. The computer navigation joint replacement was flawless, and the staff's kindness made recovery easy.", name: "G. Mahesh Babu", location: "Warangal" },
    { quote: "Outstanding Critical Care. The doctors and nurses managed a severe emergency with professionalism and compassion. True heroes!", name: "K. Sowmya", location: "Karimnagar" },
    { quote: "Very professional and patient-friendly. Dr. Kiran's guidance for my stomach issue was clear and effective. Highly recommend Sitara for GI problems.", name: "R. Srinivas Rao", location: "Peddapally" },
    { quote: "The hospital staff was highly dedicated and the facilities were top-notch. I felt well cared for during my entire recovery.", name: "V. Lakshmi", location: "Mancherial" },
];

const FACILITIES = [
    { name: "Advanced ICU & Ventilators", icon: "activity-square", description: "24/7 monitoring, ventilators, and dedicated critical care specialists." },
    { name: "Computer Navigation Surgery", icon: "target", description: "Precision technology for Orthopedic (Joint Replacement) procedures." },
    { name: "Digital C-ARM & X-Ray", icon: "scan-line", description: "Real-time intraoperative imaging and high-resolution digital X-ray services." },
    { name: "Modular Operation Theatres", icon: "maximize", description: "State-of-the-art sterile surgical environments with laminar flow." },
    { name: "2D ECHO & Color Doppler", icon: "heart-handshake", description: "Advanced cardiovascular and vascular diagnostic imaging services." },
    { name: "24 Hrs Ambulance", icon: "bus-front", description: "Quick access and transport for emergency patients." },
    { name: "Multipara Monitors", icon: "gauge", description: "Continuous patient physiological monitoring across all wards." }
];

const HERO_IMAGES = [
    "assets/images/sitara1.jpg",
    "assets/images/sitara2.jpg",
    "assets/images/sitara3.jpg",
    "assets/images/sitara4.jpg",
];

/* Global Variables for Sliders */
let currentTestimonialIndex = 0;
let testimonialInterval;
let doctorScrollInterval;

/* Helper Functions */

/**
 * Creates a URL-friendly slug from a speciality name.
 * e.g., "Orthopedics & Joint Replacement" -> "orthopedics-joint-replacement"
 * @param {string} text - The input string (specialty name).
 * @returns {string} - The slug.
 */
function slugify(text) {
    return text.toLowerCase()
        .replace(/[^a-z0-9\s-]/g, '') // Remove all non-word chars except hyphens
        .trim() // Trim whitespace from both sides
        .replace(/[\s&]+/g, '-'); // Replace spaces and & with a single hyphen
}

/**
 * FIX: Determines the correct relative path prefix for navigating to files.
 * If on index.html (root), prefix is ''. If on services/ortho.html, prefix is '../'.
 * @param {string} targetPage - The target URL fragment (e.g., 'index.html', 'services/cardiology.html').
 * @returns {string} The corrected URL path.
 */
function getRelativePath(targetPage) {
    // Check if the current page path includes '/services/'
    const isServicePage = window.location.pathname.includes('/services/');
    
    // If we are on a service page, all links to root folders need a '../' prefix.
    const pathPrefix = isServicePage ? '../' : '';

    // If the target is the index.html page or a root-level asset
    if (targetPage.startsWith('index.html') || targetPage.startsWith('assets/')) {
        return pathPrefix + targetPage;
    } 
    
    // If the target is another service page (which is in the services folder)
    if (targetPage.startsWith('services/')) {
        // If we're already on a service page, we just need './' or no prefix at all
        if (isServicePage) {
            // Remove the 'services/' from the front if on a service page
            return targetPage.replace('services/', ''); 
        } else {
            // If on the index page, just return the path as is
            return targetPage;
        }
    }
    
    // Default case
    return targetPage;
}


/**
 * Handles the click-to-scroll functionality for scrollers.
 * NOTE: This is used for BOTH Services (manual) and Doctors (manual override)
 * @param {string} scrollerId - The ID of the scrolling container.
 * @param {string} direction - 'next' or 'prev'.
 */
function scrollHandler(scrollerId, direction) {
    const scroller = document.getElementById(scrollerId);
    if (!scroller) return;

    // Get the first visible child element
    const firstChild = scroller.querySelector(':scope > *:not([style*="display: none"])');
    if (!firstChild) return;

    // Calculate the scroll step: element width + margin-right (24px for mr-6)
    const cardWidth = firstChild.offsetWidth;
    const gap = 24; // Tailwind's mr-6 on card elements is 1.5rem = 24px.
    const scrollDistance = cardWidth + gap;

    // Clear auto-scroll if manually scrolling the doctor list
    if (scrollerId === 'doctors-scroller') {
        clearInterval(doctorScrollInterval);
        // RE-START auto-scroll after a short delay on manual interaction
        setTimeout(setupDoctorAutoScroll, 5000); 
    }


    if (direction === 'next') {
        scroller.scrollBy({ left: scrollDistance, behavior: 'smooth' });
    } else if (direction === 'prev') {
        scroller.scrollBy({ left: -scrollDistance, behavior: 'smooth' });
    }
}


/* Dynamic Content Rendering */

/**
 * Renders the service links in the desktop/mobile header dropdowns and the appointment form's select options.
 * CRUCIAL: Uses the `getRelativePath` for robust navigation.
 */
function renderSpecialties() {
    const servicesDropdown = document.querySelector('.services-dropdown');
    const mobileDropdown = document.getElementById('mobile-services-dropdown');
    const specialitySelect = document.getElementById('speciality');

    let desktopDropdownHtml = '';
    let mobileDropdownHtml = ''; 
    let selectOptionsHtml = '<option value="" selected disabled>Select a speciality</option>';

    SPECIALITIES.forEach((specialty) => {
        // Create the URL for the dedicated page, e.g., services/cardiology.html
        const servicePageUrl = getRelativePath(`services/${slugify(specialty)}.html`);
        
        // Desktop Dropdowns (Dark text on secondary/white background)
        desktopDropdownHtml += `<a href="${servicePageUrl}" class="block px-4 py-2 text-st-dark-text hover:bg-st-primary hover:text-st-white transition duration-200">${specialty}</a>`;

        // Mobile Dropdown Links (White text for the red menu background)
        // NOTE: These links are also selected by navLinks in setupMobileMenu
        mobileDropdownHtml += `<a href="${servicePageUrl}" class="mobile-nav-link block py-2 pl-4 text-st-white hover:bg-st-secondary/50 rounded transition font-medium">${specialty}</a>`;

        // Select Options (Appointment form)
        selectOptionsHtml += `<option value="${specialty}">${specialty}</option>`;

    });

    if (servicesDropdown) servicesDropdown.innerHTML = desktopDropdownHtml;
    // Inject the correctly styled mobile links
    if (mobileDropdown) mobileDropdown.innerHTML = mobileDropdownHtml;
    if (specialitySelect) specialitySelect.innerHTML = selectOptionsHtml;
}

/**
 * Renders ALL services in the SERVICES array for the main services scroller section.
 * CRUCIAL: Uses the `getRelativePath` for robust navigation.
 */
function renderServices() {
    const scroller = document.getElementById('services-scroller');
    if (!scroller) return;

    scroller.innerHTML = SERVICES.map(service => {
        const servicePageUrl = getRelativePath(`services/${slugify(service.name)}.html`);
        let iconOrImageHtml = '';
        
        // FIX: Correctly prepend the relative path prefix to the image source
        const imageSrc = service.image ? getRelativePath(service.image) : '';
        
        if (service.image) {
            // --- Use custom image if 'image' property is present ---
            iconOrImageHtml = `<img src="${imageSrc}" alt="${service.name} Icon" class="w-12 h-12 object-contain mb-4 text-st-primary group-hover:filter group-hover:brightness-90 transition">`;
        } else {
            // --- Use Lucide icon as fallback ---
            iconOrImageHtml = `<i data-lucide="${service.icon}" class="w-12 h-12 text-st-primary mb-4 group-hover:text-st-secondary transition"></i>`;
        }

        return `
            <a href="${servicePageUrl}" class="flex-shrink-0 w-80 sm:w-96 p-8 bg-st-white rounded-xl shadow-lg border-t-4 border-st-secondary hover:shadow-2xl transition duration-500 snap-start transform hover:scale-[1.02] mr-6 block group">
                ${iconOrImageHtml}
                <h3 class="text-2xl font-extrabold text-st-dark-text mb-3">${service.name}</h3>
                <p class="text-base text-st-light-text mb-4">${service.description}</p>
                <span class="mt-4 inline-flex items-center text-st-secondary font-semibold group-hover:text-st-primary transition">
                    Learn More <i data-lucide="arrow-right" class="ml-2 w-4 h-4"></i>
                </span>
            </a>
        `;
    }).join('');

    // Rerun Lucide to ensure all new icons are rendered
    lucide.createIcons();
}

/**
 * Renders doctors list twice for seamless auto-scrolling loop.
 */
function renderDoctors() {
    const scroller = document.getElementById('doctors-scroller');
    if (!scroller) return;

    // FIX: Correctly prepend the relative path prefix to the image source
    const getDoctorImagePath = (imagePath) => getRelativePath(imagePath);

    const cardsHtml = DOCTORS.map(doctor => `
        <div class="doctor-card flex-shrink-0 w-72 mr-6 bg-st-white rounded-xl shadow-lg overflow-hidden border-b-4 border-st-primary snap-start transform transition duration-300 hover:shadow-2xl">
            <img src="${getDoctorImagePath(doctor.image)}" alt="Dr. ${doctor.name}" class="w-full h-72 object-cover object-top">
            <div class="p-6 text-center">
                <h3 class="text-xl font-bold text-st-dark-text mb-1">${doctor.name}</h3>
                <p class="text-st-primary font-semibold text-base">${doctor.specialty}</p>
                <p class="text-sm text-st-light-text mb-4 truncate">${doctor.degree}</p>
                <a href="#appointments" class="inline-flex items-center px-4 py-2 bg-st-secondary text-st-white font-medium rounded-full text-sm hover:bg-green-700 transition">
                    Book Now <i data-lucide="calendar" class="ml-2 w-4 h-4"></i>
                </a>
            </div>
        </div>
    `).join('');

    // Append the list twice to create a seamless loop effect for auto-scroll
    scroller.innerHTML = cardsHtml + cardsHtml;
}

/**
 * Sets up the continuous auto-scrolling for the doctors section using JavaScript intervals.
 * Note: If the user manually scrolls, the interval is cleared in scrollHandler.
 */
function setupDoctorAutoScroll() {
    const scroller = document.getElementById('doctors-scroller');
    const firstCard = scroller?.querySelector('.doctor-card');

    if (!scroller || !firstCard) return;

    // Clear any existing interval to prevent duplicates
    clearInterval(doctorScrollInterval);

    const cardWidth = firstCard.offsetWidth;
    const gap = 24; // Corresponds to Tailwind's mr-6
    const scrollStep = cardWidth + gap;

    // Total width of the original, non-duplicated doctor list
    const totalOriginalWidth = DOCTORS.length * scrollStep;

    // Start auto-scroll interval
    doctorScrollInterval = setInterval(() => {
        // Scroll forward one step
        scroller.scrollBy({ left: scrollStep, behavior: 'smooth' });

        // If we reach the start of the duplicate section, instantly jump back to the start (0)
        // This must be done slightly after the scroll starts.
        setTimeout(() => {
            if (scroller.scrollLeft >= totalOriginalWidth - (scrollStep / 2)) {
                scroller.scrollLeft = 0;
            }
        }, 300); // 300ms is enough to allow the smooth scroll to start

    }, 3500); // Scroll every 3.5 seconds (adjust speed as needed)

    // Pause scroll on hover
    scroller.addEventListener('mouseenter', () => clearInterval(doctorScrollInterval));
    // The scrollHandler now handles the re-starting of the interval on mouseleave/manual scroll
}


function renderTestimonials() {
    const display = document.getElementById('testimonial-display');
    if (!display) return;

    // The single testimonial card content
    const testimonial = TESTIMONIALS[currentTestimonialIndex];

    display.innerHTML = `
        <i data-lucide="quote" class="w-8 h-8 text-st-primary mb-4"></i>
        <p class="text-xl italic text-st-dark-text mb-6 leading-relaxed">"${testimonial.quote}"</p>
        <div class="flex items-center">
            <div class="w-2 h-2 rounded-full bg-st-secondary mr-3"></div>
            <div>
                <p class="font-bold text-st-dark-text">${testimonial.name}</p>
                <p class="text-sm text-st-light-text">${testimonial.location}, Patient</p>
            </div>
        </div>
    `;

    // Reset and restart the auto-timer after manual or auto-navigation
    clearInterval(testimonialInterval);
    testimonialInterval = setInterval(() => updateTestimonial('next'), 7000);

    // Ensure Lucide icons are re-created for the new content
    lucide.createIcons();
}

/**
 * Handles the actual testimonial slide update logic (forward or backward)
 */
function updateTestimonial(direction) {
    const display = document.getElementById('testimonial-display');
    if (!display) return;

    // 1. Start fade-out
    display.classList.remove('opacity-100');
    display.classList.add('opacity-0');

    setTimeout(() => {
        // 2. Update index after fade-out
        if (direction === 'next') {
            currentTestimonialIndex = (currentTestimonialIndex + 1) % TESTIMONIALS.length;
        } else if (direction === 'prev') {
            currentTestimonialIndex = (currentTestimonialIndex - 1 + TESTIMONIALS.length) % TESTIMONIALS.length;
        }

        // 3. Render new content (which restarts the interval)
        renderTestimonials();

        // 4. Start fade-in for the new content
        display.classList.remove('opacity-0');
        display.classList.add('opacity-100');
    }, 500); // Match CSS transition duration
}

function renderFacilities() {
    const grid = document.getElementById('facilities-grid');
    if (!grid) return;

    grid.innerHTML = FACILITIES.map(facility => `
        <div class="p-6 bg-st-white rounded-xl shadow-lg border-l-4 border-st-secondary transform hover:shadow-xl hover:scale-[1.02] transition duration-300">
            <i data-lucide="${facility.icon}" class="w-8 h-8 text-st-primary mb-3"></i>
            <h3 class="text-xl font-bold text-st-dark-text mb-2">${facility.name}</h3>
            <p class="text-base text-st-light-text">${facility.description}</p>
        </div>
    `).join('');
}

/* Event Handlers */

function setupScrollNavigation() {
    // Services Scroller (Manual Carousel)
    document.getElementById('prev-service')?.addEventListener('click', () => scrollHandler('services-scroller', 'prev'));
    document.getElementById('next-service')?.addEventListener('click', () => scrollHandler('services-scroller', 'next'));

    // Doctors Scroller (Manual Override - will clear auto-scroll temporarily)
    document.getElementById('prev-doctor')?.addEventListener('click', () => scrollHandler('doctors-scroller', 'prev'));
    document.getElementById('next-doctor')?.addEventListener('click', () => scrollHandler('doctors-scroller', 'next'));

    // Testimonials Manual Navigation
    document.getElementById('prev-testimonial')?.addEventListener('click', () => updateTestimonial('prev'));
    document.getElementById('next-testimonial')?.addEventListener('click', () => updateTestimonial('next'));
}

// --------------------------------------------------------------------------------------------------
// Mobile Menu Fix (Touch Bleed/Auto-Touch)
// --------------------------------------------------------------------------------------------------

/**
 * UPDATED FIX: Mobile menu logic to ensure the menu closes INSTANTLY on link click, 
 * AND prevents accidental taps when opening the menu.
 */
function setupMobileMenu() {
    const menuButton = document.getElementById('mobile-menu-button');
    const mobileMenu = document.getElementById('mobile-menu');
    const serviceToggle = document.getElementById('mobile-services-dropdown-toggle');
    const serviceDropdown = document.getElementById('mobile-services-dropdown');

    // Query all links inside the mobile menu for closing logic
    const navLinks = mobileMenu ? mobileMenu.querySelectorAll('a') : [];

    // 1. Main Menu Toggle Logic (CRITICAL FIX ADDED HERE)
    if (menuButton && mobileMenu) {
        menuButton.addEventListener('click', (e) => {
            // CRITICAL FIX: Stop the click event from registering on elements below 
            // the button, which prevents the auto-touch/navigation bug upon opening.
            e.preventDefault(); 
            e.stopPropagation(); 

            mobileMenu.classList.toggle('hidden');
            // Ensure dropdown is hidden when the main menu is closed
            if (mobileMenu.classList.contains('hidden') && serviceDropdown && serviceDropdown.classList.contains('block')) {
                // FIX: Use 'max-h-0' instead of 'hidden' to smoothly collapse the dropdown
                serviceDropdown.classList.remove('block', 'max-h-60');
                serviceDropdown.classList.add('hidden', 'max-h-0');

                const icon = serviceToggle.querySelector('.mobile-dropdown-icon');
                if(icon) icon.classList.remove('rotate-180');
            }
        });
    }

    // 2. Specialty Dropdown Toggle Logic (UPDATED FOR SCROLLING/HEIGHT CLASSES)
    if (serviceToggle && serviceDropdown) {
        serviceToggle.addEventListener('click', (e) => {
            e.preventDefault(); // Prevent default link behavior
            e.stopPropagation(); // Prevent touch bleed/propogation

            const isHidden = serviceDropdown.classList.contains('hidden');
            
            if (isHidden) {
                // Show/Expand
                serviceDropdown.classList.remove('hidden', 'max-h-0');
                // Use a short timeout to trigger the CSS transition
                setTimeout(() => {
                    serviceDropdown.classList.add('block', 'max-h-60');
                }, 10);
                
            } else {
                // Hide/Collapse
                serviceDropdown.classList.remove('block', 'max-h-60');
                serviceDropdown.classList.add('max-h-0');
                // Use a timeout matching the transition duration (500ms) to re-add 'hidden'
                setTimeout(() => {
                    serviceDropdown.classList.add('hidden');
                }, 500); 
            }

            const icon = serviceToggle.querySelector('.mobile-dropdown-icon');
            if(icon) icon.classList.toggle('rotate-180');
        });
    }

    // 3. Close menu INSTANTLY on any link click (The previous, necessary fix)
    navLinks.forEach(link => {
        link.addEventListener('click', () => {
            // Close the main menu instantly
            if (mobileMenu && !mobileMenu.classList.contains('hidden')) {
                mobileMenu.classList.add('hidden');
            }
            // Close the specialty dropdown if it's open (use the transition collapse logic)
            if(serviceDropdown && !serviceDropdown.classList.contains('hidden')) {
                serviceDropdown.classList.remove('block', 'max-h-60');
                serviceDropdown.classList.add('max-h-0');
                 setTimeout(() => {
                    serviceDropdown.classList.add('hidden');
                }, 500); 
                
                const icon = serviceToggle?.querySelector('.mobile-dropdown-icon');
                if(icon) icon.classList.remove('rotate-180');
            }
        });
    });
}

// --------------------------------------------------------------------------------------------------
// Hero Slider Fix (Image Stacking)
// --------------------------------------------------------------------------------------------------

/* Hero Image Slider */

function setupHeroSlider() {
    const slider = document.getElementById('hero-slider');
    // Exit if element doesn't exist (i.e., we are on a service page)
    if (!slider) return;

    let currentImageIndex = 0;
    const transitionDuration = 1000; // Match CSS transition duration

    // Use a specific class for slide images to reliably target them
    const SLIDE_CLASS = 'hero-slide'; 

    // Function to create and insert a slide image
    const createSlideImage = (index, isInitial) => {
        const imageUrl = getRelativePath(HERO_IMAGES[index]);
        const img = document.createElement('img');
        img.src = imageUrl;
        
        let classList = `absolute inset-0 w-full h-full object-cover transition-opacity duration-1000 ease-in-out ${SLIDE_CLASS}`;
        
        if (isInitial) {
            classList += ' opacity-100';
        } else {
            classList += ' opacity-0';
        }

        img.className = classList;
        img.style.zIndex = '0';
        
        // Find the overlay (assuming it has a specific class like 'hero-overlay' or is the non-image child)
        const overlay = slider.querySelector(':not(img):not(.hero-slide)'); 
        
        if (overlay) {
             slider.insertBefore(img, overlay);
        } else {
             // Fallback: prepend if overlay isn't found
             slider.prepend(img);
        }
        
        return img;
    };

    const updateSlider = () => {
        // CRITICAL FIX: Find the image that is currently VISIBLE
        const currentImg = slider.querySelector(`.${SLIDE_CLASS}.opacity-100`);
        const nextImageIndex = (currentImageIndex + 1) % HERO_IMAGES.length;

        // 1. Create and insert the next image (it starts with opacity-0)
        const nextImg = createSlideImage(nextImageIndex, false);

        // 2. Fade the new image in
        setTimeout(() => {
            nextImg.classList.remove('opacity-0');
            nextImg.classList.add('opacity-100');
        }, 50); 

        // 3. Fade the old image out and remove it
        if (currentImg) {
            currentImg.classList.remove('opacity-100');
            currentImg.classList.add('opacity-0');

            // Remove the old image after its transition is complete
            setTimeout(() => {
                currentImg.remove();
            }, transitionDuration + 50); 
        }

        // 4. Update index for the next cycle
        currentImageIndex = nextImageIndex;
    };

    // Initial load: Create and insert the first image
    createSlideImage(0, true);

    // Set the interval for the slide change
    setInterval(updateSlider, 6000); // Change image every 6 seconds
}


/**
 * UPDATED: Handles form submission, sending data to Make.com webhook.
 */
function setupAppointmentForm() {
    const form = document.getElementById('appointment-form');
    const confirmation = document.getElementById('appointment-confirmation');
    const closeConfirmation = document.getElementById('close-confirmation');
    const submitButton = form?.querySelector('button[type="submit"]');

    // !!! IMPORTANT: REPLACE THIS URL WITH YOUR ACTUAL MAKE.COM WEBHOOK URL !!!
    const WEBHOOK_URL = 'https://hook.eu2.make.com/gff1bmkd7uf3yqmc6isb9ea54c6ocfbh'; 

    if (form) {
        form.addEventListener('submit', async function(e) {
            e.preventDefault();

            // Disable button and change text to show loading state
            if (submitButton) {
                submitButton.disabled = true;
                submitButton.textContent = 'Sending...';
            }

            const formData = {
                name: document.getElementById('name').value,
                phone: document.getElementById('phone').value,
                speciality: document.getElementById('speciality').value,
                date: document.getElementById('date').value,
                // Include a source to track where the lead came from
                source: 'Website Appointment Form'
            };

            try {
                const response = await fetch(WEBHOOK_URL, {
                    method: 'POST',
                    // The 'Content-Type': 'application/json' header is crucial
                    headers: {
                        'Content-Type': 'application/json',
                    },
                    // Convert the JavaScript object to a JSON string
                    body: JSON.stringify(formData) 
                });

                // Check for a successful response from the webhook
                if (response.ok || response.status === 200) {
                    console.log('Form data sent successfully to Make.com');
                    
                    // Show confirmation message (Success)
                    if (confirmation) {
                        confirmation.classList.remove('hidden', 'bg-red-500/10', 'border-red-500', 'text-red-800');
                        confirmation.classList.add('bg-green-500/10', 'border-green-500', 'text-green-800');
                        confirmation.querySelector('p').textContent = 'Thank you! Your appointment request has been submitted successfully. We will call you soon.';
                    }

                } else {
                    console.error('Webhook submission failed:', response.statusText);

                    // Show a failure message (Webhook side issue)
                    if (confirmation) {
                        confirmation.classList.remove('hidden', 'bg-green-500/10', 'border-green-500', 'text-green-800');
                        confirmation.classList.add('bg-red-500/10', 'border-red-500', 'text-red-800');
                        confirmation.querySelector('p').textContent = 'There was an error submitting your request. Please try again or call us directly.';
                    }
                }

            } catch (error) {
                console.error('Error sending form data (Network/CORS):', error);
                
                // Show a network error message
                if (confirmation) {
                    confirmation.classList.remove('hidden', 'bg-green-500/10', 'border-green-500', 'text-green-800');
                    confirmation.classList.add('bg-red-500/10', 'border-red-500', 'text-red-800');
                    confirmation.querySelector('p').textContent = 'Network error. Please check your connection or call us directly.';
                }

            } finally {
                // Re-enable button and reset text after submission
                if (submitButton) {
                    submitButton.disabled = false;
                    submitButton.textContent = 'Book Appointment';
                }
                
                // Reset the form on success or failure
                form.reset(); 

                // Scroll to the confirmation message
                confirmation.scrollIntoView({ behavior: 'smooth', block: 'start' });

                // Auto-hide confirmation after 10 seconds
                setTimeout(() => {
                    confirmation?.classList.add('hidden');
                }, 10000);
            }
        });
    }

    if (closeConfirmation) {
        closeConfirmation.addEventListener('click', () => {
            if (confirmation) {
                confirmation.classList.add('hidden');
            }
        });
    }
}


/* Scroll Animation and Intersection Observer */

/**
 * Sets up the scroll-in animation for various sections.
 * This function is now wrapped in a try/catch to prevent errors on pages where sections are missing.
 */
function setupScrollAnimation() {
    try {
        // 1. Select all sections and other main animated elements
        const mainSections = document.querySelectorAll('#about, #services, #doctors, #testimonials, #facilities, #appointments, #location');

        // 2. Select nested elements (image, and the four feature cards for staggered animation)
        const staggeredElements = document.querySelectorAll('#about-image, #why-choose-us-content > div');
        const whyChooseUsSection = document.getElementById('why-choose-us');

        const elementsToAnimate = [...mainSections, ...staggeredElements, whyChooseUsSection].filter(el => el != null); // Filter out nulls

        // The delay map will apply a staggered delay to the feature cards
        const delayMap = new Map();
        // Assign staggered delays to the 4 direct children of the why-choose-us content div
        staggeredElements.forEach((el, index) => {
            if (el.closest('#why-choose-us')) {
                delayMap.set(el, index * 100);
            } else {
                 // about-image gets no extra delay
                delayMap.set(el, 0);
            }
        });

        const observer = new IntersectionObserver((entries, observer) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    const element = entry.target;
                    const delay = delayMap.get(element) || 0;

                    setTimeout(() => {
                        // Apply final state classes
                        element.classList.remove('opacity-0', 'translate-y-20');
                        element.classList.add('opacity-100', 'translate-y-0');
                    }, delay);

                    observer.unobserve(element);
                }
            });
        }, { threshold: 0.1 });

        elementsToAnimate.forEach(element => {
            if (element) {
                // Apply initial state classes if they don't already exist in HTML
                element.classList.add('opacity-0', 'transition', 'duration-700', 'ease-out', 'translate-y-20');
                observer.observe(element);
            }
        });
    } catch (e) {
        // Safe exit in case IntersectionObserver or other elements fail
        console.error("Scroll animation setup failed:", e);
    }
}

/* Initialization */

document.addEventListener('DOMContentLoaded', () => {
    // 1. Setup essential UI elements (must run on ALL pages)
    renderSpecialties(); // Creates service links (crucial for header on all pages)
    setupMobileMenu(); 
    setupAppointmentForm();
    lucide.createIcons(); // Initialize all icons on the page

    // 2. Setup content that only runs on the main index.html page (or any page containing the element ID)
    
    // Functions that only run if their target elements exist:
    if (document.getElementById('services-scroller')) renderServices(); 
    if (document.getElementById('doctors-scroller')) {
        renderDoctors();
        setupDoctorAutoScroll();
    }
    if (document.getElementById('testimonial-display')) {
        renderTestimonials(); // Initial render for testimonials
        setupScrollNavigation(); // Sets up manual controls for services and doctors
    }
    if (document.getElementById('facilities-grid')) renderFacilities();

    setupHeroSlider(); // Only runs if #hero-slider exists (only on index.html)

    // 3. Initialize Scroll Animation (runs last, safely handles missing elements)
    setupScrollAnimation();
});