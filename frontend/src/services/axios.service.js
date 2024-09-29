import axios from "axios";

const fetchData = async (setData) => {
    try {
        const response = await axios.get("http://localhost:3000/menu");
        const jsonData = await response;
        console.log(jsonData);
    } catch (err) {
        console.log(err);
    }
};

export default fetchData;
