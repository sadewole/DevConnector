export const validateEmail = emailVal => {
    const reg = /[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?/;
    return reg.test(emailVal);
};

export const validatePassword = passwordVal => {
    const pas = /^(?=.*?[\w+])(?=(.*[\W+]?))(?!.*\s).{5,}$/;
    return pas.test(passwordVal);
};

export const validateInputName = inputName => {
    if (inputName === '' || /^\s/.test(inputName)) {
        return true
    }
}

export const validateLink = linkVal => {
    const reg = /(http(s)?:\/\/.)(www\.)?[-a-zA-Z0-9@:%._\+~#=]{2,256}(\.[a-z]{2,6}|:[0-9]{3,4})\b([-a-zA-Z0-9@:%_\+.~#?&\/\/=]*)/
    return reg.test(linkVal)

}