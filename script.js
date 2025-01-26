// Sample property data
const properties = [
    {
        id: "A104",
        title: "Edelma House Chalet A104",
        price: "EGP 6,096,680",
        priceValue: 6096680,
        location: "Sahl Hasheesh",
        type: "Chalet",
        bedrooms: 2,
        bathrooms: 2,
        area: "96 m²",
        imageUrl: "images/sahlhasheesh1.jpg", // Local image file
        description: "Luxury 2-bedroom chalet in Edelma House",
        projectDetails: {
            projectName: "Edelma House",
            unitNo: "A104",
            unitType: "Chalet",
            floorNo: 1,
            payment: {
                totalPrice: 6096680,
                downPayment: 5432224,
                remainingAmount: 664456,
                installmentDuration: "3 Years"
            }
        }
    },
    {
        id: "C102",
        title: "Edelma House Chalet C102",
        price: "EGP 13,300,000",
        priceValue: 13300000,
        location: "Sahl Hasheesh",
        type: "Chalet",
        bedrooms: 2,
        bathrooms: 2,
        area: "139 m²",
        imageUrl: "images/sahlhasheesh2.jpg", // Local image file
        description: "Spacious 2-bedroom chalet in Edelma House",
        projectDetails: {
            projectName: "Edelma House",
            unitNo: "C102",
            unitType: "Chalet",
            floorNo: 1,
            payment: {
                totalPrice: 13300000,
                downPayment: 5080000,
                remainingAmount: 5250000,
                installmentDuration: "1.5 Years"
            }
        }
    },
    {
        id: "B14-04",
        title: "UPVILLE Apartment B14-04",
        price: "EGP 6,200,000",
        priceValue: 6200000,
        location: "Sahl Hasheesh",
        type: "Apartment",
        bedrooms: 3,
        bathrooms: 2,
        area: "173 m²",
        gardenArea: "170 m²",
        imageUrl: "images/sahlhasheesh3.jpg", // Local image file
        description: "Ground floor apartment with spacious garden in UPVILLE",
        projectDetails: {
            projectName: "UPVILLE",
            unitNo: "B14-04",
            unitType: "Apartment",
            floorNo: 0,
            extraFeatures: {
                gardenArea: "170 m²"
            },
            payment: {
                totalPrice: 6200000,
                downPayment: 6043166,
                remainingAmount: 81257,
                installmentDuration: "6 Months"
            }
        }
    },
    {
        id: "14C-000-001",
        title: "6th October City Unit 14C-000-001",
        price: "EGP 1,930,000",
        priceValue: 1930000,
        location: "6th October City",
        type: "Apartment",
        area: "49 m²",
        imageUrl: "images/oct.jpg", // Local image file
        description: "Modern apartment in Building 14C",
        projectDetails: {
            projectName: "Building 14C",
            unitNo: "001",
            unitType: "Apartment",
            floorNo: 0,
            payment: {
                totalPrice: 1930000,
                downPayment: 1309609,
                remainingAmount: 620391,
                installmentDuration: "7 Years"
            }
        }
    },
    {
        id: "14C-000-002",
        title: "6th October City Unit 14C-000-002",
        price: "EGP 4,246,000",
        priceValue: 4246000,
        location: "6th October City",
        type: "Apartment",
        area: "124 m²",
        imageUrl: "images/oct.jpg", // Local image file
        description: "Spacious apartment in Building 14C",
        projectDetails: {
            projectName: "Building 14C",
            unitNo: "002",
            unitType: "Apartment",
            floorNo: 0,
            payment: {
                totalPrice: 4246000,
                downPayment: 2929290,
                remainingAmount: 1316710,
                installmentDuration: "7 Years"
            }
        }
    },
    {
        id: "14C-000-003",
        title: "6th October City Unit 14C-000-003",
        price: "EGP 4,315,000",
        priceValue: 4315000,
        location: "6th October City",
        type: "Apartment",
        area: "124 m²",
        imageUrl: "images/oct.jpg", // Local image file
        description: "Modern apartment in Building 14C",
        projectDetails: {
            projectName: "Building 14C",
            unitNo: "003",
            unitType: "Apartment",
            floorNo: 0,
            payment: {
                totalPrice: 4315000,
                downPayment: 2976446,
                remainingAmount: 1338554,
                installmentDuration: "7 Years"
            }
        }
    },
    {
        id: "14C-001-101",
        title: "6th October City Unit 14C-001-101",
        price: "EGP 3,995,000",
        priceValue: 3995000,
        location: "6th October City",
        type: "Apartment",
        area: "134 m²",
        imageUrl: "images/oct.jpg", // Local image file
        description: "First floor apartment in Building 14C",
        projectDetails: {
            projectName: "Building 14C",
            unitNo: "101",
            unitType: "Apartment",
            floorNo: 1,
            payment: {
                totalPrice: 3995000,
                downPayment: 2759141,
                remainingAmount: 1235859,
                installmentDuration: "7 Years"
            }
        }
    },
    {
        id: "14C-001-102",
        title: "6th October City Unit 14C-001-102",
        price: "EGP 4,140,000",
        priceValue: 4140000,
        location: "6th October City",
        type: "Apartment",
        area: "139 m²",
        imageUrl: "images/oct.jpg", // Local image file
        description: "First floor apartment in Building 14C",
        projectDetails: {
            projectName: "Building 14C",
            unitNo: "102",
            unitType: "Apartment",
            floorNo: 1,
            payment: {
                totalPrice: 4140000,
                downPayment: 2857325,
                remainingAmount: 1282675,
                installmentDuration: "7 Years"
            }
        }
    },
    {
        id: "14C-001-103",
        title: "6th October City Unit 14C-001-103",
        price: "EGP 2,929,000",
        priceValue: 2929000,
        location: "6th October City",
        type: "Apartment",
        area: "98 m²",
        imageUrl: "images/oct.jpg", // Local image file
        description: "First floor apartment in Building 14C",
        projectDetails: {
            projectName: "Building 14C",
            unitNo: "103",
            unitType: "Apartment",
            floorNo: 1,
            payment: {
                totalPrice: 2929000,
                downPayment: 1987525,
                remainingAmount: 941475,
                installmentDuration: "7 Years"
            }
        }
    },
    {
        id: "14C-002-202",
        title: "6th October City Unit 14C-002-202",
        price: "EGP 4,140,000",
        priceValue: 4140000,
        location: "6th October City",
        type: "Apartment",
        area: "139 m²",
        imageUrl: "images/oct.jpg", // Local image file
        description: "Second floor apartment in Building 14C",
        projectDetails: {
            projectName: "Building 14C",
            unitNo: "202",
            unitType: "Apartment",
            floorNo: 2,
            payment: {
                totalPrice: 4140000,
                downPayment: 2857325,
                remainingAmount: 1282675,
                installmentDuration: "7 Years"
            }
        }
    },
    {
        id: "14C-003-301",
        title: "6th October City Unit 14C-003-301",
        price: "EGP 4,064,000",
        priceValue: 4064000,
        location: "6th October City",
        type: "Apartment",
        area: "134 m²",
        imageUrl: "images/oct.jpg", // Local image file
        description: "Third floor apartment in Building 14C",
        projectDetails: {
            projectName: "Building 14C",
            unitNo: "301",
            unitType: "Apartment",
            floorNo: 3,
            payment: {
                totalPrice: 4064000,
                downPayment: 2806004,
                remainingAmount: 1257996,
                installmentDuration: "7 Years"
            }
        }
    },
    {
        id: "14C-003-302",
        title: "6th October City Unit 14C-003-302",
        price: "EGP 4,212,000",
        priceValue: 4212000,
        location: "6th October City",
        type: "Apartment",
        area: "139 m²",
        imageUrl: "images/oct.jpg", // Local image file
        description: "Third floor apartment in Building 14C",
        projectDetails: {
            projectName: "Building 14C",
            unitNo: "302",
            unitType: "Apartment",
            floorNo: 3,
            payment: {
                totalPrice: 4212000,
                downPayment: 2906534,
                remainingAmount: 1305466,
                installmentDuration: "7 Years"
            }
        }
    },
    {
        id: "14C-004-401",
        title: "6th October City Unit 14C-004-401",
        price: "EGP 5,259,000",
        priceValue: 5259000,
        location: "6th October City",
        type: "Apartment",
        area: "157 m²",
        imageUrl: "images/oct.jpg", // Local image file
        description: "Fourth floor apartment in Building 14C",
        projectDetails: {
            projectName: "Building 14C",
            unitNo: "401",
            unitType: "Apartment",
            floorNo: 4,
            payment: {
                totalPrice: 5259000,
                downPayment: 3616875,
                remainingAmount: 1642125,
                installmentDuration: "7 Years"
            }
        }
    },
    {
        id: "14C-004-402",
        title: "6th October City Unit 14C-004-402",
        price: "EGP 5,432,000",
        priceValue: 5432000,
        location: "6th October City",
        type: "Apartment",
        area: "162 m²",
        imageUrl: "images/oct.jpg", // Local image file
        description: "Fourth floor apartment in Building 14C",
        projectDetails: {
            projectName: "Building 14C",
            unitNo: "402",
            unitType: "Apartment",
            floorNo: 4,
            payment: {
                totalPrice: 5432000,
                downPayment: 3734241,
                remainingAmount: 1697759,
                installmentDuration: "7 Years"
            }
        }
    },
    {
        id: "14C-004-403",
        title: "6th October City Unit 14C-004-403",
        price: "EGP 3,900,000",
        priceValue: 3900000,
        location: "6th October City",
        type: "Apartment",
        area: "118 m²",
        imageUrl: "images/oct.jpg", // Local image file
        description: "Fourth floor apartment in Building 14C",
        projectDetails: {
            projectName: "Building 14C",
            unitNo: "403",
            unitType: "Apartment",
            floorNo: 4,
            payment: {
                totalPrice: 3900000,
                downPayment: 2646192,
                remainingAmount: 1253808,
                installmentDuration: "7 Years"
            }
        }
    }
];

// Manually set Sahl Hasheesh images
const sahlHasheeshProperties = [
    { id: "A104", imageUrl: "images/sahlhasheesh1.jpg" },
    { id: "C102", imageUrl: "images/sahlhasheesh2.jpg" },
    { id: "B14-04", imageUrl: "images/sahlhasheesh3.jpg" }
];

// Apply Sahl Hasheesh images
for (let i = 0; i < properties.length; i++) {
    const sahlHasheeshProperty = sahlHasheeshProperties.find(p => p.id === properties[i].id);
    
    if (properties[i].location === "Sahl Hasheesh") {
        properties[i].imageUrl = sahlHasheeshProperty ? sahlHasheeshProperty.imageUrl : "images/sahlhasheesh1.jpg";
    }
    
    if (properties[i].location === "6th October City") {
        properties[i].imageUrl = "images/oct.jpg";
    }
}

// Global variables for pagination
let currentDisplayCount = 3;
const initialDisplayCount = 3;
const moreDisplayCount = 6;
let filteredProperties = [];

// Format price for display
function formatPrice(price) {
    if (price >= 1000000) {
        return (price / 1000000).toFixed(1) + 'M EGP';
    }
    return price.toLocaleString() + ' EGP';
}

// Handle price range inputs
function handlePriceRangeInputs() {
    const minInput = document.getElementById('price-min');
    const maxInput = document.getElementById('price-max');
    const minPrice = document.getElementById('min-price');
    const maxPrice = document.getElementById('max-price');
    
    // Update display values
    minPrice.textContent = formatPrice(parseInt(minInput.value));
    maxPrice.textContent = formatPrice(parseInt(maxInput.value));

    // Ensure min doesn't exceed max
    if (parseInt(minInput.value) > parseInt(maxInput.value)) {
        if (this === minInput) {
            minInput.value = maxInput.value;
        } else {
            maxInput.value = minInput.value;
        }
    }

    filterProperties();
}

// Display properties with pagination
function displayProperties(propertiesToDisplay) {
    filteredProperties = propertiesToDisplay;
    const container = document.getElementById('properties-container');
    const showLessBtn = document.getElementById('show-less-btn');
    const showMoreBtn = document.getElementById('show-more-btn');
    const showAllBtn = document.getElementById('show-all-btn');
    
    // Clear the container
    container.innerHTML = '';
    
    // Determine how many properties to show
    const displayCount = Math.min(currentDisplayCount, propertiesToDisplay.length);
    
    // Display the properties
    for (let i = 0; i < displayCount; i++) {
        const property = propertiesToDisplay[i];
        const propertyCard = createPropertyCard(property);
        container.appendChild(propertyCard);
    }
    
    // Show/hide pagination buttons based on the number of properties
    if (propertiesToDisplay.length > 6) {
        if (currentDisplayCount === initialDisplayCount) {
            showLessBtn.style.display = 'none';
            showMoreBtn.style.display = 'inline-block';
            showAllBtn.style.display = 'inline-block';
        } else if (currentDisplayCount === moreDisplayCount) {
            showLessBtn.style.display = 'inline-block';
            showMoreBtn.style.display = 'none';
            showAllBtn.style.display = 'inline-block';
        } else if (currentDisplayCount > moreDisplayCount) {
            showLessBtn.style.display = 'inline-block';
            showMoreBtn.style.display = 'none';
            showAllBtn.style.display = 'none';
        }
    } else {
        showLessBtn.style.display = currentDisplayCount > initialDisplayCount ? 'inline-block' : 'none';
        showMoreBtn.style.display = 'none';
        showAllBtn.style.display = 'none';
    }

    // Scroll to properties container if showing less
    if (currentDisplayCount < filteredProperties.length) {
        document.getElementById('properties').scrollIntoView({ behavior: 'smooth' });
    }
}

// Create property card
function createPropertyCard(property) {
    const propertyCard = document.createElement('div');
    propertyCard.classList.add('col-lg-4', 'col-md-6');
    propertyCard.innerHTML = `
        <div class="property-card">
            <div class="image-placeholder">
                ${property.imageUrl ? `
                    <img src="${property.imageUrl}" alt="${property.title}">
                ` : `
                    <div class="contact-for-images">
                        <i class="fas fa-images fa-2x mb-2"></i>
                        <p>Contact Mona to view property images</p>
                        <small>Available upon request</small>
                    </div>
                `}
            </div>
            <div class="property-info">
                <h3 class="mb-3">${property.title}</h3>
                <div class="property-price mb-3">${property.price}</div>
                <div class="property-details mb-3">
                    <div class="property-features">
                        <span><i class="fas fa-ruler-combined"></i> ${property.area}</span>
                        ${property.bedrooms ? `<span><i class="fas fa-bed"></i> ${property.bedrooms} Bedrooms</span>` : ''}
                        ${property.bathrooms ? `<span><i class="fas fa-bath"></i> ${property.bathrooms} Bathrooms</span>` : ''}
                        ${property.gardenArea ? `<span><i class="fas fa-tree"></i> Garden: ${property.gardenArea}</span>` : ''}
                    </div>
                    <div class="property-location mt-2">
                        <i class="fas fa-map-marker-alt"></i> ${property.location}
                    </div>
                </div>
                ${property.projectDetails ? `
                    <div class="project-details mb-3">
                        <h4 class="mb-2">Payment Details</h4>
                        <p><strong>Down Payment:</strong> ${formatPrice(property.projectDetails.payment.downPayment)}</p>
                        <p><strong>Remaining Amount:</strong> ${formatPrice(property.projectDetails.payment.remainingAmount)}</p>
                        <p><strong>Installment Duration:</strong> ${property.projectDetails.payment.installmentDuration}</p>
                    </div>
                ` : ''}
                <div class="d-grid gap-2 mt-3">
                    <button onclick="contactAboutProperty('${property.id}')" class="btn btn-primary">
                        <i class="fab fa-whatsapp me-2"></i>Contact via WhatsApp
                    </button>
                    <button onclick="showEmailForm('${property.id}')" class="btn btn-outline-primary">
                        <i class="fas fa-envelope me-2"></i>Contact via Email
                    </button>
                </div>
            </div>
        </div>
    `;
    return propertyCard;
}

// Event listeners for pagination buttons
document.getElementById('show-less-btn').addEventListener('click', function() {
    if (currentDisplayCount > moreDisplayCount) {
        currentDisplayCount = moreDisplayCount;
    } else {
        currentDisplayCount = initialDisplayCount;
    }
    displayProperties(filteredProperties);
});

document.getElementById('show-more-btn').addEventListener('click', function() {
    currentDisplayCount = moreDisplayCount;
    displayProperties(filteredProperties);
});

document.getElementById('show-all-btn').addEventListener('click', function() {
    currentDisplayCount = filteredProperties.length;
    displayProperties(filteredProperties);
});

// Filter properties
function filterProperties() {
    currentDisplayCount = initialDisplayCount;
    const location = document.getElementById('location-filter').value;
    const type = document.getElementById('type-filter').value;
    const minPrice = parseInt(document.getElementById('price-min').value);
    const maxPrice = parseInt(document.getElementById('price-max').value);

    let filteredProperties = [...properties];

    // Apply filters
    if (location) {
        filteredProperties = filteredProperties.filter(property => 
            property.location === location
        );
    }

    if (type) {
        filteredProperties = filteredProperties.filter(property => 
            property.type === type
        );
    }

    // Filter by price range
    filteredProperties = filteredProperties.filter(property => 
        property.priceValue >= minPrice && property.priceValue <= maxPrice
    );

    displayProperties(filteredProperties);
}

// Contact via WhatsApp
function contactAboutProperty(propertyId) {
    const property = properties.find(p => p.id === propertyId);
    const contactForm = document.getElementById('contact-form');
    const propertyInfo = document.getElementById('property-info');
    
    // Store property info in hidden field
    propertyInfo.value = JSON.stringify({
        id: property.id,
        title: property.title,
        price: property.price,
        location: property.location,
        area: property.area,
        bedrooms: property.bedrooms,
        bathrooms: property.bathrooms,
        gardenArea: property.gardenArea,
        payment: property.projectDetails.payment,
        contactMethod: 'whatsapp'
    });
    
    // Pre-fill the message
    const messageArea = document.getElementById('message');
    messageArea.value = `I am interested in this property:

Property Details:
- Unit: ${property.title}
- Location: ${property.location}
- Price: ${property.price}
- Area: ${property.area}
${property.bedrooms ? `- Bedrooms: ${property.bedrooms}` : ''}
${property.bathrooms ? `- Bathrooms: ${property.bathrooms}` : ''}
${property.gardenArea ? `- Garden Area: ${property.gardenArea}` : ''}

Payment Details:
- Down Payment: ${formatPrice(property.projectDetails.payment.downPayment)}
- Remaining Amount: ${formatPrice(property.projectDetails.payment.remainingAmount)}
- Installment Duration: ${property.projectDetails.payment.installmentDuration}

I would like to get more information about this property and discuss viewing options.`;
    
    // Scroll to form
    contactForm.scrollIntoView({ behavior: 'smooth' });
}

// New function to show email form
function showEmailForm(propertyId) {
    const property = properties.find(p => p.id === propertyId);
    const contactForm = document.getElementById('contact-form');
    const propertyInfo = document.getElementById('property-info');
    
    // Store property info in hidden field
    propertyInfo.value = JSON.stringify({
        id: property.id,
        title: property.title,
        price: property.price,
        location: property.location,
        area: property.area,
        bedrooms: property.bedrooms,
        bathrooms: property.bathrooms,
        gardenArea: property.gardenArea,
        payment: property.projectDetails.payment
    });
    
    // Pre-fill the message
    const messageArea = document.getElementById('message');
    messageArea.value = `I am interested in this property:

Property Details:
- Unit: ${property.title}
- Location: ${property.location}
- Price: ${property.price}
- Area: ${property.area}
${property.bedrooms ? `- Bedrooms: ${property.bedrooms}` : ''}
${property.bathrooms ? `- Bathrooms: ${property.bathrooms}` : ''}
${property.gardenArea ? `- Garden Area: ${property.gardenArea}` : ''}

Payment Details:
- Down Payment: ${formatPrice(property.projectDetails.payment.downPayment)}
- Remaining Amount: ${formatPrice(property.projectDetails.payment.remainingAmount)}
- Installment Duration: ${property.projectDetails.payment.installmentDuration}

I would like to get more information about this property and discuss viewing options.`;
    
    // Scroll to form
    contactForm.scrollIntoView({ behavior: 'smooth' });
}

// Handle contact form submission
document.getElementById('contact-form').addEventListener('submit', async function(e) {
    e.preventDefault();
    
    const submitButton = this.querySelector('button[type="submit"]');
    const originalButtonText = submitButton.innerHTML;
    
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const phone = document.getElementById('phone').value;
    const message = document.getElementById('message').value;
    const propertyInfo = JSON.parse(document.getElementById('property-info').value || '{}');
    
    try {
        // Show loading state
        submitButton.innerHTML = '<i class="fas fa-spinner fa-spin me-2"></i>Sending...';
        submitButton.disabled = true;

        if (propertyInfo.contactMethod === 'whatsapp') {
            // Format WhatsApp message
            const whatsappMessage = `*New Property Inquiry*

*Client Details:*
👤 Name: ${name}
📧 Email: ${email}
📱 Phone: ${phone}

*Property Details:*
🏠 Unit: ${propertyInfo.title}
📍 Location: ${propertyInfo.location}
💰 Price: ${propertyInfo.price}
${propertyInfo.bedrooms ? `🛏️ Bedrooms: ${propertyInfo.bedrooms}` : ''}
${propertyInfo.bathrooms ? `🚿 Bathrooms: ${propertyInfo.bathrooms}` : ''}
📐 Area: ${propertyInfo.area}
${propertyInfo.gardenArea ? `🌳 Garden Area: ${propertyInfo.gardenArea}` : ''}

*Payment Details:*
💵 Down Payment: ${formatPrice(propertyInfo.payment.downPayment)}
💳 Remaining Amount: ${formatPrice(propertyInfo.payment.remainingAmount)}
⏱️ Installment Duration: ${propertyInfo.payment.installmentDuration}

*Client's Message:*
${message}

Thank you!`;

            const whatsappNumber = "201141452523";
            window.open(`https://wa.me/${whatsappNumber}?text=${encodeURIComponent(whatsappMessage)}`, '_blank');
            this.reset();
        } else {
            // Send email using EmailJS
            const response = await emailjs.send(
                "service_6b5l638",
                "template_fsfs7pu",
                {
                    message: `*New Property Inquiry*

*Client Details:*
👤 Name: ${name}
📧 Email: ${email}
📱 Phone: ${phone}

*Property Details:*
🏠 Unit: ${propertyInfo.title}
📍 Location: ${propertyInfo.location}
💰 Price: ${propertyInfo.price}
${propertyInfo.bedrooms ? `🛏️ Bedrooms: ${propertyInfo.bedrooms}` : ''}
${propertyInfo.bathrooms ? `🚿 Bathrooms: ${propertyInfo.bathrooms}` : ''}
📐 Area: ${propertyInfo.area}
${propertyInfo.gardenArea ? `🌳 Garden Area: ${propertyInfo.gardenArea}` : ''}

*Payment Details:*
💵 Down Payment: ${formatPrice(propertyInfo.payment.downPayment)}
💳 Remaining Amount: ${formatPrice(propertyInfo.payment.remainingAmount)}
⏱️ Installment Duration: ${propertyInfo.payment.installmentDuration}

*Client's Message:*
${message}

Thank you!`,
                    to_email: "mona.tya2@gmail.com",
                    from_name: name,
                    from_email: email,
                    from_phone: phone
                },
                "6cIGGSzFO2I5S5FI6"
            );

            console.log('Email sent successfully:', response);
            alert('Thank you! Your inquiry has been sent successfully to Mona.');
            this.reset();
        }
    } catch (error) {
        console.error('Detailed error sending message:', error);
        alert('Sorry, there was an error sending your inquiry. Please try again.');
    } finally {
        // Restore button state
        submitButton.innerHTML = originalButtonText;
        submitButton.disabled = false;
    }
});

// Initialize the page
document.addEventListener('DOMContentLoaded', function() {
    // Populate location filter
    const locations = [...new Set(properties.map(p => p.location))].sort();
    const locationFilter = document.getElementById('location-filter');
    locations.forEach(location => {
        locationFilter.innerHTML += `<option value="${location}">${location}</option>`;
    });

    // Populate type filter
    const types = [...new Set(properties.map(p => p.type))].sort();
    const typeFilter = document.getElementById('type-filter');
    types.forEach(type => {
        typeFilter.innerHTML += `<option value="${type}">${type}</option>`;
    });

    // Set up price range sliders
    const minInput = document.getElementById('price-min');
    const maxInput = document.getElementById('price-max');

    // Add event listeners
    locationFilter.addEventListener('change', filterProperties);
    typeFilter.addEventListener('change', filterProperties);
    minInput.addEventListener('input', handlePriceRangeInputs);
    maxInput.addEventListener('input', handlePriceRangeInputs);

    // Initialize price display
    handlePriceRangeInputs();

    // Initial display
    displayProperties(properties);
});
