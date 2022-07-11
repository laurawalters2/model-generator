Add the following script to your server package.json

```javascript
"scripts": {
"create:model": "cd node_modules && cd mern-model-generator && npm run create:model"
}
```

Create a models folder in your server folder (if one doesn't already exist)

Run the following command to generate a mern model (replace 'User' with your model name)

```javascript
npm run create:model -name=User
```
