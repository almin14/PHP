<html>
	<body>
		<form method="POST">
			<input type="text" name="box">
			<input type="submit" name="btn">
		</form>
	</body>
</html>
<?php
if(isset($_POST['btn']))
{
	$a=$_POST["box"];
	echo "$a";
	$b= fopen('update.sql', 'a+');
	fwrite($b,$a);
	fclose($b);
}
?>