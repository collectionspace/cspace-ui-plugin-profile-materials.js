const template = (configContext) => {
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

  const {
    extensions,
  } = configContext.config;

  return (
    <Field name="document">
      <Panel name="id" collapsible>
        <Row>
          <Col>
            <Field name="objectNumber" />
            <Field name="objectCount" subpath={['ns2:collectionobjects_common', 'objectCountGroupList', 'objectCountGroup', '0']} />

            <Field name="otherNumberList">
              <Field name="otherNumber">
                <Field name="numberValue" />
                <Field name="numberType" />
              </Field>
            </Field>

            <Row>
              <Field name="collection" />

              <Col>
                <Field name="namedCollections">
                  <Field name="namedCollection" />
                </Field>
              </Col>
            </Row>

            <Field name="recordStatus" />

            <Field name="publishToList">
              <Field name="publishTo" />
            </Field>

            <Field name="inventoryStatusList">
              <Field name="inventoryStatus" />
            </Field>

            <Field name="briefDescriptions">
              <Field name="briefDescription" />
            </Field>
          </Col>

          <Col>
            <Field name="materialGroupList">
              <Field name="materialGroup" tabular={false}>
                <Field name="material" label="" embedded />
              </Field>
            </Field>

            <Field name="materialHandlingGroupList" subpath="ns2:collectionobjects_materials">
              <Field name="materialHandlingGroup">
                <Field name="handling" />
                <Field name="handlingNote" />
              </Field>
            </Field>

            <Field name="materialContainerGroupList" subpath="ns2:collectionobjects_materials">
              <Field name="materialContainerGroup">
                <Field name="container" />
                <Field name="containerNote" />
              </Field>
            </Field>

            <Field name="materialConditionGroupList" subpath="ns2:collectionobjects_materials">
              <Field name="materialConditionGroup">
                <Field name="condition" />
                <Field name="conditionNote" />
              </Field>
            </Field>

            <Field name="computedCurrentLocation" />

            <Field name="homeLocationGroupList">
              <Field name="homeLocationGroup">
                <Field name="homeLocation" />
                <Field name="homeLocationNote" />
              </Field>
            </Field>
          </Col>
        </Row>

        <Field name="annotationGroupList" subpath="ns2:collectionobjects_annotation">
          <Field name="annotationGroup">
            <Panel>
              <Row>
                <Field name="annotationType" />
                <Field name="annotationDate" />
                <Field name="annotationAuthor" />
              </Row>
              <Field name="annotationNote" />
            </Panel>
          </Field>
        </Field>
      </Panel>

      <Panel name="desc" collapsible collapsed>
        <Row>
          <Col>
            <Field name="objectStatusList">
              <Field name="objectStatus" />
            </Field>

            <Field name="materialFinishGroupList" subpath="ns2:collectionobjects_materials">
              <Field name="materialFinishGroup">
                <Field name="finish" />
                <Field name="finishNote" />
              </Field>
            </Field>
          </Col>

          <Col>
            <Field name="colors">
              <Field name="color" />
            </Field>

            <Field name="materialGenericColors" subpath="ns2:collectionobjects_materials">
              <Field name="materialGenericColor" />
            </Field>
          </Col>
        </Row>

        <Field name="materialPhysicalDescriptions" subpath="ns2:collectionobjects_materials">
          <Field name="materialPhysicalDescription" />
        </Field>

        {extensions.dimension.form}
      </Panel>

      <Panel name="hierarchy" collapsible collapsed>
        <Field name="relation-list-item" subpath="rel:relations-common-list" />
      </Panel>
    </Field>
  );
};

export default (configContext) => ({
  template: template(configContext),
});
