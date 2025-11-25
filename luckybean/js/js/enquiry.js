// Function to handle form submission
document.getElementById('enquiryForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Stop page reload

    // 1. CLEAR OLD MESSAGES
    document.querySelectorAll('.error-message').forEach(el => el.style.display = 'none');
    const resultBox = document.getElementById('calculationResult');
    resultBox.style.display = 'none';

    // 2. GATHER VALUES
    const name = document.getElementById('fullName').value.trim();
    const email = document.getElementById('email').value.trim();
    const serviceType = document.getElementById('serviceType').value;
    const guests = parseInt(document.getElementById('guests').value);

    // 3. VALIDATION (Marks: Form Validation)
    let isValid = true;

    if (name === "") {
        document.getElementById('nameError').style.display = 'block';
        isValid = false;
    }

    if (email === "" || !email.includes('@')) {
        document.getElementById('emailError').style.display = 'block';
        isValid = false;
    }

    if (serviceType === "") {
        alert("Please select a service type.");
        isValid = false;
    }

    if (isValid) {
        // 4. PROCESS RESPONSE (Marks: Enquiry Process Response)
        let message = "";
        let estimatedCost = 0;

        // Logic specific to Lucky Bean Restaurant Storyline
        if (serviceType === "reservation") {
            if(guests > 10) {
                message = `<strong>Note:</strong> For groups larger than 10, we require a R50 per person deposit. <br> Total Deposit: R${guests * 50}. We will contact you to confirm.`;
            } else {
                message = `Thank you, ${name}. We have availability for a table of ${guests}. A confirmation email has been sent to ${email}.`;
            }
        } 
        else if (serviceType === "private") {
            // Calculate Private Event Cost: R350 per head + R2000 venue hire
            estimatedCost = (guests * 350) + 2000;
            message = `<strong>Private Event Estimate:</strong><br>
                       Venue Hire: R2,000<br>
                       Meal Cost (R350 x ${guests}): R${guests * 350}<br>
                       <strong>Total Estimated Cost: R${estimatedCost}</strong>`;
        } 
        else if (serviceType === "catering") {
            message = `Thanks for your interest in our catering! We will send a custom menu and quote for ${guests} people to ${email} within 24 hours.`;
        }

        // Display the result
        resultBox.innerHTML = message;
        resultBox.className = "success-box"; // Apply success styling
        resultBox.style.display = "block";
    }
});

// Optional: Helper function to show/hide guest input if needed
function toggleGuestInput() {
    // This allows for dynamic form behavior if you want to expand later
    const service = document.getElementById('serviceType').value;
    // For now, all options use guests, so we keep it visible
}