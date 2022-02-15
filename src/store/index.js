import { createStore } from 'vuex';
import SearchQuery from './modules/SearchQuery';
import SearchResults from './modules/SearchResults';

export default createStore({
  modules: {
    // TOOD: Use central helper listing types, create store
    // for each dynimcally.
    query: SearchQuery,
    // TODO: Rename 'results' to 'search' to cleanup weird results.results.
    results: {
      namespaced: true,
      modules: {
        text: SearchResults('text'),
        images: SearchResults('images'),
        audio: SearchResults('audio'),
        video: SearchResults('video'),
        directories: SearchResults('directories'),
      },
    },
  },
  strict: true,
});
