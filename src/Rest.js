import axios from "axios";

let client = axios.create({
    baseURL: "https://restcountries.com/v3.1/"
});


export async function get(url, config = null) {
    const response = await client.get(url, config);
    if (response.status !== 200 && response.status !== 201) {
        throw new Error(response.data);
    }
    return response.data;
}