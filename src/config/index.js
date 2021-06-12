// const PORT = 4000;
// export const API_URL = `http://localhost:${PORT}/api`;
export const API_URL = `https://garage-api1.herokuapp.com/api`

export const ROLES = {
  1: "Office Assistant",
  2: "Mechanic",
  3:"Owner"
}

export const isOfficeAssistant = () => +localStorage.getItem("role") === 1;
export const isMechanic = () => +localStorage.getItem("role") === 2;
export const isOwner = () => +localStorage.getItem("role") === 3;
