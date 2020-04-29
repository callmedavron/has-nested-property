export const hasNestedProperty = (obj, nestedProperty) => {

    // if single property -> hasNestedProperty(obj, 'single')
    if (nestedProperty.indexOf('.') === -1) {
        return obj.hasOwnProperty(nestedProperty)
    }

    // prevent only dot` nestedProperty -> hasNestedProperty(obj, '.')
    if (/^\.+$/.test(nestedProperty)) {
        return false;
    }

    // Split by '.'
    let properties = nestedProperty.split('.');

    for (let i = 0; i < properties.length; i++) {

        let prop = properties[i];

        if (!obj || !obj.hasOwnProperty(prop)) {
            return false;
        }

        // switch property
        obj = obj[prop];
    }

    return true;
}
