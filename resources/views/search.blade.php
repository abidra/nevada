<!doctype html>
<head>
  <meta charset="UTF-8">
  <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/instantsearch.css@7.4.5/themes/satellite-min.css" integrity="sha256-TehzF/2QvNKhGQrrNpoOb2Ck4iGZ1J/DI4pkd2oUsBc=" crossorigin="anonymous">
</head>
<body>
  <header>
    <div id="search-box"></div>
  </header>

  <main>
      <div id="hits"></div>
      <div id="pagination"></div>
  </main>

  <script type="text/html" id="hit-template">
    <div class="hit">
      <p class="hit-name">
        @verbatim
        {{#helpers.highlight}}{ "attribute": "customerName" }{{/helpers.highlight}}
        {{#helpers.highlight}}{ "attribute": "customerAddress" }{{/helpers.highlight}}
        @endverbatim
      </p>
    </div>
  </script>

  <script src="https://cdn.jsdelivr.net/npm/algoliasearch@4.5.1/dist/algoliasearch-lite.umd.js" integrity="sha256-EXPXz4W6pQgfYY3yTpnDa3OH8/EPn16ciVsPQ/ypsjk=" crossorigin="anonymous"></script>
  <script src="https://cdn.jsdelivr.net/npm/instantsearch.js@4.8.3/dist/instantsearch.production.min.js" integrity="sha256-LAGhRRdtVoD6RLo2qDQsU2mp+XVSciKRC8XPOBWmofM=" crossorigin="anonymous"></script>
  <script src="/assets/js/search.js"></script>
</body>
