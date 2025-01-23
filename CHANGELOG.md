# Change Log

## v4.0.1

- Remove non-indexed material fields from the public browser template

## v4.0.0

v4.0.0 adds support for CollectionSpace 8.0, and requires cspace-ui version 9.

### Breaking Changes

- On the record editor form for Object records:
  - The number of objects field (`numberOfObjects`) has been replaced with the first instance of the repeating object count group (`objectCountGroupList/objectCountGroup`). If this version of the materials profile is used with an older CollectionSpace server, values entered in the instance of the repeating group will not be saved.

## v3.0.0

v3.0.0 adds support for CollectionSpace 7.0.

### Breaking Changes

- The record editor form for material records now uses the `featuredCollectionGroupList/featuredCollectionGroup` repeating group, added in CollectionSpace 7.0. To use this version of the material record with an older CollectionSpace server, this field group should be hidden; otherwise, any values entered will not be saved.

- v3.0.0 requires cspace-ui version 6 (and a Collectionspace 7.0 server). On the record editor form for Object records, the annotation field group (`annotationGroupList`) has been added. These fields are defined in cspace-ui version 6.0.0, but not in prior versions. To use this version of cspace-ui-plugin-profile-materials with an older version of cspace-ui, this field group should be hidden; otherwise, any values entered will not be saved.

## v2.0.0

### Breaking Changes

- v2.0.0 requires cspace-ui version 4.
