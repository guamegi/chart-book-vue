<template>
  <nav class="navbar navbar-dark navbar-expand bg-gradient-primary shadow mb-4">
    <div class="container d-flex flex-row">
      <ul class="nav navbar-nav text-light">
        <li class="nav-item ml-3" role="presentation">
          <a class="nav-link" activeclass="active" to="/portfolio">
            <span>자산현황</span>
          </a>
        </li>
        <li class="nav-item ml-3" role="presentation">
          <a class="nav-link" activeclass="active" to="/market">
            <span>증시현황</span>
          </a>
        </li>
      </ul>
    </div>
  </nav>
</template>

<script>
export default {
  name: "NavBar",
};
</script>
