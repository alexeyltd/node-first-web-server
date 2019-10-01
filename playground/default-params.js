const greeter = (name = 'user') => {
    console.log('Hello' + name)
};

const transaction = (type, {label, stock = 0} = {}) => {
    console.log(type, label, stock)
};

greeter();