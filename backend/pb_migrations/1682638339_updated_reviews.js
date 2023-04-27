migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("wafh8svgitbfe66")

  // remove
  collection.schema.removeField("70g8bhbo")

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "aoy7u1qm",
    "name": "releaseDate",
    "type": "date",
    "required": true,
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

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "70g8bhbo",
    "name": "albumYear",
    "type": "number",
    "required": true,
    "unique": false,
    "options": {
      "min": 4,
      "max": 4
    }
  }))

  // remove
  collection.schema.removeField("aoy7u1qm")

  return dao.saveCollection(collection)
})
