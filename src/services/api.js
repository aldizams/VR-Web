import axios from 'axios';
const BASE_URL = 'http://localhost:8000';

const getAllGedung = () => {
	return axios.get(`${BASE_URL}/gedung/`);
};
const getGedungById = (id) => {
	return axios.get(`${BASE_URL}/gedung/${id}`);
};
const getAllFasilitas = () => {
	return axios.get(`${BASE_URL}/fasilitas`);
};
const getFasilitasById = (id) => {
	return axios.get(`${BASE_URL}/fasilitas/${id}`);
};
const addGedung = (bodyJSON) => {
	return axios.post(`${BASE_URL}/gedung`, bodyJSON);
};
const addFasilitas = (bodyJSON) => {
	return axios.post(`${BASE_URL}/fasilitas`, bodyJSON);
};
const deleteGedung = (id) => {
	return axios.delete(`${BASE_URL}/gedung/${id}`);
};
const deleteFasilitas = (id) => {
	return axios.delete(`${BASE_URL}/fasilitas/${id}`);
};
const updateGedung = (id, bodyJSON) => {
	return axios.put(`${BASE_URL}/gedung/${id}`, bodyJSON);
};
const updateFasilitas = (id, bodyJSON) => {
	return axios.put(`${BASE_URL}/fasilitas/${id}`, bodyJSON);
};
const login = (bodyJSON) => {
	return axios.post(`${BASE_URL}/auth/login`, bodyJSON);
};

export {
	getAllGedung,
	getGedungById,
	getAllFasilitas,
	getFasilitasById,
	addGedung,
	addFasilitas,
	deleteGedung,
	deleteFasilitas,
	updateGedung,
	updateFasilitas,
	login,
};
