import axios from "axios";

// Backend deployed URL
const API = axios.create({
  baseURL: "https://satvedh-backend.onrender.com/api",
});

// USERS
export const registerUser = (data) => API.post("/users/register", data);
export const loginUser = (data) => API.post("/users/login", data);
export const getUsers = () => API.get("/users");

// REQUESTS
export const createRequest = (data) => API.post("/requests", data);
export const getRequests = () => API.get("/requests");
export const updateRequestStatus = (id, status) =>
  API.patch(`/requests/${id}`, { status });
