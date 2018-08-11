const template = (configContext) => {
  const {
    React,
  } = configContext.lib;

  const {
    Col,
    Cols,
    Panel,
    Row,
  } = configContext.layoutComponents;

  const {
    Field,
    Subrecord,
  } = configContext.recordComponents;

  return (
    <Field name="document">
      <Panel name="media" collapsible>
        <Row>
          <Field name="identificationNumber" />
          <Field name="title" />
        </Row>

        <Panel name="file" collapsible>
          <Subrecord name="blob" showDetachButton />
        </Panel>

        <Field name="externalUrl" />

        <Cols>
          <Col>
            <Field name="contributor" />
            <Field name="creator" />

            <Field name="relationList">
              <Field name="relation" />
            </Field>

            <Field name="typeList">
              <Field name="type" />
            </Field>

            <Field name="coverage" />
          </Col>

          <Col>
            <Field name="dateGroupList">
              <Field name="dateGroup" />
            </Field>

            <Field name="source" />

            <Field name="subjectList">
              <Field name="subject" />
            </Field>

            <Field name="copyrightStatement" />
            <Field name="rightsHolder" />
          </Col>
        </Cols>

        <Field name="description" />
      </Panel>
    </Field>
  );
};

export default configContext => ({
  template: template(configContext),
});
