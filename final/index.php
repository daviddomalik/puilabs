<?php

require __DIR__ . '/vendor/autoload.php';

use Twig\Environment;
use Twig\Loader\FilesystemLoader;
use PHPMailer\PHPMailer\PHPMailer;

$loader = new FilesystemLoader(__DIR__ . '/views');
$twig = new Environment($loader);

$request = $_SERVER['REQUEST_URI'];

switch ($request) {
    case '/':
        echo $twig->render('home.html.twig', ['tabTitle' => 'Home']);
        break;
    case '':
        echo $twig->render('home.html.twig', ['tabTitle' => 'Home']);
        break;
    case '/projects':
        echo $twig->render('projects.html.twig', ['tabTitle' => 'Projects']);
        break;
    case '/projects/fpolisolutions':
        echo $twig->render('projects/fpolisolutions.html.twig', ['tabTitle' => 'FPoliSolutions']);
        break;
    case '/projects/residence':
        echo $twig->render('projects/residence.html.twig', ['tabTitle' => 'Residence']);
        break;
    case '/projects/our-shopping-list':
        echo $twig->render('projects/our-shopping-list.html.twig', ['tabTitle' => 'Our Shopping List']);
        break;
    case '/projects/8bit-theater':
        echo $twig->render('projects/8bit-theater.html.twig', ['tabTitle' => '8-Bit Theater']);
        break;
    case '/projects/creamery':
        echo $twig->render('projects/creamery.html.twig', ['tabTitle' => 'A&M Creamery']);
        break;
    case '/projects/deeplocal':
        echo $twig->render('projects/deeplocal.html.twig', ['tabTitle' => 'Deeplocal']);
        break;
    case '/photography':
        echo $twig->render('photography.html.twig', ['tabTitle' => 'Photography']);
        break;
    case '/photography/jessica':
        echo $twig->render('photography/jessica.html.twig', ['tabTitle' => 'Jessica']);
        break;
    case '/photography/taylor':
        echo $twig->render('photography/taylor.html.twig', ['tabTitle' => 'Taylor']);
        break;
    case '/photography/dani-jess':
        echo $twig->render('photography/dani-jess.html.twig', ['tabTitle' => 'Dani + Jess']);
        break;
    case '/photography/chai':
        echo $twig->render('photography/chai.html.twig', ['tabTitle' => 'Chai']);
        break;
    case '/photography/fiona':
        echo $twig->render('photography/fiona.html.twig', ['tabTitle' => 'Fiona']);
        break;
    case '/photography/studio':
        echo $twig->render('photography/studio.html.twig', ['tabTitle' => 'Studio']);
        break;
    case '/photography/senior-portraits':
        echo $twig->render('photography/senior-portraits.html.twig', ['tabTitle' => 'Senior Portraits']);
        break;
    case '/photography/fashion-shows':
        echo $twig->render('photography/fashion-shows.html.twig', ['tabTitle' => 'Fashion Shows']);
        break;
    case '/photography/business':
        echo $twig->render('photography/business.html.twig', ['tabTitle' => 'Business Headshots']);
        break;
    case '/photography/abstract-architecture':
        echo $twig->render('photography/abstract-architecture.html.twig', ['tabTitle' => 'Abstract Architecture']);
        break;
    case '/photography/east-liberty-gentrification':
        echo $twig->render('photography/east-liberty-gentrification.html.twig', ['tabTitle' => 'East Liberty Gentrification']);
        break;
    case '/photography/roofs-stairs-doors':
        echo $twig->render('photography/roofs-stairs-doors.html.twig', ['tabTitle' => 'Roofs, Stairs, Doors']);
        break;
    case '/photography/hillman-library':
        echo $twig->render('photography/hillman-library.html.twig', ['tabTitle' => 'Hillman Library']);
        break;
    case '/photography/carnegie-mellon-university':
        echo $twig->render('photography/carnegie-mellon-university.html.twig', ['tabTitle' => 'Carnegie Mellon University']);
        break;
    case '/photography/concert':
        echo $twig->render('photography/concert.html.twig', ['tabTitle' => 'Concert']);
        break;
    case '/photography/music-store':
        echo $twig->render('photography/music-store.html.twig', ['tabTitle' => 'Music Store']);
        break;
    case '/photography/pittsburgh':
        echo $twig->render('photography/pittsburgh.html.twig', ['tabTitle' => 'Pittsburgh']);
        break;
    case '/photography/wedding':
        echo $twig->render('photography/wedding.html.twig', ['tabTitle' => 'Wedding']);
        break;
    case '/photography/colorado':
        echo $twig->render('photography/colorado.html.twig', ['tabTitle' => 'Colorado']);
        break;
    case '/photography/fireworks':
        echo $twig->render('photography/fireworks.html.twig', ['tabTitle' => 'Fireworks']);
        break;
    case '/photography/macro':
        echo $twig->render('photography/macro.html.twig', ['tabTitle' => 'Macro']);
        break;
    case '/photography/night':
        echo $twig->render('photography/night.html.twig', ['tabTitle' => 'Night']);
        break;
    case '/photography/sunrise-sunset':
        echo $twig->render('photography/sunrise-sunset.html.twig', ['tabTitle' => 'Sunrise/Sunset']);
        break;
    case '/photography/winter':
        echo $twig->render('photography/winter.html.twig', ['tabTitle' => 'Winter']);
        break;
    case '/writing':
        echo $twig->render('writing.html.twig', ['tabTitle' => 'Social Tech']);
        break;
    case '/about':
        echo $twig->render('about.html.twig', ['tabTitle' => 'About']);
        break;
    case '/contact':
        $msg = contactMailer();

        if (empty($msg)) {
            echo $twig->render('contact.html.twig', ['tabTitle' => 'Contact']);
        } else {
            echo $twig->render('contact.html.twig', ['tabTitle' => 'Contact', 'msg' => $msg]);
        }
        break;
    default:
        echo $twig->render('home.html.twig', ['tabTitle' => 'Home']);
        break;
}

// Extra code for the PHPMailer form on the Contact page
function contactMailer() {
    if (array_key_exists('email', $_POST)) {
        $err = false;
        $msg = '';
        $email = '';
        //Apply some basic validation and filtering to the subject
        if (array_key_exists('subject', $_POST)) {
            $subject = substr(strip_tags($_POST['subject']), 0, 255);
        } else {
            $subject = 'No subject given';
        }
        //Apply some basic validation and filtering to the message
        if (array_key_exists('message', $_POST)) {
            //Limit length and strip HTML tags
            $message = substr(strip_tags($_POST['message']), 0, 16384);
        } else {
            $message = '';
            $msg = 'No message provided!';
            $err = true;
        }
        //Apply some basic validation and filtering to the name
        if (array_key_exists('name', $_POST)) {
            //Limit length and strip HTML tags
            $name = substr(strip_tags($_POST['name']), 0, 255);
        } else {
            $name = '';
        }
        $to = 'david.domalik@gmail.com';
        //Make sure the address they provided is valid before trying to use it
        if (array_key_exists('email', $_POST) && PHPMailer::validateAddress($_POST['email'])) {
            $email = $_POST['email'];
        } else {
            $msg .= 'Error: invalid email address provided';
            $err = true;
        }
        if (!$err) {
            $mail = new PHPMailer;
            $mail->isSMTP();
            $mail->Mailer = "smtp";
            $mail->SMTPAuth   = TRUE;
            $mail->SMTPSecure = PHPMailer::ENCRYPTION_STARTTLS;
            $mail->Port       = 587;
            $mail->Host       = "smtp.gmail.com";
            $mail->Username   = "david.domalik@gmail.com";
            $mail->Password   = "ahzkivgrswvulnad";
            $mail->SMTPOptions = array(
                'ssl' => array(
                    'verify_peer' => false,
                    'verify_peer_name' => false,
                    'allow_self_signed' => true
                )
            );
            //It's important not to use the submitter's address as the from address as it's forgery,
            //which will cause your messages to fail SPF checks.
            //Use an address in your own domain as the from address, put the submitter's address in a reply-to
            $mail->setFrom('david.domalik@gmail.com', (empty($name) ? 'Personal Website Contact Form' : $name));
            $mail->addAddress($to);
            $mail->addReplyTo($email, $name);
            $mail->Subject = 'Personal Website Contact Form: ' . $subject;
            $mail->Body = $message;
            if (!$mail->send()) {
                $msg .= 'Mailer Error: Please contact me directly by sending an email to david.domalik@gmail.com';
            } else {
                $msg .= 'Message sent!';
            }
        }

        return $msg;
    }

}

?>