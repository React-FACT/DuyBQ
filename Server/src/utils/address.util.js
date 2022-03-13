const addressHelper = (zone) => {
    let isResult = false;
    let isName = '';
    let isParent = '';
    switch (zone) {
        case 'country':
            isResult = true;
            isName = 'Country';
            break;
        case 'province':
            isResult = true;
            isName = 'Province';
            isParent = 'countryId';
            break;
        case 'district':
            isResult = true;
            isName = 'District';
            isParent = 'provinceId';
            break;
        case 'ward':
            isResult = true;
            isName = 'Ward';
            isParent = 'districtId';
            break;
        default:
            isResult = false;
            break;
    }
    return { isResult, isName, isParent };
};
module.exports = { addressHelper };