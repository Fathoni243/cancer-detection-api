const predictClassification = require("../service/inferenceService.js");
const crypto = require("crypto");
const storeData = require("../service/storeData.js");
const getAllHistories = require("../service/getAllHistories.js");

async function postPredictHandler(request, h) {
	const { image } = request.payload;
	const { model } = request.server.app;

	const { label, suggestion } = await predictClassification(model, image);
	const id = crypto.randomUUID();
	const createdAt = new Date().toISOString();

	const data = {
		id: id,
		result: label,
		suggestion: suggestion,
		createdAt: createdAt,
	};

	await storeData(id, data);

	const response = h.response({
		status: "success",
		message: "Model is predicted successfully",
		data,
	});
	response.code(201);
	return response;
}

async function getAllHistoriesHandler(_request, h) {
	histories = await getAllHistories();

	const response = h.response({
		status: "success",
		data: histories,
	});

	return response;
}

module.exports = { postPredictHandler, getAllHistoriesHandler };
