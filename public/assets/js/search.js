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
        item: document.getElementById('hit-template').innerHTML,
        empty: `We didn't find any results for the search <em>"{{query}}"</em>`,
      },
    })
  ]);
  
  search.start();