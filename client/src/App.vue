<template>
  <div id="app">
    <div id="nav">
      <nav class="navbar navbar-expand-lg navbar-dark" style="background-color: black">
        <div class="collapse navbar-collapse" id="navbarNav" style="background-color: black">
          <ul class="navbar-nav">
            <router-link to="/">Home</router-link>
            <router-link to="/books" class="spacer">Books</router-link>
            <router-link to="/movies">Movies</router-link>
          </ul>
        </div>
      </nav>
      <div class="homepage">
        <h1>Books And Movies Wiki</h1>
      </div>
    </div>
    <router-view />
    <footer class="footer">
      <div class="container">
        <span><a href="https://github.com/tacallaway/CP4">https://github.com/tacallaway/CP4</a></span>
      </div>
    </footer>
  </div>
</template>

<style>
.spacer {
  margin: 0 10px;
}

#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
}

#nav {
  padding: 30px;
}

a:visited {
  color: #42b983;
}

#nav a.router-link-exact-active {
  color: yellow;
}

.bg-dark {
  background-color: greenyellow !important;
}

.navbar-dark .navbar-nav .nav-link:focus, .navbar-dark .navbar-nav .nav-link:hover {
  color: lightgrey;
}

.navbar-dark .navbar-nav .nav-link {
  color: #fff;
}

.active {
    font-weight: bold !important;
}

img {
    width: 350px;
    max-height: 400px;
    padding-bottom: 20px;
}

.container {
    margin-top: 40px;
}

.footer .container {
    margin-top: 0;
}

dt {
    font-size: 22px;
    padding-bottom: 10px;
}

dd {
    font-size: 18px;
    padding-bottom: 30px;
    margin-bottom: 30px;
    border-bottom: solid 1px;
}

h1 {
    padding-top: 10px;
    font-size: 30px;
    text-align: center;
}

.homepage {
    background-color: green;
    color: white;
    text-align: center;
    height: 100px;
    padding-top: 15px;
}

.secondary {
    height: 100px !important;
    padding-top: 0px !important;
}

.homepage h1 {
    font-weight: bold;
    font-size: 40px;
}

.homepage h2 {
    font-size: 25px;
}

.underline-box p {
    font-size: 20px;
}

.underline-box h2 {
    border-bottom: solid #ddd 2px;
    padding-bottom: 5px;
    font-size: 30px;
}

.even-spacing h2 {
    font-size: 20px;
    padding-bottom: 5px;
}

.even-spacing {
    justify-content: space-around;
    padding-top: 30px;
    padding-bottom: 20px;
}

.even-spacing .col-md-auto {
    background-color: #eee;
    padding: 20px 20px;
    width: 300px;
}

.page {
    text-align: center;
    padding-top: 40px;
    padding-bottom: 10px;
    background-color: white !important;
}
</style>
