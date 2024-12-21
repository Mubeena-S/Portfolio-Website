// Example JS to handle form submission (you can add more functionality as needed)
document.querySelector('form').addEventListener('submit', function(e) {
    e.preventDefault();
    alert("Message Sent! We will get back to you soon.");
});

                    document.getElementById('upload').addEventListener('change', function(event) {
                        const file = event.target.files[0];
                        if (file) {
                            const fileURL = URL.createObjectURL(file);
                            document.getElementById('viewer').src = fileURL;
                        }
                    });
                