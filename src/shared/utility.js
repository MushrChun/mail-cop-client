import validator from 'validator';

export const checkValidity = (type, value) => {
    console.log(typeof value);
    if (type === 'subject' || type === 'text') {
        return !!value && typeof value === 'string' && value.length > 0;
    }
    else if (type === 'from') {
        return validator.isEmail(value.trim())
    }
    else {
        const list = value.split(',');
        return list.every(((item) => validator.isEmail(item.trim())));
    }
}

export const alertPreparation = (state) => {
    const invalidArray = ['from', 'to', 'cc', 'bcc', 'subject', 'text'].map(field => {
        console.log(field, state[field].error);
        if (field === 'cc' || field === 'bcc') {
            if (state[field].error) {
                return field.toUpperCase()
            } else {
                return undefined;
            }
        }
        if (!state[field].touched || state[field].error) {
            return field.toUpperCase()
        }
        return undefined;
    }).filter((val => val))
    const pass = invalidArray.length === 0;
    const content = invalidArray.join(', ').concat(' invalid, check the Manul please');;
    return {
        pass,
        content
    };
}

export const genInitState = () => {
    return {
        subject: {
            value: '',
            error: false,
            touched: false
        },
        from: {
            value: '',
            error: false,
            touched: false
        },
        to: {
            value: '',
            error: false,
            touched: false
        },
        cc: {
            value: '',
            error: false,
            touched: false
        },
        bcc: {
            value: '',
            error: false,
            touched: false
        },
        text: {
            value: '',
            error: false,
            touched: false
        },
        loading: false,
        success: false,
        alertOpen: false,
        helpOpen: false,
        alertContent: '',
        notificationOpen: false,
        notificationContent: 'Success',
    }
}