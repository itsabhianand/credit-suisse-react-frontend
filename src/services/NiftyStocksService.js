import axios from "axios";

const NIFTY_REST_API_URL = 'http://localhost:8080/openfigi/stocks';

class NiftyStocksService {

    getStocks() {
        const openfigiRequest = { query : 'NIFTY 50', exchCode : 'IN'};
       return axios.post(NIFTY_REST_API_URL, openfigiRequest);
    }
}

export default new NiftyStocksService()