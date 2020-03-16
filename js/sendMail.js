function sendMail(contactForm) {


    emailjs.send("gmail", "project", {
            "from_name": "Matt Jakusz",
            "project_request": "Please make me a website",
            "from_email": "bloobsky@gmail.com",
            "customer_number": "000001",
            "tel_number": "0894234520"

        })
        .then(
            function(response) {
                console.log("SUCCESS", response);
            },
            function(error) {
                console.log("FAILED", error);

            });
    return false;
}
