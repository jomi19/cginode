# cginode
Running on port: 1337

## npm install 
Instalerar projektet

## npm start
Startar apit

# Paths
### POST /
body
```json
{
  "text": "text där du vill räkna orden"
}
```

```
curl -d "text=hej jag heter joakim joakim" -X POST http://localhost:1337/

```
Returns

```json
{
  "joakim: 2,
  "hej": 1,
  "jag": 1,
  "heter": 1
}

```
