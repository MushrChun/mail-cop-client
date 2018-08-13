import axios from 'axios';

const instance = axios.create({
    baseURL: 'http://localhost:8080/api',
    responseType: 'json'
});

export const messageTransform = ({ subject, to, cc, bcc, text, from }) => {

    const content =  {
        subject: subject.value,
        from: from.value,
        to: to.value.split(','),
        cc: cc && cc.value.split(','),
        bcc: cc && bcc.value.split(','),
        text: text.value
    }
    return {
        message: content
    }
}

export const sendEmail = (payload) => {
    return instance.post('/mails', payload);
}
