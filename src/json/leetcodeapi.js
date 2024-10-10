import axios from "axios";

let ltCache= null;
async function getLeetCodeData() {
    if(ltCache != null)return ltCache;
    ltCache = await fetchLeetCodeData();
    return ltCache;
}
async function fetchLeetCodeData() {
  try {
    const response = await axios.get(
      "https://alfa-leetcode-api.onrender.com/karthikkrazy/solved"
    );
    console.log(response.data);
    return response.data;
  } catch (error) {
    console.error("Error fetching data:", error);
  }
}
export default getLeetCodeData;