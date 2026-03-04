import advancedSearch from './advancedSearch';
import columns from './columns';
import detailList from './detailList';
import fields from './fields';
import forms from './forms';
import grid from './grid';
import optionLists from './optionLists';

export default () => (configContext) => ({
  optionLists,
  recordTypes: {
    collectionobject: {
      advancedSearch: advancedSearch(configContext),
      columns: columns(configContext),
      detailList: detailList(configContext),
      fields: fields(configContext),
      forms: forms(configContext),
      grid: grid(configContext),
    },
  },
});
