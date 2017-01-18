<?php
// Check for empty fields
if(empty($_POST['name']) || empty($_POST['email']) || empty($_POST['phone']) || empty($_POST['message']) || !filter_var($_POST['email'], FILTER_VALIDATE_EMAIL)) {
    exit('Please fill in the required fields...');
}

$name = strip_tags(htmlspecialchars($_POST['name']));
$email_address = strip_tags(htmlspecialchars($_POST['email']));
$phone = strip_tags(htmlspecialchars($_POST['phone']));
$message = strip_tags(htmlspecialchars($_POST['message']));
   
// Create the email and send the message
$to = 'yourname@example.com'; // Add your email address inbetween the '' replacing yourname@example.com - This is where the form will send a message to.
$email_subject = 'Website Contact Form: ' . $name;

$email_body = "You have received a new message from your website contact form.\n\n"
$email_body .= "Here are the details:\n\nName: $name\n\n";
$email_body .= "Email: $email_address\n\n";
$email_body .= "Phone: $phone\n\n";
$email_body .= "Message:\n$message";

$headers = "From: " . $email_address . "\n"; // This is the email address the generated message will be from. We recommend using something like noreply@example.com.
$headers .= "Reply-To: $email_address";   
mail($to, $email_subject, $email_body, $headers);
return true;
