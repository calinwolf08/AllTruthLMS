/// <reference path="../pb_data/types.d.ts" />
migrate((db) => {
  const collection = new Collection({
    "id": "fsxjtowpgskrwr6",
    "created": "2023-11-27 01:02:46.096Z",
    "updated": "2023-11-27 01:02:46.096Z",
    "name": "Scorm",
    "type": "base",
    "system": false,
    "schema": [
      {
        "system": false,
        "id": "bokwn2zz",
        "name": "field",
        "type": "file",
        "required": true,
        "presentable": false,
        "unique": false,
        "options": {
          "maxSelect": 1,
          "maxSize": 5242880,
          "mimeTypes": [
            "application/zip"
          ],
          "thumbs": [],
          "protected": false
        }
      }
    ],
    "indexes": [],
    "listRule": null,
    "viewRule": null,
    "createRule": null,
    "updateRule": null,
    "deleteRule": null,
    "options": {}
  });

  return Dao(db).saveCollection(collection);
}, (db) => {
  const dao = new Dao(db);
  const collection = dao.findCollectionByNameOrId("fsxjtowpgskrwr6");

  return dao.deleteCollection(collection);
})
