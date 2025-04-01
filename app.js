document.addEventListener('DOMContentLoaded', function() {
    // Team members data
    const teamMembers = [
        {
            name: "Anthony",
            skills: [
                "Dependency Injection Implementation",
                "UI/UX Design Principles",
                "Android Activity Lifecycle Management"
            ],
            image: "https://em-content.zobj.net/thumbs/240/apple/354/tiger-face_1f42f.png"
        },
        {
            name: "Mohammad",
            skills: [
                "Database Schema Design",
                "HSQLDB Implementation",
                "Data Persistence Patterns"
            ],
            image: "https://em-content.zobj.net/thumbs/240/apple/354/cat-face_1f431.png"
        },
        {
            name: "Ranvir",
            skills: [
                "SOLID Principles Application",
                "Software Architecture Design",
                "Interface Segregation"
            ],
            image: "https://em-content.zobj.net/thumbs/240/apple/354/dog-face_1f436.png"
        },
        {
            name: "Neel",
            skills : [
                "Test-Driven Development",
                "Unit & Integration Testing",
                "Mock Object Implementation"
            ],
            image: "https://em-content.zobj.net/thumbs/240/apple/354/rabbit-face_1f430.png"
        },
        {
            name: "Nishan",
            skills: [
                "Business Logic Implementation",
                "Exception Handling Patterns",
                "Service Layer Design"
            ],
            image: "https://em-content.zobj.net/thumbs/240/apple/354/hamster_1f439.png"
        }
    ];
    // Render team members
    const teamMembersContainer = document.getElementById('team-members-container');
    
    teamMembers.forEach(member => {
        const memberElement = document.createElement('div');
        memberElement.className = 'bg-white rounded-lg shadow-md overflow-hidden h-full transition-all duration-300 hover-shadow-lg hover-translate-y-neg2';
        
        let skillsHTML = '';
        member.skills.forEach(skill => {
            skillsHTML += `
                <div class="flex items-center mb-1.5">
                    <span class="text-blue-500 mr-2 text-lg inline-block">•</span>
                    <p class="text-gray-700 text-base">${skill}</p>
                </div>
            `;
        });
        
        memberElement.innerHTML = `
            <div class="p-6 flex flex-col items-center">
                <div class="w-24 h-24 mb-4">
                    <img 
                        src="${member.image}"
                        alt="${member.name}"
                        width="96"
                        height="96"
                        style="object-fit: contain; width: 100%; height: 100%;"
                    />
                </div>
                <h3 class="text-xl font-bold text-gray-800 mb-4 text-center">${member.name}</h3>
                <div class="w-full">
                    <h4 class="text-base font-semibold text-gray-800 mb-2">Skills learned:</h4>
                    <div class="pl-2">
                        ${skillsHTML}
                    </div>
                </div>
            </div>
        `;
        
        teamMembersContainer.appendChild(memberElement);
    });

    // Flag to track if the modal should be shown
    let shouldShowModal = false;
    
    // Get the overlay and close button elements
    const imageOverlay = document.getElementById('image-overlay');
    const closeOverlay = document.getElementById('close-overlay');
    
    // Make sure the overlay is hidden initially
    if (imageOverlay) {
        // Force hide the overlay
        imageOverlay.style.display = 'none';
        imageOverlay.classList.add('hidden');
    }
    
    // Find the architecture diagram element
    const architectureDiagram = document.getElementById('architecture-diagram');
    
    // Add click event to set the flag and show the overlay when clicking on the diagram
    if (architectureDiagram && imageOverlay) {
        architectureDiagram.addEventListener('click', function() {
            shouldShowModal = true;
            showModal();
        });
    }
    
    // Function to show the modal only if the flag is true
    function showModal() {
        if (shouldShowModal && imageOverlay) {
            imageOverlay.style.display = 'flex';
            imageOverlay.classList.remove('hidden');
        }
    }
    
    // Function to hide the modal and reset the flag
    function hideModal() {
        if (imageOverlay) {
            imageOverlay.style.display = 'none';
            imageOverlay.classList.add('hidden');
            shouldShowModal = false;
        }
    }
    
    // Add click event to close the overlay when clicking the close button
    if (closeOverlay) {
        closeOverlay.addEventListener('click', function(e) {
            e.stopPropagation();
            hideModal();
        });
    }
    
    // Add click event to close the overlay when clicking outside the image
    if (imageOverlay) {
        imageOverlay.addEventListener('click', function() {
            hideModal();
        });
        
        // Prevent clicks on the image from closing the overlay
        const overlayImage = imageOverlay.querySelector('img');
        if (overlayImage) {
            overlayImage.addEventListener('click', function(e) {
                e.stopPropagation();
            });
        }
    }
    
    // Close overlay with escape key
    document.addEventListener('keydown', function(e) {
        if (e.key === 'Escape') {
            hideModal();
        }
    });
    
    // Force hide the modal on page load with a slight delay to ensure it's applied
    setTimeout(function() {
        hideModal();
    }, 100);

    // Features data
    const features = [
        {
            title: "Product Browsing & Search",
            description: "Browse through a wide range of technology products including computers, phones, tablets, and smartwatches. Our intuitive search and filtering system helps users find exactly what they're looking for.",
            image: "https://placehold.co/600x400/e6f7ff/0099ff?text=Product+Browsing"
        },
        {
            title: "User Authentication & Profiles",
            description: "Secure account creation and login process with email and password authentication. Users can manage their personal information, view order history, and save favorite products.",
            image: "https://placehold.co/600x400/e6fff2/00cc99?text=User+Authentication"
        },
        {
            title: "Shopping Cart & Checkout",
            description: "Add products to cart, adjust quantities, and proceed to a streamlined checkout process. Our system ensures a seamless purchasing experience with multiple payment options.",
            image: "https://placehold.co/600x400/f2e6ff/9933ff?text=Shopping+Cart"
        },
        
    ];

    // Add smooth scrolling for anchor links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            e.preventDefault();
            
            const targetId = this.getAttribute('href');
            const targetElement = document.querySelector(targetId);
            
            if (targetElement) {
                window.scrollTo({
                    top: targetElement.offsetTop,
                    behavior: 'smooth'
                });
            }
        });
    });

    // Add hover effects for buttons and cards
    const hoverElements = document.querySelectorAll('.hover-shadow-xl, .hover-translate-y-neg2');
    
    hoverElements.forEach(element => {
        element.addEventListener('mouseenter', function() {
            if (this.classList.contains('hover-shadow-xl')) {
                this.style.boxShadow = '0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)';
            }
            if (this.classList.contains('hover-translate-y-neg2')) {
                this.style.transform = 'translateY(-2px)';
            }
        });
        
        element.addEventListener('mouseleave', function() {
            if (this.classList.contains('hover-shadow-xl')) {
                this.style.boxShadow = '';
            }
            if (this.classList.contains('hover-translate-y-neg2')) {
                this.style.transform = '';
            }
        });
    });

    // Add responsive navigation for mobile devices
    const createMobileMenu = () => {
        const header = document.querySelector('header');
        
        // Create mobile menu button
        const menuButton = document.createElement('button');
        menuButton.className = 'mobile-menu-button md-hidden';
        menuButton.innerHTML = `
            <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16" />
            </svg>
        `;
        
        // Add to header
        const headerContainer = header.querySelector('.container');
        headerContainer.style.display = 'flex';
        headerContainer.style.justifyContent = 'space-between';
        headerContainer.style.alignItems = 'center';
        
        // Add logo to left and menu button to right
        const logo = headerContainer.querySelector('.text-3xl');
        headerContainer.innerHTML = '';
        headerContainer.appendChild(logo);
        headerContainer.appendChild(menuButton);
        
        // Create mobile menu
        const mobileMenu = document.createElement('div');
        mobileMenu.className = 'mobile-menu hidden';
        mobileMenu.innerHTML = `
            <nav class="py-4 bg-white border-t">
                <ul class="space-y-2">
                    <li><a href="#overview" class="block px-4 py-2 hover-bg-gray-100">Overview</a></li>
                    <li><a href="#vision" class="block px-4 py-2 hover-bg-gray-100">Vision</a></li>
                    <li><a href="#users" class="block px-4 py-2 hover-bg-gray-100">Users</a></li>
                    <li><a href="#features" class="block px-4 py-2 hover-bg-gray-100">Features</a></li>
                    <li><a href="#team" class="block px-4 py-2 hover-bg-gray-100">Team</a></li>
                    <li><a href="#demo-videos" class="block px-4 py-2 hover-bg-gray-100">Demo</a></li>
                </ul>
            </nav>
        `;
        
        // Add mobile menu after header
        header.parentNode.insertBefore(mobileMenu, header.nextSibling);
        
        // Toggle mobile menu
        menuButton.addEventListener('click', function() {
            mobileMenu.classList.toggle('hidden');
        });
        
        // Close menu when clicking a link
        mobileMenu.querySelectorAll('a').forEach(link => {
            link.addEventListener('click', function() {
                mobileMenu.classList.add('hidden');
            });
        });
    };
    
    // Only create mobile menu if screen width is below 768px
    if (window.innerWidth < 768) {
        createMobileMenu();
    }
    
    // Handle window resize
    window.addEventListener('resize', function() {
        const mobileMenu = document.querySelector('.mobile-menu');
        const menuButton = document.querySelector('.mobile-menu-button');
        
        if (window.innerWidth < 768) {
            if (!menuButton) {
                createMobileMenu();
            }
        } else {
            if (mobileMenu) {
                mobileMenu.remove();
            }
            if (menuButton) {
                menuButton.remove();
            }
        }
    });

    // Find the section that contains the team members heading
    const teamSection = document.querySelector('#team-section');
    if (teamSection) {
        // Add negative margin to move it up
        teamSection.classList.add('mt-[-2rem]');
    }
});
