<template>
  <div class="site-header">
    <div class="container">
      <a href="/" class="branding">
        <img src="~/assets/images/logo.png" alt class="logo" />
        <div class="logo-type">
          <h1 class="site-title">The Weather App</h1>
          <small class="site-description">By Joseph Molinas</small>
        </div>
      </a>

      <!-- Default snippet for navigation -->
      <div class="main-navigation">
        <button type="button" class="menu-toggle">
          <i class="fa fa-bars"></i>
        </button>
        <ul class="menu">
          <li class="menu-item current-menu-item">
            <a href="/">Home</a>
          </li>
          <li class="menu-item">
            <a href="#">News</a>
          </li>
        </ul>
        <!-- .menu -->
      </div>
      <!-- .main-navigation -->

      <div class="mobile-navigation"></div>
    </div>
  </div>
</template>