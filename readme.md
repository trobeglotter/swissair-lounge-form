11 January 2023
Set up node server
https://www.youtube.com/watch?v=SccSCuHhOw0&t

express can take http methods

copied the html and css files from phase 1 of project

Added view engine. Install npm package for ejs

Home page is set. 

Could not figure out how to link animation.js to server.js or index.ejs so I pasted the animation script in script tags.

12 January 2023
gifco
https://stackoverflow.com/questions/56152633/not-able-to-call-functions-from-another-js-file
You want to export as an object with your function as a property.

https://stackoverflow.com/questions/74824065/i-need-help-for-connect-js-functions-with-ejs-file
EJS does not provide a DOM. Output from EJS is generated using <%= and similar.

The document object is only (that's a slight simplification) available in JS running in an HTML document in the browser.

To use that code you would need to include it in a < script> element output from the EJS into an HTML document and run in a browser.

12 January 2023
- Downloaded and reviewed Postgresql

TABLE NAME
sw_lounge_guest 

USER GENERATED PDF DATA
 - fname
 - lname
 - email

 UNIQUE AUTOMATED PDF DATA:
 - Auto generated pass number - WRITE A FUNCTION FOR THIS
 - function to make qr code number data - WRITE A FUNCTION FOR THIS WITH NPM

 STANDARD AUTOMATED PDF DATA:
 - Swiss Air Logo
 - message to guest (update to include features of lounge)
 - cost of pass 120 euro
 - booking fee 7 euro
 - swissair website
 - legal terms

13 January 2023
 - Set up template literals for final PDF
sw_lounge_guest - SCHEMA C1 - PASSNUMBER - pass_number - passNumber
sw_lounge_guest - SCHEMA C2 - SURNAME - surname - surname
sw_lounge_guest - SCHEMA C3 - FIRST NAME - first - firstName
sw_lounge_guest - SCHEMA C4 - EMAIL - email - email
sw_lounge_guest - SCHEMA C5 - QR CODE NUMBER - qr_code_number - qrCodeNumber


// Constructor function
// C2 - surname
// C3 - lastName
// C4 - email



SCHEMA C1 - PASSNUMBER - section 1, header
SCHEMA C2 - FIRST NAME - section 1, greeting && section 2, table
SCHEMA C3 - LAST NAME - section 1, greeting && section 2, table
SCHEMA C4 - EMAIL - section 2, table
SCHEMA C5 - QR CODE NUMBER - section 2, table


14
Add NPM
PRACTICE PDF NPM - plug template literal function into the canvas/pdf npm
--How to set up the output file? How will html work with node/ejs?
--Html will be generated in a js function, but that will spit out into a pdf directly.
--As of now we can direct download the pdf but the gmail api step will be added in between as a transfer point of the data.
--I'll need to make a schema for the email send data. Gmail api mentioned a csv file?
---It should be able to tap into the SCHEMA C4 and pull the email from there...

CANVAS AND JSPDF
https://www.npmjs.com/package/html2pdf.js/v/0.9.0

Version 10 of html2pdf has bugs. Ended up using a cdn:
https://cdnjs.cloudflare.com/ajax/libs/html2pdf.js/0.10.1/html2pdf.bundle.min.js


15 January 2023
DATABASE - sw_lounge_guest

TABLE - lounge_guest
SCHEMA C1 - PASSNUMBER - pass_number - passNumber
SCHEMA C2 - SURNAME - surname - surname
SCHEMA C3 - FIRST NAME - first - firstName
SCHEMA C4 - EMAIL - email - email

TABLE - guest_pass

SCHEMA C1 - PASSNUMBER - pass_number - passNumber
SCHEMA C5 - QR CODE NUMBER - qr_code_number - qrCodeNumber


// Constructor function
// C2 - surname
// C3 - lastName
// C4 - email

               List of relations
 Schema |     Name     | Type  |     Owner     
--------+--------------+-------+---------------
 public | guest_pass   | table | suzannecurtis
 public | lounge_guest | table | suzannecurtis
(2 rows)

sw_lounge_guest=# TABLE guest_pass;
 pass_number | qr_code_number 
-------------+----------------
(0 rows)

sw_lounge_guest=# TABLE lounge_guest;
 pass_number | surname | first_name | email 
-------------+---------+------------+-------
(0 rows)

NEXT STEPS:
POSTGRESQL
NPM'S 

  ESTABLISH THE EXACT STEPS SO CAN BE INTEGRATED INTO FULL APPLICATION
  - PRACTICE PDF NPM
  - PRACTICE QR NPM


ALL KEY:VALUES PUSHED TO HTML (STORE IN A ROUTE IN NODE)
CANVAS TAKES SCREENSHOT
CANVAS PUSHES TO PDF
ALL KEY:VALUES PUSHED INTO PDF - WRITE A FUNCTION FOR THIS WITH NPM



HOW TO PUSH PDF TO EMAIL?

USER EMAIL PUT INTO PROGRAM THAT SENDS THE PDF - WRITE A FUNCTION FOR THIS
 - IS THERE SOMETHING IN GMAIL TO SET THIS UP? (CUZANNESURTIS@G)
 - MAIL CHIMP?
 https://developers.google.com/gmail/api/guides/sending
 https://developers.google.com/gmail/api/reference/rest/v1/users.messages/send
 https://developers.google.com/gmail/api/quickstart/js


RESULTS IN THIS ORDER
ALL PDF Schema must include:
 - Swiss Air Logo
 - Auto generated pass number
 - dear fname
 - dear lname
 - message to guest (update to include features of lounge)
 
 - fname
 - lname
 - email
 - cost of pass 120 euro
 - booking fee 7 euro
 - function to make qr code number data
 - swissair website

 - legal terms


A4 
 - css wxh
 - jsPDF xy starting coordinates (has some built in border on top and right)
#doc {
            width: 612px;
            height: 792px;
            border: solid black 20px;
        }
        doc.fromHTML(docContent, 24, 0);
