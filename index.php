<?php
$dir    = './';
$files = scandir($dir);
$files = array_diff(scandir('./'), array('..', '.', 'index.php'));
foreach ($files as $file){
    if(is_file($file)){
    ?>
        <a href="<?=$file?>" target="_blank"><?=$file?></a><br>
    <?php
    }
}
?>