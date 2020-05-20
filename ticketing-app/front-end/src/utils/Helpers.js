export const validateInputs = (userData, setError) => {
    const { username, password, role } = userData;
    let errorMsg = {
        usernameError: '',
        passwordError: '',
        roleError: ''
    };
    let formValid = true;

    if (!username) {
        formValid = false;
        errorMsg.usernameError = 'Please enter a username';
    }

    if (typeof username !== undefined) {
        if (username.length <= 3 || username.length > 8) {
            formValid = false;
            errorMsg.usernameError = 'Username must be between 4 and 8 characters.';
        }
    }

    if (!password) {
        formValid = false;
        errorMsg.passwordError = 'Please enter a password';
    }

    if (typeof password !== undefined) {
        // /^.*(?=.{6,})(?=.*\d)(?=.*[a-z])(?=.*[a-a])(?=.*[@#$%&]).*$/
        if (!password.match(/^.*(?=.{6,})(?=.*\d)(?=.*[a-z])(?=.*[a-z]).*$/)) {
            formValid = false;
            errorMsg.passwordError = 'Password requires at least 6 characters';
        }
    }

    if (role === '') {
        formValid = false;
        errorMsg.roleError = 'Please select a role'
    }

    setError(errorMsg);

    return formValid;
};

export const departmentList = () => {
    const result = [
        { id: 1, title: 'IT', key: 'department' },
        { id: 2, title: 'HR', key: 'department' },
        { id: 3, title: 'Finance', key: 'department' },
        { id: 4, title: 'Sales', key: 'department' },
        { id: 5, title: 'Marketing', key: 'department' },
    ];
    return result;
};

export const priorityList = () => {
    const result = [
        { id: 1, title: 'High', key: 'priority' },
        { id: 2, title: 'Medium', key: 'priority' },
        { id: 3, title: 'Low', key: 'priority' },
    ];
    return result;
};
