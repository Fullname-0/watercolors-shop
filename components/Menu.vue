<template>
  <nav class="menu">
    <div class="menu__logo">
      <img class="menu__logo" src="~/static/img/loginio.jpg" alt="Logo sklepu">
    </div>
    <ul class="menu__list">
      <li><nuxt-link to='/' exact>Home</nuxt-link></li>
      <li><nuxt-link to='/shop' exact>Sklep</nuxt-link></li>
      <li><nuxt-link to='/about' exact>O mnie</nuxt-link></li>
      <li><nuxt-link to='/blog' exact>Blog</nuxt-link></li>
      <li><nuxt-link to='/koszyk' exact><img src="~/static/icons/cart.svg" alt="Koszyk"></nuxt-link></li>
      <li><img src="~/static/icons/instagram.svg" alt="Logo instagram"></li>
    </ul>
  </nav>

</template>

