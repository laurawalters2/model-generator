Add the following script to your server package.json

```javascript
"scripts": {
"create:model": "cd node_modules && cd mern-model-generator && npm run create:model"
}
```

Run the following command in the server directory to generate a template mern model (replace 'User' with your model name)

```javascript
npm run create:model -name=User
```
