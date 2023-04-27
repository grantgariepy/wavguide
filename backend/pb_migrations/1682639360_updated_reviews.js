migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("wafh8svgitbfe66")

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "wopxrno7",
    "name": "reviewTitle",
    "type": "text",
    "required": true,
    "unique": false,
    "options": {
      "min": 1,
      "max": null,
      "pattern": ""
    }
  }))

  return dao.saveCollection(collection)
}, (db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("wafh8svgitbfe66")

  // remove
  collection.schema.removeField("wopxrno7")

  return dao.saveCollection(collection)
})
