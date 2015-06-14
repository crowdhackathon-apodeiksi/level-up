<?php 

$photo=$_POST['photo'];

//$file = 'newfile.txt';

// Open the file to get existing content
//$current = file_get_contents($file);
// Append a new person to the file


$current = $photo;
// Write the contents back to the file
//file_put_contents($file, $current);

$img = new Imagick();
$decoded = base64_decode($current);
$img->readimageblob($decoded);
$img->writeImage('output.jpg');

echo 'tttt';

try {
    $msg = array();
    exec("/usr/local/bin/tesseract output.jpg output", $msg);
    var_export($msg);
} catch (Exception $e) {
    echo $e;
}

/*
$cmd ="tesseract -l ell /var/www/html/output.png output";
shell_exec ( $cmd );

/*
$cmd ="convert 'inline:data:,".$photo."' image.jpg";
shell_exec ( $cmd );*/

/*
$data = base64_decode($photo);
$formImage = imagecreatefromstring($data);
imagejpeg( $formImage, "output.jpg" );
// Clear the memory of the tempory image
imagedestroy( $formImage );

$cmd ="tesseract -l ell output.jpg output";
*/
?>