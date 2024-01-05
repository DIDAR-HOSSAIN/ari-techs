import axios from "axios";

const axiosApi = axios.create({
    baseURL: "http://localhost:8000/",
    headers: {
        // "X-CSRF-TOKEN": document
        //     .querySelector('meta[name="csrf-token"]')
        //     .getAttribute("content"),
        "Content-Type": "application/json",
    },
});

export default axiosApi;


// import axios from "axios";

// const instance = axios.create({
//     baseURL: "http://localhost:8000/",
//     headers: {
//         "Content-Type": "application/json",
//     },
// });

// export default instance;
