// --- PART A: INTERACTIVE MAP LOGIC  ---

// 1. Initialize the map centered on Melville, Johannesburg coordinates
var map = L.map('map').setView([-26.1754, 28.0035], 15);

// 2. Add the tile layer (the visual map skin) from OpenStreetMap
L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    maxZoom: 19,
    attribution: '© OpenStreetMap contributors'
}).addTo(map);

// 3. Add a marker for the restaurant
L.marker([-26.1754, 28.0035]).addTo(map)
    .bindPopup('<b>Lucky Bean Restaurant</b><br>Come visit us here!')
    .openPopup();


// --- PART B: CONTACT FORM LOGIC [cite: 48, 50] ---

document.getElementById('contactForm').addEventListener('submit', function(e) {
    e.preventDefault(); // Stop the page from refreshing

    // 1. Get Values
    var name = document.getElementById('name').value;
    var email = document.getElementById('email').value;
    var msgType = document.getElementById('msgType').value;
    var message = document.getElementById('message').value;
    var isValid = true;

    // 2. Validate (Basic Client-Side Validation) [cite: 55]
    if (name.trim() === "") {
        document.getElementById('nameError').style.display = 'block';
        isValid = false;
    } else {
        document.getElementById('nameError').style.display = 'none';
    }

    if (email.trim() === "" || !email.includes('@')) {
        document.getElementById('emailError').style.display = 'block';
        isValid = false;
    } else {
        document.getElementById('emailError').style.display = 'none';
    }

    if (message.trim() === "") {
        document.getElementById('msgError').style.display = 'block';
        isValid = false;
    } else {
        document.getElementById('msgError').style.display = 'none';
    }

    // 3. Process Email (Simulate sending) 
    if (isValid) {
        // Construct the mailto link
        var subject = `Lucky Bean - ${msgType} from ${name}`;
        var body = `Name: ${name}%0D%0AEmail: ${email}%0D%0A%0D%0AMessage:%0D%0A${message}`;
        
        // This opens the user's default email program (Outlook, Mail, etc.)
        // addressing it to the organization.
        window.location.href = `mailto:info@luckybean.co.za?subject=${subject}&body=${body}`;
        
        alert("Thank you! We are redirecting you to your email client to send this message.");
    }
});