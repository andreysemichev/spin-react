export default (items, name) => {
    let temp = "";
    let flag = false;

    items.forEach(item => {
        if (item.isCheck && !flag) {
            temp += item.name.replace(/ /g,"%20").toLowerCase();
            flag = true;
        } else if (item.isCheck && flag) {
            temp += "," + item.name.replace(/ /g,"%20").toLowerCase();
        }
    });

    if (temp.length !== 0) {
        return `${name}=${temp}`;
    }

    return null;
}