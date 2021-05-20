const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = {
	entry: "./src/index.js",
	devtool: 'source-map',
	output: {
		path: path.join(__dirname, "/dist"),
		filename: "index-bundle.js"
	},
	module: {
		rules: [
			{
				test: /\.js$/,
				exclude: /node_modules/,
				use: ["babel-loader"]
			},
			{
				test: /\.css$/,
				use: ["style-loader", "css-loader"]
			},
			{
				test: /\.(png|jpe?g|gif|svg)$/i,
				use: [
					{
						loader: 'file-loader',
					},
				],
			}
		]
	},
	plugins: [
		new HtmlWebpackPlugin({
			template: "./public/index.html"
		})
	]
};
