import axios from "axios";
const API_KEY = " https://vlxxvip.top";
const axiosClient = axios.create({ baseURL: API_KEY });

const getOneFilmNguonC = async (slug) => {
    try {
      const { data } = await axiosClient({
        method: "get",
        url: `/api-phim/${slug}`,
       
      });
      return data;
    } catch (error) {
      return error.message;
    }
  };
  const getListMovies = async (page) => {
    try {
      const response = await axiosClient({
        method: 'get',
        url: `/danh-sach/phim-moi-cap-nhat?page=${page}`,
        headers: {
          'Content-Type': 'application/json',
        },
      });
  
      return response;
    } catch (error) {
      console.error('Error fetching movies:', error); // Log the error for debugging
      return { error: error.message }; // Return an object with the error message
    }
  };
  
  export { getOneFilmNguonC,getListMovies};