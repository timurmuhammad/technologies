import axios from 'axios';
import IConfigRequest from './types/ConfigRequest.interface';
import getFormData from './getFormData';

export default async function request(config: IConfigRequest) {
    const axiosConfig: any = {
        url: "https://iase24.com" + config.path, // baseUrl базовая ссылка
        method: config.method
    }

    if(config.data) {
        if(config.isParamData) {
            axiosConfig.url += getFormData(config.data);
        } else {
            axiosConfig.data = config.data;
        }
    }

    try {
        const response = await axios(axiosConfig);
        const { data } = response;
        return data;
    } catch (err) {
        console.log("Error while requesting to Backend API");
    }
}