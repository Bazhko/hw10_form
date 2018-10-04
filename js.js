function saveDataForm() {

    var userFirstName = document.getElementsByClassName('first-name')[0].value;
    var userLastName = document.getElementsByClassName('last-name')[0].value;
    var userPatronymic = document.getElementsByClassName('patronymic')[0].value;
    var userAge = document.getElementsByClassName('age')[0].value;
    var userGender = document.getElementsByClassName('gender')[0].value;

    if (userFirstName === '') {
        alert('Введите имя');
    } else if (userLastName === '') {
        alert('Введите фамилию');
    } else if (userPatronymic === '') {
        alert('Введите отчество');
    } else if (userAge === '') {
        alert('Введите возраст');
    } else if (userGender === '') {
        alert('Введите пол');
    } else {
        localStorage.setItem('userName', userFirstName);
        localStorage.setItem('userLastName', userLastName);
        localStorage.setItem('userPatronymic', userPatronymic);
        localStorage.setItem('userAge', userAge);
        localStorage.setItem('userGender', userGender);
    }};


function showProfile() {
    var age = Number(localStorage.getItem('userAge'));
    var gender = localStorage.getItem('userGender');

    document.getElementsByClassName('profile_name')[0].innerHTML = 'ФИО:' + ' ' + localStorage.getItem('userName') + ' ' + localStorage.getItem('userLastName') + ' ' + localStorage.getItem('userPatronymic');
    document.getElementsByClassName('profile_age')[0].innerHTML = 'Возраст лет:' + ' ' + age;
    document.getElementsByClassName('profile_days')[0].innerHTML = 'Возраст дней:' + ' ' + age*365;
    document.getElementsByClassName('profile_gender')[0].innerHTML = 'Пол:' + ' ' + gender;
    if ((age >= 61)&&(gender == 'мужской')) {
        document.getElementsByClassName('profile_pension')[0].innerHTML = 'Пенсионный возраст:' + ' ' + 'Да';
    } else if ((age >= 56)&&(gender == 'женский')) {
        document.getElementsByClassName('profile_pension')[0].innerHTML = 'Пенсионный возраст:' + ' ' + 'Да';
    } else {
            document.getElementsByClassName('profile_pension')[0].innerHTML = 'Пенсионный возраст:' + ' ' + 'Нет';
    }
};

