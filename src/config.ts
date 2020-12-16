import Axios, { AxiosResponse } from "axios";

export const apiURL = 'http://46.101.154.231';

export const logOut = () => {
    Axios.get(`${apiURL}/api/users/logout`, {
            withCredentials: true
        }).then((res: AxiosResponse) => {
            if (res.data.success === true) {
                window.location.href = "/"
            }
        })
}