import axios from "axios";

export const api = axios.create({
	baseURL: "https://donation-api-aycf.onrender.com/",
	timeout: 5000,
});
