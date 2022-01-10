## NestJS with GraphQL sample

### Installation

`docker-compose up -d app`

### Open Graphql Playground

[http://0.0.0.0:3000/graphql](http://0.0.0.0:3000/graphql)

### Sample Query
```
-- Query_1
{
  cats {
    id,
    name,
    age
  }
}

-- Result_1
{
  "data": {
    "cats": [
      {
        "id": 1,
        "name": "mike",
        "age": 5
      },
      {
        "id": 2,
        "name": "kuro",
        "age": 3
      },
      {
        "id": 3,
        "name": "maro",
        "age": 8
      }
    ]
  }
}
```
```
-- Query_2
{
  cat(id: 1) {
    id,
    name,
    age
  }
}

-- Result_2
{
  "data": {
    "cat": {
      "id": 1,
      "name": "mike",
      "age": 5
    }
  }
}
```

### With curl
`$ curl -X POST -H "Content-Type:application/json" -d '{ "query": "{ cat(id: 1) { id,name,age } }" }' http://0.0.0.0:3000/graphql`

### Base Sample
[12-graphql-schema-first](https://github.com/nestjs/nest/tree/master/sample/12-graphql-schema-first)

### NestJS Official Guide

[https://docs.nestjs.com/graphql/quick-start#playground](https://docs.nestjs.com/graphql/quick-start#playground)
