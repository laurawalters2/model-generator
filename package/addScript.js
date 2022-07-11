const fs = require("fs");
fs.writeFileSync("./test.js", "test", (err) => {
	if (err) {
		console.log("error");
	}
});

let parsedData;
fs.readFile("../../package.json", "utf8", (err, data) => {
	if (err) {
		console.log(err);
		return;
	}
	parsedData = JSON.parse(data);
	console.log("test");
	parsedData.scripts["create:model"] =
		"cd node_modules && cd mern-model-generator && npm run create:model";
	fs.writeFile("../../package.json", JSON.stringify(parsedData), (err) => {
		if (err) {
			console.log(err);
		}
	});
});
