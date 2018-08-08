import { defineMessages } from 'react-intl';

export default {
  local: {
    disableAltTerms: true,
  },
  ulan: {
    disableAltTerms: true,
  },
  shared: {
    disableAltTerms: true,
    messages: defineMessages({
      name: {
        id: 'vocab.organization.shared.name',
        description: 'The name of the vocabulary.',
        defaultMessage: 'Shared',
      },
      collectionName: {
        id: 'vocab.organization.shared.collectionName',
        description: 'The name of a collection of records from the vocabulary.',
        defaultMessage: 'Shared Organizations',
      },
    }),
    serviceConfig: {
      servicePath: 'urn:cspace:name(organization_shared)',
    },
  },
};