const tf = require("@tensorflow/tfjs-node");

async function loadModel() {
	return tf.loadGraphModel(process.env.MODEL_URL);
	// const modelUrl = "file://models/model.json";
	// return tf.loadGraphModel(modelUrl);
}

module.exports = loadModel;
