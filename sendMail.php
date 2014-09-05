<?php
	$first_name = $_POST['first_name'];
	$last_name = $_POST['last_name'];
	$email = $_POST['email'];
	$telephone = $_POST['telephone'];
	$message = $_POST['message'];

	$from = 'From: Marco Barragan';
	$to = 'marco.a.barragan.16@dartmouth.edu';
	$subject = 'Hello';

	$body = "From: $first_name $last_name\nEmail: $email\nTelephone: $telephone\nMessage:\n$message";

	if ($_POST['submit']) {
		if (mail($to, $subject, $body, $from)) {
			echo '<p>Your message has been sent successfuly!</p>';
		} else {
			echo '<p>Something went wrong, please try again.</p>';
		}
	}
?>