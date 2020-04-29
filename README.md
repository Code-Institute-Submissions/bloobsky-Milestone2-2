#######################################################

# Version Control
This Project uses Semantic Versioning (https://semver.org/)<br>
->0.0.15 -- Deployement section in README.md file expanded<br>
->0.0.14 -- Changed titles on subpages</br>
->0.0.13 -- Fixed Javascript code '==' changed for '==='<br>
->0.0.12 -- Fixed issue with logo not displaying properly on smaller devices<br>
->0.0.11 -- Fixed Issue with EmaiLJS (Panic button) function<br>
->0.0.10 -- Added User Experience Stories<br>
->0.0.9 -- Fixed * .html files for HTMLValidator<br>
->0.0.8 -- Fixed misspelling in plan.js<br>
->0.0.7 -- Fixed .css file for CSSValidator<br>
->0.0.6 -- Added screenshot.jpg file and testing write-up <br>
->0.0.5 -- Add acknowledgement to README.md file<br>
->0.0.4 -- Fixed bug on FAQ subsite when menu doesn't show up in proper width property.<br>
->0.0.3 -- Readme.md file updated for Version Control<br>
->0.0.2 -- Fixed Typos & Mispelling<br>
->0.0.1 -- Initial Commit<br>

# Project Info

HiVE Cluster - Smart Home Interface is a fully functional website that enables user to take control of his/her house.

System is just a proposition for the assignement @ www.CodeInstitute.Net and it only works as a presentation.

In the future if I have enough knowledge I might upgrade it towards existing system like: Amazon Alexa, Google Home etc...


# UX

Page is divided into 6 anchor point and gives user ability to go through different options in order to fully controll smarthome.

1) Main - Usefull information how the system work and describes all the functions available to the user.
2) House plan - Shows 2 floors and gives user ability to control each light in every room seperately and remotely.
3) Controls - enables user to setup the alarm, open garage or use lockdown mode to close every entrance to the house.
4) Emergency (Panic Button) - within one click our team would be informed that something is wrong or doesn't work withing your home.
5) Map - withing using of Google Maps would return the location of your home ()
6) FAQ - Frequently Asked Questions for general help or enquires.

a) Bill Smith wanted to remotely control lightning in his home. He always forgot to trip a switch when he leaves his home. To accomplish that he can use my website to remotely and independently control lighting in every room.<br>
b) Jonathan Mayers was tired of forgetting to switch on the alarm. He usually has to come back from time to time to set the alarm up. For the rescue come my website. He can do it now with on simply click on the website.<br>
c) Anna Jones was looking for a thermostat setup. She usually come back to her cold home and needed to set it up manually. The system proposed enables her that function to set up thermostat for designated temperature.<br>


# Testing

Website was tested using 3 devices: Desktop PC, Tablet (Samsung a300) and smartphone (Samsung s8). Website was also tested using Inspect function in Google Chrome<br/>
HTML and CSS Validator were also used in place.

1) Thermostat setup was tested and it only allows user to use number from 5 to 25 (both inclusive) and verifies the input, other input would return an error to the user.

# Testing write-up

Test#1 As an example we are going to test Emergency function<br>

Steps Involved:<br>

1) Click on 'Emergency' Link located on Navigation Bar<br>
2) Click on 'Panic Button" located at the bottom of the page<br>
3) Pop-up window should appear and gives the user 2 options to choose: Close and Send Emergency<br>
4a) Click 'Close' to dismiss the window<br>
4b) Click 'Send Emergency" to inform the headquarter about some problems with the system.<br>
5) Click 'Close' to close the pop-up window<br>

Screenshot confirming that script is working:<br>
<img src="img/screenshot.jpg" alt="screenshot">

Test#2 Control of lighting at home:<br>

Steps Involved:<br>

1) Click on 'House Plan' link located on Navigation Bar<br>
2) Plan of house showes up and within one-click of a mouse button user can trigger it on or off.<br>
3) Gray background on the room represents light in off position<br>
4) Yellow background on the room represents light in on position<br>

Screenshot confirming that it is working:<br>
<img src="img/screenshot2.jpg" alt="screenshot2"><br>

Test#3 Using Thermostat to set up desired temperature<br>

Steps Involved:<br>

1) Click on 'Controls' link located on Navigation Bar<br>
2) On the Control Panel on the right side of a page there is a field that can take any value from 5C degrees to 25C degrees.<br>
3a) If the value would be incorrect user would get an error message and the thermostat would not be set.<br>
3b) If the value is correct user would get informed that it is setup correctly<br>


Screenshot confirming 2 possible outcomes:<br>
<img src="img/screenshot3.jpg" alt="screenshot3"><br>
<img src="img/screenshot4.jpg" alt="screenshot4"><br>




# Deployement

Using Git Command Line to upload to a repository<br>

Type in terminal these commands:<br>
<code>git init</code> to initialize a new repository<br>
<code>git add README.md</code> to add README.md file to repository<br>
<code>git commit -m "Initial commit"</code> to add a message for first commitement.<br>
<code>git remote add origin https://github.com/bloobsky/your_repository_name.git</code> to assign repository</br>
<code>git push -u origin master</code> to upload files to the repository<br>
<br><br>

Project is deployed @ GitHub. <br/>
Github was used in deployement process as it is integrated, simple and ther is no need to use additional services.<br/>
It also containt Version Control and everything is uploaded using terminal commands (git)<br/>

How it is done ? <br>

1) Open www.github.com. <br>
2) Login with your credentials <br>
3) On the Navigation Bar in the repository you would like to deploy look for 'settings' link. <br>
4) Scroll down the page and look for 'GitHub Pages'<br>
5) Under the source section select 'master branch' option<br>
6) Message should appear 'Your site is ready to be published at https://$YourLogin.github.io/$RepositoryName/<br>
7) Your website is deployed now.<br>

# Technologies,Programming Languages and APIs

HTML5, CSS, BOOTSTRAP4, JavaScript, jQuery, FontAwesome, GoogleFonts<br>
API: emailJS and Google Maps API

# Features to be implemented

In the future upgrade it towards existing system like: Amazon Alexa, Google Home etc...


# Media

Bootstrap Icons used for a lock image (lock, unlock . svg)<br>
Swatch used for website is available at /img/swatch.png<br>
HiVE Cluster logo was created in Adobe Illustrator. <br>

# Acknowledgements

I received inspiration from CodeInstitute (www.codeinstitute.net)<br/>
Privacy Policy was generated using www.iubenda.com<br/>
Coolors.co - website was used to generate colour scheme.<br/>
AWS Cloud9 was used to entirely written all the code for the proposed project.



