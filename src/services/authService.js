import { toast } from "react-toastify";

export async function login(authDetail) {
    const response = await fetch(`${process.env.REACT_APP_HOST}/login`, {
        method: "POST",
        headers: { "content-Type": "application/json" },
        body: JSON.stringify(authDetail)
    });
    if (!response.ok) {
        throw { message: response.statusText, statusCode: response.status };
    }

    const data = await response.json();

    if (data.accessToken) {
        sessionStorage.setItem('token', JSON.stringify(data.accessToken));
        sessionStorage.setItem('skid', JSON.stringify(data.user.id));
        toast.success('Login successful');
    }
    return data;
}

export async function register(authDetail) {
    const response = await fetch(`${process.env.REACT_APP_HOST}/register`, {
        method: "POST",
        headers: { "content-Type": "application/json" },
        body: JSON.stringify(authDetail)
    });
    if (!response.ok) {
        throw { message: response.statusText, statusCode: response.status };
    }

    const data = await response.json();

    if (data.accessToken) {
        sessionStorage.setItem('token', JSON.stringify(data.accessToken));
        sessionStorage.setItem('skid', JSON.stringify(data.user.id));
        toast.success('Registration successful');
    }
    return data;
}

export function logout() {
    sessionStorage.removeItem("token");
    sessionStorage.removeItem("skid");
}