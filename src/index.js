/* global cspaceUIPluginProfileMaterials */
/* The cspaceUIPluginProfileMaterials global variable is set by webpack (in non-test builds). See
 * webpack.config.js. */

import { defineMessages } from 'react-intl';
import cspaceUIPluginRecordMaterial from 'cspace-ui-plugin-record-material';
import messages from './messages';
import plugins from './plugins';
import styles from '../styles/cspace-ui-plugin-profile/materials.css';

export default () => ({
  messages,
  className: styles.common,
  mediaSnapshotSort: 'identificationNumber',
  prettyUrls: true,
  showTermListStateIcon: true,
  tenantId: '2000',
  termDeprecationEnabled: true,
  pluginInfo: {
    cspaceUIPluginProfileMaterials: {
      messages: defineMessages({
        name: {
          id: 'cspaceUIPluginProfileMaterials.name',
          defaultMessage: 'Materials Authority profile',
        },
      }),
      packageName: cspaceUIPluginProfileMaterials.packageName,
      packageVersion: cspaceUIPluginProfileMaterials.packageVersion,
      buildNum: cspaceUIPluginProfileMaterials.buildNum,
      repositoryUrl: cspaceUIPluginProfileMaterials.repositoryUrl,
      // packageVersion is now preferred, but keep version for backward compatibility with older
      // versions of cspace-ui.
      version: cspaceUIPluginProfileMaterials.packageVersion,
    },
  },
  plugins: [
    cspaceUIPluginRecordMaterial(),
    ...plugins.map((plugin) => plugin()),
  ],
});
