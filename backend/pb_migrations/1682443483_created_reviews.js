migrate((db) => {
  const collection = new Collection({
    "id": "wafh8svgitbfe66",
    "created": "2023-04-25 17:24:43.166Z",
    "updated": "2023-04-25 17:24:43.166Z",
    "name": "reviews",
    "type": "base",
    "system": false,
    "schema": [
      {
        "system": false,
        "id": "ovz4obi0",
        "name": "user",
        "type": "relation",
        "required": true,
        "unique": false,
        "options": {
          "collectionId": "_pb_users_auth_",
          "cascadeDelete": true,
          "minSelect": null,
          "maxSelect": 1,
          "displayFields": [
            "id",
            "avatar",
            "name"
          ]
        }
      },
      {
        "system": false,
        "id": "idhnnlp7",
        "name": "albumName",
        "type": "text",
        "required": true,
        "unique": false,
        "options": {
          "min": 1,
          "max": 256,
          "pattern": ""
        }
      },
      {
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
      },
      {
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
      },
      {
        "system": false,
        "id": "7e6d2ezh",
        "name": "listenDate",
        "type": "date",
        "required": false,
        "unique": false,
        "options": {
          "min": "",
          "max": ""
        }
      },
      {
        "system": false,
        "id": "femayool",
        "name": "albumCover",
        "type": "text",
        "required": true,
        "unique": false,
        "options": {
          "min": 2,
          "max": 256,
          "pattern": ""
        }
      },
      {
        "system": false,
        "id": "em3yqgvo",
        "name": "albumArtist",
        "type": "text",
        "required": true,
        "unique": false,
        "options": {
          "min": 2,
          "max": 256,
          "pattern": ""
        }
      },
      {
        "system": false,
        "id": "jj4j9ca1",
        "name": "reviewText",
        "type": "text",
        "required": false,
        "unique": false,
        "options": {
          "min": 2,
          "max": 5000,
          "pattern": ""
        }
      },
      {
        "system": false,
        "id": "o59yqhcs",
        "name": "reviewRating",
        "type": "number",
        "required": false,
        "unique": false,
        "options": {
          "min": 0,
          "max": 10
        }
      },
      {
        "system": false,
        "id": "qxin1nyi",
        "name": "reviewTags",
        "type": "text",
        "required": false,
        "unique": false,
        "options": {
          "min": 0,
          "max": 200,
          "pattern": ""
        }
      }
    ],
    "listRule": "",
    "viewRule": "",
    "createRule": "@request.auth.id != \"\" && @request.auth.id = @request.data.user",
    "updateRule": "@request.auth.id = user",
    "deleteRule": "@request.auth.id = user",
    "options": {}
  });

  return Dao(db).saveCollection(collection);
}, (db) => {
  const dao = new Dao(db);
  const collection = dao.findCollectionByNameOrId("wafh8svgitbfe66");

  return dao.deleteCollection(collection);
})
