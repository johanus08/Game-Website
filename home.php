<?php 
session_start();

if (isset($_SESSION['id']) && isset($_SESSION['user_name'])) {

 ?>
<!DOCTYPE html>
<html>
<head>
	<title>Quintet</title>
	<link rel="stylesheet" type="text/css" href="style.css">
</head>
<body style="background:url(pattern.gif); background-size:cover; width:100%;  display: flex; justify-content: center; align-items: center;">
	<h1>Quintet</h1>
	<h3>
  <span>t</span>
  <span>h</span>
  <span>e</span>
  &nbsp;
  &nbsp;
  &nbsp;
  &nbsp;
  &nbsp;
  &nbsp;
  &nbsp;
  <span>g</span>
  <span>a</span>
  <span>m</span>
  <span>e</span>
  &nbsp;
  &nbsp;
  &nbsp;
  &nbsp;
  &nbsp;
  &nbsp;
  &nbsp;
  <span>z</span>
  <span>o</span>
  <span>n</span>
  <span>e</span>
</h3>

<a href="player.html">PLAY</a>

     <h2>Hello, <?php echo $_SESSION['name']; ?></h2>

     <a href="logout.php" style="text-decoration: none; font-size: 22px; display: inline-block; text-align:center;color: red;background-color: black; border: 2px solid red;padding: 10px 20px;">Logout</a>





</body>
</html>

<?php 
}else{
     header("Location: index.php");
     exit();
}
 ?>