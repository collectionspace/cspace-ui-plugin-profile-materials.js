export default (configContext) => {
  const {
    React,
  } = configContext.lib;

  const {
    Col,
    Panel,
    Row,
  } = configContext.layoutComponents;

  const {
    Field,
  } = configContext.recordComponents;

  return (
    <Field name="measuredPartGroupList">
      <Field name="measuredPartGroup">
        <Panel>
          <Row>
            <Field name="dimensionSummary" />
            <Col />
          </Row>

          <Field name="dimensionSubGroupList">
            <Field name="dimensionSubGroup">
              <Field name="dimension" />
              <Field name="measuredBy" />
              <Field name="measurementMethod" />
              <Field name="value" />
              <Field name="measurementUnit" />
              <Field name="valueQualifier" />
              <Field name="valueDate" />
            </Field>
          </Field>
        </Panel>
      </Field>
    </Field>
  );
};
