const addIsCheckField = (array, selectedField = null) => {
    let result = [];

    array.forEach(item => {
        const itemValid = item.replace(/ /g,"%20").toLowerCase();
        
        if (selectedField && selectedField.indexOf(itemValid) !== -1) {
            result.push({
                isCheck: true,
                name: item
            });
        } else {
            result.push({
                isCheck: false,
                name: item
            });
        }
    });

    return result;
}

export default addIsCheckField;