import fields from './fields';
import vocabularies from './vocabularies';

export default () => (configContext) => ({
  recordTypes: {
    place: {
      vocabularies,
      fields: fields(configContext),
    },
  },
});
