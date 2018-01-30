<!doctype html>
<html lang="en-US">
<?php require_once('blocks/services/head.html'); ?>
<?php $path_content = count($_GET) > 0 ? 'blocks/pages/' . $_GET['f'] : 'blocks/pages/sitemap.html'?>
<body>
        <div class="siteContent">
            <?php require_once('blocks/partials/header.html'); ?>
<!--            --><?php //require_once('blocks/partials/banner.html'); ?>
            <?php require_once($path_content); ?>
        </div>
        <?php require_once('blocks/partials/footer.html'); ?>
        <?php require_once('blocks/services/scripts.html'); ?>
</body>
</html>
