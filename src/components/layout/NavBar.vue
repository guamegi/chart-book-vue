<template>
  <nav class="navbar navbar-dark navbar-expand bg-gradient-primary shadow mb-4">
    <div class="container d-flex flex-row">
      <ul class="nav navbar-nav text-light">
        <router-link to="/" class="nav-link" active-class="active"
          >자산현황</router-link
        >
        <router-link to="/market" class="nav-link" active-class="active"
          >증시현황</router-link
        >
      </ul>
    </div>
  </nav>
</template>

<script>
export default {
  name: "NavBar",
};
</script>
