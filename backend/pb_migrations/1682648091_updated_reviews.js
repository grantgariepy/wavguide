migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("wafh8svgitbfe66")

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "0c6yb3rs",
    "name": "albumId",
    "type": "text",
    "required": true,
    "unique": false,
    "options": {
      "min": null,
      "max": null,
      "pattern": ""
    }
  }))

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "g1wqdet7",
    "name": "artistId",
    "type": "text",
    "required": true,
    "unique": false,
    "options": {
      "min": null,
      "max": null,
      "pattern": ""
    }
  }))

  return dao.saveCollection(collection)
}, (db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("wafh8svgitbfe66")

  // remove
  collection.schema.removeField("0c6yb3rs")

  // remove
  collection.schema.removeField("g1wqdet7")

  return dao.saveCollection(collection)
})
