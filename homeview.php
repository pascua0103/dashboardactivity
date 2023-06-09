<?= $this->extend('layouts/base');?>


<?= $this->section('title');?>
    <?= $page_title;?>
<?= $this->endSection();?>


<?=$this->section('ouractivity');?>

<div class="container-fluid">
  <h3><?= $page_heading;?></h3>
  <p>A navigation bar is a navigation header that is placed at the top of the page.</p>
  <p>The navbar-expand-xl|lg|md|sm class determines when the navbar should stack vertically (on extra large, large, medium or small screens).</p>
</div>

<div>
    <?=$this->include('additional/text')?>
</div>

<?=$this->endSection ();?>