migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("wafh8svgitbfe66")

  // update
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "x8hifof4",
    "name": "reviewDate",
    "type": "date",
    "required": false,
    "unique": false,
    "options": {
      "min": "",
      "max": ""
    }
  }))

  return dao.saveCollection(collection)
}, (db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("wafh8svgitbfe66")

  // update
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "x8hifof4",
    "name": "reviewDate",
    "type": "date",
    "required": true,
    "unique": false,
    "options": {
      "min": "",
      "max": ""
    }
  }))

  return dao.saveCollection(collection)
})
