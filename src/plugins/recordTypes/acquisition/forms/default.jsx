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
        <Field name="acquisitionReferenceNumber" />

        <Field name="alternativeIdentifierGroupList">
          <Field name="alternativeIdentifierGroup">
            <Field name="alternativeIdentifier" />
            <Field name="alternativeIdentifierNote" />
          </Field>
        </Field>

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

        <Field name="creditLine" />

        <Field name="acquisitionDescription" />
        <Field name="acquisitionReason" />
        <Field name="acquisitionNote" />
        <Field name="acquisitionProvisos" />
      </Panel>

      <Panel name="priceInformation" collapsible collapsed>
        <Cols>
          <Col>
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
          </Col>

          <Col>
            <InputTable name="objectPurchasePrice">
              <Field name="objectPurchasePriceCurrency" />
              <Field name="objectPurchasePriceValue" />
            </InputTable>

            <InputTable name="originalObjectPurchasePrice">
              <Field name="originalObjectPurchasePriceCurrency" />
              <Field name="originalObjectPurchasePriceValue" />
            </InputTable>
          </Col>
        </Cols>
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
