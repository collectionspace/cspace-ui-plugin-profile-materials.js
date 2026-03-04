export default (configContext) => {
  const {
    React,
  } = configContext.lib;

  const {
    formatRefNameWithDefault,
  } = configContext.formatHelpers;

  return {
    subtitle: {
      formatter: (data) => {
        const material = formatRefNameWithDefault(data.get('material'));
        return material ? <p>{material}</p> : null;
      },
    },

  };
};
