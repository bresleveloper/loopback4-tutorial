# NodeJS LoobBack4 tutorial

## how to install

* install nodejs as usual
* `npm install -g @loopback/cli`

## create an app

* `lb4 app` (or `lb4` since its default)

you will be asked a few questions, when asked about project setting, omit dockers

#### create your 1st controller
* `lb4 controller`
* answer some questions, choose `Empty Controller`






# Create Rest Api (VS MySql DB)

In order to create a full rest api with loobback's auto-gen abilities you will have to create all of the following (and in this order, DB type doesnt matter)

* create your DB instance and table (if you dont have one already) to expose with a REST API
* create model `lb4 model` - a class representing your data items
* create datasource `lb4 datasource` - a class wrapping the connector to your DB (or other datasource)
* create repository `lb4 repository` - an injectable service for your controller
* create controller `lb4 controller` - a handler for you to create http/s endpoints

once we configure the model and datasource correctly vs the db, the controller should auto-gen CRUD operations correctly

## Model

In the CLI enter `lb4 model`, and answer the questions. You currently ask for and `Entity` type model.

Once you to property generation, you can slowly but surely enter all your props names (db column names) that you desire in a CRUD operation. If its really long you can make a few chosen ones and copy-paste from the generated `.model.ts.` file

```
  @property({
    type: 'string',
    required: true,
  })
  name: string;

  @property({
    type: 'number',
    required: true,
  })
  age: number;
```

## DataSource

Next you can now build a datasource to connect a model with a db-connector.

When running `lb4 datasource` you will be asked for all the credentials for the datasource.

#### Notice that he saves the password in clear text in the generated `.datasource.config.json` file. consult your Security Dept.

```
{
  "name": "ShukiPersonDb",
  "connector": "mysql",
  "host": "127.0.0.1",
  "port": 3306,
  "user": "shuki",
  "password": "2",
  "database": "shuky play"
}
```

### change default table name
With Default settings the connector will try to get a table with identical name to the Model Class name, if the name is different you can specity that in the model

```
@model({
  settings: {
    strict: false,
    mysql: {
      table: 'shuky person'
    }
  }
})
export class ShukiPerson extends Entity {
```

you can change `mysql` to your dbname

### testing the connector
`MYSQL_HOST=127.0.0.1 MYSQL_PORT=3306 MYSQL_USER=shuki MYSQL_PASSWORD=2 MYSQL_DATABASE="shuky play" CI=true npm test`





