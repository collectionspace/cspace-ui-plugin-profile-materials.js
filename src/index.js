/* global cspaceUIPluginProfileMaterials */
/* The cspaceUIPluginProfileMaterials global variable is set by webpack (in non-test builds). See
 * webpack.config.js. */

import { defineMessages } from 'react-intl';
import messages from './messages';
import plugins from './plugins';
import styles from '../styles/cspace-ui-plugin-profile/materials.css';

module.exports = () => ({
  messages,
  className: styles.common,
  prettyUrls: true,
  tenantId: '2000',
  pluginInfo: {
    cspaceUIPluginProfileMaterials: {
      messages: defineMessages({
        name: {
          id: 'cspaceUIPluginProfileMaterials.name',
          defaultMessage: 'Materials Authority profile',
        },
      }),
      version: cspaceUIPluginProfileMaterials.packageVersion,
    },
  },
  plugins: plugins.map(plugin => plugin()),
});