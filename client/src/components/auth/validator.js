export const validateEmail = emailVal => {
    const reg = /[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?/;
    return reg.test(emailVal);
};

export const validatePassword = passwordVal => {
    const pas = /^(?=.*?[\w+])(?=(.*[\W+]?))(?!.*\s).{5,}$/;
    return pas.test(passwordVal);
};