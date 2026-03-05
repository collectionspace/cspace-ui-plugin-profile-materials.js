export default (configContext) => {
  const {
    React,
  } = configContext.lib;

  const {
    formatRefNameWithDefault,
  } = configContext.formatHelpers;

  return {
    title: {
      formatter: (data, { separator = ' ' } = {}) => {
        const objectNumber = data.get('objectNumber');
        const material = formatRefNameWithDefault(data.get('material'));

        return (
          <h2>
            {objectNumber}
            {material ? `${separator}${material}` : null}
          </h2>
        );
      },
    },
  };
};
