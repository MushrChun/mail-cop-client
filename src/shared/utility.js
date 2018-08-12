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

export const alertPreparation = (state) => {
    const notification = ['subject', 'to', 'cc', 'bcc', 'text'].map( field => {
        if(state[field].error){
            return field.toUpperCase()
        }
        return null
    }).join(',').concat(' is invalid');
    return notification;
}

export const genInitState = () => {
    return {
        subject: {
            value: '',
            error: false
        },
        to: {
            value: '',
            error: false
        },
        cc: {
            value: '',
            error: false
        },
        bcc: {
            value: '',
            error: false
        },
        text: {
            value: '',
            error: false
        },
        loading: false,
        success: false
    }
}