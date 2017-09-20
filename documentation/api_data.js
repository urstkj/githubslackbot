define({ "api": [  {    "type": "post",    "url": "/repos",    "title": "Create repo",    "name": "Create_Repo",    "group": "Repos",    "version": "1.0.0",    "parameter": {      "fields": {        "Parameter": [          {            "group": "Parameter",            "type": "String",            "optional": false,            "field": "name",            "description": "<p>Name of the github repo</p>"          },          {            "group": "Parameter",            "type": "String",            "optional": false,            "field": "slackWebHookURL",            "description": "<p>Url from slack webhook for channel</p>"          },          {            "group": "Parameter",            "type": "Number",            "optional": true,            "field": "projectNumber",            "description": "<p>Project number from Pivotal Tracker</p>"          },          {            "group": "Parameter",            "type": "Boolean",            "optional": true,            "field": "shouldAddLinkToPivatol",            "description": "<p>true adds pivatol story when PR is created</p>"          },          {            "group": "Parameter",            "type": "Boolean",            "optional": true,            "field": "shouldChangeStateToDeliveredOnMerge",            "description": "<p>true changes pivatol story to delivered once a story is delivered</p>"          }        ]      }    },    "success": {      "examples": [        {          "title": "Success-Response",          "content": "HTTP/1.1 201 OK\n  {\n    \"_id\": \"59c2a7a187b5d5084a507c91\",\n    \"shouldChangeStateToDeliveredOnMerge\": true,\n    \"shouldAddLinkToPivatol\": true,\n    \"projectNumber\": 657416854,\n    \"slackWebHookURL\": \"SomeURl for slack\",\n    \"createdAt\": \"2017-09-20T17:38:41.119Z\",\n    \"updatedAt\": \"2017-09-20T17:38:41.119Z\",\n    \"name\": \"Test repo\",\n    \"__v\": 0\n  },",          "type": "json"        }      ]    },    "filename": "routes/repo.js",    "groupTitle": "Repos"  },  {    "type": "delete",    "url": "/repos/:id",    "title": "Delete repo",    "name": "Delete_Repo",    "group": "Repos",    "version": "1.0.0",    "parameter": {      "fields": {        "Parameter": [          {            "group": "Parameter",            "type": "String",            "optional": false,            "field": "id",            "description": "<p>Id of the repo</p>"          }        ]      }    },    "filename": "routes/repo.js",    "groupTitle": "Repos"  },  {    "type": "post",    "url": "/repos",    "title": "Get repos",    "name": "Get_Repos",    "group": "Repos",    "version": "1.0.0",    "success": {      "examples": [        {          "title": "Success-Response",          "content": "HTTP/1.1 201 OK\n  [{\n    \"_id\": \"59c2a7a187b5d5084a507c91\",\n    \"shouldChangeStateToDeliveredOnMerge\": true,\n    \"shouldAddLinkToPivatol\": true,\n    \"projectNumber\": 657416854,\n    \"slackWebHookURL\": \"SomeURl for slack\",\n    \"createdAt\": \"2017-09-20T17:38:41.119Z\",\n    \"updatedAt\": \"2017-09-20T17:38:41.119Z\",\n    \"name\": \"Test repo\",\n    \"__v\": 0\n  },...]",          "type": "json"        }      ]    },    "filename": "routes/repo.js",    "groupTitle": "Repos"  },  {    "type": "post",    "url": "/repos",    "title": "Get repos",    "name": "Get_Repos",    "group": "Repos",    "version": "1.0.0",    "success": {      "examples": [        {          "title": "Success-Response",          "content": "HTTP/1.1 201 OK\n  [{\n    \"_id\": \"59c2a7a187b5d5084a507c91\",\n    \"shouldChangeStateToDeliveredOnMerge\": true,\n    \"shouldAddLinkToPivatol\": true,\n    \"projectNumber\": 657416854,\n    \"slackWebHookURL\": \"SomeURl for slack\",\n    \"createdAt\": \"2017-09-20T17:38:41.119Z\",\n    \"updatedAt\": \"2017-09-20T17:38:41.119Z\",\n    \"name\": \"Test repo\",\n    \"__v\": 0\n  },...]",          "type": "json"        }      ]    },    "filename": "routes/repo.js",    "groupTitle": "Repos"  },  {    "type": "put",    "url": "/repos/:id",    "title": "Update repo",    "name": "Update_Repo",    "group": "Repos",    "version": "1.0.0",    "parameter": {      "fields": {        "Parameter": [          {            "group": "Parameter",            "type": "String",            "optional": false,            "field": "id",            "description": "<p>Id of the repo</p>"          },          {            "group": "Parameter",            "type": "String",            "optional": true,            "field": "name",            "description": "<p>Name of the github repo</p>"          },          {            "group": "Parameter",            "type": "String",            "optional": true,            "field": "slackWebHookURL",            "description": "<p>Url from slack webhook for channel</p>"          },          {            "group": "Parameter",            "type": "Number",            "optional": true,            "field": "projectNumber",            "description": "<p>Project number from Pivotal Tracker</p>"          },          {            "group": "Parameter",            "type": "Boolean",            "optional": true,            "field": "shouldAddLinkToPivatol",            "defaultValue": "true",            "description": "<p>true adds pivatol story when PR is created</p>"          },          {            "group": "Parameter",            "type": "Boolean",            "optional": true,            "field": "shouldChangeStateToDeliveredOnMerge",            "defaultValue": "true",            "description": "<p>true changes pivatol story to delivered once a story is delivered</p>"          }        ]      }    },    "success": {      "examples": [        {          "title": "Success-Response",          "content": "HTTP/1.1 201 OK\n  {\n    \"_id\": \"59c2a7a187b5d5084a507c91\",\n    \"shouldChangeStateToDeliveredOnMerge\": true,\n    \"shouldAddLinkToPivatol\": true,\n    \"projectNumber\": 657416854,\n    \"slackWebHookURL\": \"SomeURl for slack\",\n    \"createdAt\": \"2017-09-20T17:38:41.119Z\",\n    \"updatedAt\": \"2017-09-20T17:38:41.119Z\",\n    \"name\": \"Test repo\",\n    \"__v\": 0\n  },",          "type": "json"        }      ]    },    "filename": "routes/repo.js",    "groupTitle": "Repos"  }] });
