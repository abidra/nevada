// Replace with your own values
const searchClient = algoliasearch(
    'VKSP2DHMZK',
    '89c3c15cb85a34d2b87edfc354e0b994' // search only API key, not admin API key
  );
  
  const search = instantsearch({
    indexName: 'dev_ecohome',
    searchClient,
    routing: true,
  });
  
  search.addWidgets([
    instantsearch.widgets.configure({
      hitsPerPage: 10,
    })
  ]);
  
  search.addWidgets([
    instantsearch.widgets.searchBox({
      container: '#search-box',
      placeholder: 'Search for contacts',
    })
  ]);
  
  search.addWidgets([
    instantsearch.widgets.hits({
      container: '#hits',
      templates: {
        item: `
        <div>
          <p>Name: {{#helpers.highlight}}{ "attribute": "customerName"}{{/helpers.highlight}}</p>
          <p>Address: {{#helpers.highlight}}{ "attribute": "customerAddress"}{{/helpers.highlight}}</p>
          <button type="button" class="btn btn-success">Edit report</button>
          <button type="button" class="btn btn-danger">Delete report</button>
        </div>
      `,
        empty: `We didn't find any results for the search <em>"{{query}}"</em>`,
      },
    })
  ]);

  search.addWidget({
    render: function(opts) {
      const results = opts.results;
      // read the hits from the results and transform them into HTML.
      document.querySelector('#hits').innerHTML = results.hits.map(function(h) {
        return '<p>' + h._highlightResult.title.value + '</p>';
      }).join('');
    }
  });
//   search.sortBy({
//     container: '#sort-by',
//     items: [
//       { label: 'Unsorted', value: 'instant_search' },
//       { label: 'Sorted', value: 'instant_search_price_asc' },
//     ],
//   });
  
  search.start();