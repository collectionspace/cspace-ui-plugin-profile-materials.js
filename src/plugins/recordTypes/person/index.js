import advancedSearch from './advancedSearch';
import forms from './forms';
import vocabularies from './vocabularies';

export default () => configContext => ({
  recordTypes: {
    person: {
      vocabularies,
      advancedSearch: advancedSearch(configContext),
      forms: forms(configContext),
    },
  },
});
