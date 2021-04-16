function getQueryVariable(variable) {
    let query = variable.replace(/\?/g, '').split('&');
    let result = {};

    for (let i = 0; i < query.length; i++) {
        let temp = query[i].split("=");
        if (temp.length === 2) {
            result[temp[0]] = temp[1].split("+")
        }
    }

    return result;
}

export default getQueryVariable;