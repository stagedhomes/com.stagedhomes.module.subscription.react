<?php
  /* ======================================================================
    Dependencies
  ====================================================================== */
    // This file contains global variables used throughout StagedHomes.com
    require_once($_SERVER["DOCUMENT_ROOT"] . "/assets/connections/global-variables.config.php");

    // Session
    session_start();

    // Session Based Randomization of Search Results
    //if(!isset($_SESSION['session_random_seed'])) $_SESSION['session_random_seed'] = intval(rand() * 100000);

    //if (!isset($_SESSION['valid_user'])) {
      //header("Location: /admin/loginfailed.php");
      //exit;
    //} elseif ($_SESSION["renewal_date"] < date('Y-m-d')) {
      //header("Location: /renewal/renewal.php?type=asp");
      //exit;
    //} // if (!isset($_SESSION['valid_user']))
?>

<html>

<head>
  <meta charset="utf-8">
  <meta name="description" content="Discover home staging training with the World Standard in Staging Education, Staged Homes.">
  <meta name="author" content="StagedHomes.com, Duane Leem, Derrick Leem, Gabriel Tumbaga">
  <title>Subscription | Staged Homes | World Leader in Staging Training</title>

  <!-- Mobile Meta -->
  <meta name="viewport" content="width=device-width, initial-scale=1.0">

  <!-- Required <head> contents -->
  <?php include($_SERVER["DOCUMENT_ROOT"] . "/assets/partials/main.head.php"); ?>
  
  <!-- Corresponding Styles to Homepage -->
  <link href="/../assets/the-project/css/pages.css" rel="stylesheet">
</head>

<body class="boxed pattern-1">
  <!-- Google Analytics -->
  <?php include_once($_SERVER["DOCUMENT_ROOT"] . "/assets/partials/google-analytics.php"); ?>

  <!-- scrollToTop -->
  <!-- ================ -->
  <!-- <div class="scrollToTop circle"><i class="icon-up-open-big"></i></div> -->

  <!-- page wrapper start -->
  <!-- ================ -->
  <div class="page-wrapper">

    <!-- Main Header -->
    <?php include($_SERVER["DOCUMENT_ROOT"] . "/assets/partials/main.header.php"); ?>

    <div id="subs-body">
      <div class="container">
        <div class="col-sm-12">
          <h1>Annual Subscription</h1>
          <iframe id="form-holder" src="./build/index.html" style="width: 100%; min-height: 500px;" frameborder="0"></iframe>
        </div>
      </div>
    </div>

      <!-- Footer -->
      <?php include($_SERVER["DOCUMENT_ROOT"] . "/assets/partials/main.footer.php"); ?>
    </div>
  </div>

  <!-- Jquery and Bootstap core js files -->
  <?php include($_SERVER["DOCUMENT_ROOT"] . "/assets/partials/main.end-scripts.php"); ?>

  <script>
    //lets wait for everything to load before we resize the iframe.
    $(window).on("load", () => {
      //on one of my loads, i noticed that the resize happened before
      //the page loaded completely, and it caused the iframe to still have
      //a slight scroll bar.  So, i'll introduce a bit more of a wait
      //before the resize happens...
      setTimeout(() => { fixFrameHeight(); }, 300);
    });

    //lets also resize the iframe height if the window gets resized, just in case.
    $(window).on("resize", () => fixFrameHeight());

    const fixFrameHeight = () => {
      const iFrame = document.getElementById( 'form-holder' );
      iFrame.height = iFrame.contentWindow.document.body.scrollHeight;
    }
  </script>
</body>

</html>
