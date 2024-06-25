function getSession() {
    const token = JSON.parse(sessionStorage.getItem("token"));
    const skid = JSON.parse(sessionStorage.getItem("skid"));
    return { token, skid };
}

export async function getUser() {
    const browserData = getSession();
    const requestOptions = {
        method: "GET",
        headers: { "Content-Type": "application/json", Authorization: `Bearer ${browserData.token}` }
    }
    const response = await fetch(`${process.env.REACT_APP_HOST}/600/users/${browserData.skid}`, requestOptions);
    if (!response.ok) {
        throw { message: response.statusText, statusCode: response.status }; //eslint-disable-line
    }
    const data = await response.json();
    return data;
}

export async function getUserOrders() {
    const browserData = getSession();
    const response = await fetch(`${process.env.REACT_APP_HOST}/660/orders?user.id=${browserData.skid}`, {
        method: "GET",
        headers: { "Content-Type": "application/json", Authorization: `Bearer ${browserData.token}` }
    });
    if (!response.ok) {
        throw { message: response.statusText, statusCode: response.status }; //eslint-disable-line
    }
    const data = await response.json();
    return data;
}

export async function createOrder(cartList, total, user) {
    const browserData = getSession();
    const order = {
        products: cartList,
        amount_paid: total,
        user: {
            name: user.name,
            email: user.email,
            id: user.id
        }
    }
    const response = await fetch(`${process.env.REACT_APP_HOST}/660/orders`, {
        method: "POST",
        headers: { "Content-Type": "application/json", Authorization: `Bearer ${browserData.token}` },
        body: JSON.stringify(order)
    });
    if (!response.ok) {
        throw { message: response.statusText, statusCode: response.status }; //eslint-disable-line
    }
    const data = await response.json();
    return data;
}

