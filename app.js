// index.ejs takes in user data

// Constructor function
// C2 - surname
// C3 - lastName
// C4 - email

// Create pass number
// C1 - passNumber

// Array with C1, C2, C3, C4


// Send to Postgres table - sw_lounge_guest 

// Function to create qr code
// Postgres row to populate array
// Array with C1-4 in qr code


// Send to Postgres table - sw_lounge_guest_qrcode
// C1 and C2 (qr code numerical data)







// Push data to pdf via html2pdf 
passHtml = '';
passHtml +=
    `
         <div id="docInner">
        <section id="section-one">
            <div id="header">
                <img id="swlogo" src="swlogo.png" alt="Swiss Air">
                <h1 class="largeText">Pass Number: SCHEMA C1</h1> 
            </div>
            <p>Dear SCHEMA C2 SCHEMA C3 </p>
            <p>Thank you for using Swiss Air Lounge service. Please save this pass in a mobile device and scan the QR code below
            at the lounge access located in Terminal 3 at
            Zurich International Airport. You will have access to the lounge 48 hours before your scheduled flight time. If
            you do not have a mobile device go to the ticketing counter and present your ID along with this document and a
            customer service agent will print a pass for you. For further inquiries send an email to
            customerservice@swissair.com.<br><br>
            Thank you for choosing Swiss Air Lounge.
            </p>
            <hr>
        </section>
        <section id="section-two">
            <p>First Name: SCHEMA C2</p>
            <p>Last Name: SCHEMA C3</p>
            <p>Email:SCHEMA C4</p>
            <p>Guest Pass:</p>
            <p>Booking Fee:</p>
            <p>Total:</p>
            <p> QR CODE: SCHEMA C5</p>
            <img id='qrcode' src="qrcode.png">
            <h1 class="largeText">www.swissair.com</h1>
        </section>
        <section id="section-three">
            <p><b>IMPORTANT INFORMATION YOU SHOULD READ</b>
            <br>
            Please note that Swiss Air lounge does not provide assigned seating in the public areas. Customers aged 16 and
            under require a chaperon with boarding passes of the same flight and destination.
            </p>
            <p><b>Terms and Conditions</b>
            <br>
            This pass is of a standard fare - not refundable fare type.
            </p>
            <p>
            Issued subject to Swiss Air, which can be viewed here
            www.swissair.com/conditions.
            </p>
        </section>
        </div>
        `
let docContent = document.getElementById('doc');
docContent.innerHTML = passHtml;

var opt = {
    margin: .5,
    filename: 'myfile.pdf',
    image: { type: 'jpeg', quality: 0.98 },
    html2canvas: { scale: 2 },
    jsPDF: { unit: 'in', format: 'letter', orientation: 'portrait' }
};
// Uncomment to print pdf
// html2pdf().from(docContent).set(opt).save();