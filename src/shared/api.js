import axios from 'axios';

const instance = axios.create({
    baseURL: 'http://localhost:8080/api',
    responseType: 'json'
});

export const messageTransform = ({ subject, to, cc, bcc, text, from }) => {

    const content =  {
        subject: subject.value.trim(),
        from: from.value.trim(),
        to: to.value.split(',').map( val => val.trim()),
        cc: cc && cc.value.split(',').map( val => val.trim()),
        bcc: cc && bcc.value.split(',').map( val => val.trim()),
        text: text.value.trim()
    }
    return {
        message: content
    }
}

export const sendEmail = (payload) => {
    return instance.post('/mails', payload);
}
