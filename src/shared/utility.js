import validator from 'validator';

export const checkValidity = (type, value) => {
    console.log(typeof value);
    if (type === 'subject' || type === 'text') {
        return !!value && typeof value === 'string' && value.length > 0;
    }
    else {
        const list = value.split(',');
        return list.every(((item) => validator.isEmail(item.trim())));
    }
}