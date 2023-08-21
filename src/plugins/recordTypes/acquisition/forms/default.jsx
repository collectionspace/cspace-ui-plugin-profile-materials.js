const template = (configContext) => {
  const {
    React,
  } = configContext.lib;

  const {
    Panel,
    Row,
    Cols,
    Col,
  } = configContext.layoutComponents;

  const {
    Field,
    InputTable,
  } = configContext.recordComponents;

  return (
    <Field name="document">
      <Panel name="info" collapsible>
        <Cols>
          <Col>
            <Field name="acquisitionReferenceNumber" />
            <Field name="accessionDateGroup" />

            <InputTable name="acquisitionAuthorizer">
              <Field name="acquisitionAuthorizer" />
              <Field name="acquisitionAuthorizerDate" />
            </InputTable>

            <Field name="acquisitionDateGroupList">
              <Field name="acquisitionDateGroup" />
            </Field>

            <Field name="acquisitionMethod" />

            <Field name="acquisitionSources">
              <Field name="acquisitionSource" />
            </Field>
          </Col>

          <Col>
            <Panel name="priceInformation">
              <InputTable name="groupPurchasePrice">
                <Field name="groupPurchasePriceCurrency" />
                <Field name="groupPurchasePriceValue" />
              </InputTable>

              <InputTable name="objectOfferPrice">
                <Field name="objectOfferPriceCurrency" />
                <Field name="objectOfferPriceValue" />
              </InputTable>

              <InputTable name="objectPurchaseOfferPrice">
                <Field name="objectPurchaseOfferPriceCurrency" />
                <Field name="objectPurchaseOfferPriceValue" />
              </InputTable>

              <InputTable name="objectPurchasePrice">
                <Field name="objectPurchasePriceCurrency" />
                <Field name="objectPurchasePriceValue" />
              </InputTable>

              <InputTable name="originalObjectPurchasePrice">
                <Field name="originalObjectPurchasePriceCurrency" />
                <Field name="originalObjectPurchasePriceValue" />
              </InputTable>
            </Panel>
          </Col>
        </Cols>

        <Field name="creditLine" />
        <Field name="acquisitionReason" />
        <Field name="acquisitionNote" />
        <Field name="acquisitionProvisos" />
      </Panel>

      <Panel name="objectCollectionInformation" collapsible collapsed>
        <Row>
          <Field name="fieldCollectionEventNames">
            <Field name="fieldCollectionEventName" />
          </Field>
        </Row>
      </Panel>
    </Field>
  );
};

export default (configContext) => ({
  template: template(configContext),
});
