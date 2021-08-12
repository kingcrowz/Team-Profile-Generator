//section generates a manager card with the information sent into it.
const generateMangerCard = function (manager) {
    return `
    <div class='col-4 mt-4'>
        <div class='card h-100'>
            <div class='card-header text-white bg-danger'>
                <h3>${manager.name}</h3>
                <h4>Manager</h4><i class = 'material-icons'>content_paste</i>
            </div>
            <div class='card-body text-dark'>
            <p class='id'>Employee ID:  ${manager.id}</a></p>
            <p class='email'>Employee Email:  <a href="mailto:${manager.email}">${manager.email}</a></p>
                <p class='officeNumber'>Office number:  ${manager.officeNumber}</p>
            </div>
        </div>
    </div>
    `
};

//this section generates an engineer with the information sent to it
const generateEngineerCard = function (engineer) {
    return `
    <div class='col-4 mt-4'>
        <div class='card h-100'>
            <div class='card-header text-white bg-success'>
                <h3>${engineer.name}</h3>
                <h4>Engineer</h4><i class = 'material-icons'>laptop_mac</i>
            </div>    
            <div class='card-body text-dark'>
                <p class='id'>Employee ID:  ${engineer.id}</p>
                <p class='email'>Employee Email:   <a href="mailto:${engineer.email}">${engineer.email}</a></p>
                <p class='github'>Github:  <a href="https://github.com/${engineer.github}">${engineer.github}</a></p>
            </div>
        </div>
    </div>
    `
};

//this section generates an intern with the information sent to it
const generateInternCard = function (intern) {
    return `
    <div class='col-4 mt-4'>
        <div class='card h-100'>
            <div class='card-header text-white bg-warning'>
                <h3>${intern.name}</h3>
                <h4>Intern</h4><i class='material-icons'>assignment_ind</i>
            </div>
            <div class='card-body text-dark'>
                <p class='id'>Employee ID:  ${intern.id}</p>
                <p class='email'>Employee Email:  <a href="mailto:${intern.email}">${intern.email}</a></p>
                <p class='school'>School/University:  ${intern.school}</p>
            </div>
        </div>
    </div>
    `
};

//this section is the main part of this file that compiles things together using methods within this file
generateHTML = (data) => {
    holderArray = [];
    for (let i = 0; i < data.length; i++) {
        const Employee = data[i];
        const type = Employee.getRole();
        if (type === 'Manager') {
            const ManagerCard = generateMangerCard(Employee);
            holderArray.push(ManagerCard);
        }
        if (type == 'Engineer') {
            const EngineerCard = generateEngineerCard(Employee);
            holderArray.push(EngineerCard);
        }
        if (type === 'Intern') {
            const InternCard = generateInternCard(Employee);
            holderArray.push(InternCard);
        }
    }
    const transfer = holderArray.join('')
    const generateTeam = generateTeamPage(transfer);
    return generateTeam;
}

//this is the HTML skeleton where everything will be socketed into
const generateTeamPage = function (employeecard) {
    return `
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Generated Team's Profile</title>
    <link href="https://fonts.googleapis.com/css?family=Public+Sans:300i,300,500&display=swap" rel="stylesheet">
    <link href="https://fonts.googleapis.com/icon?family=Material+Icons" rel="stylesheet">
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.11.2/css/all.min.css">
    <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.5.0/css/bootstrap.min.css">
</head>
<body>
    <header>
        <nav class='navbar' id='navbar'>
            <span class='navbar-brand mb-0 h1 w-100 text-center' id='navbar-text'>Generated Team's Profile</span>
        </nav>
    </header>
    <main>
        <div class='container'>
            <div class='row justify-content-center' id='team-cards'>
                ${employeecard}
            </div>
        </div>
    </main>
</body>
<script src="https://code.jquery.com/jquery-3.5.1.slim.min.js" integrity="sha384-DfXdz2htPH0lsSSs5nCTpuj/zy4C+OGpamoFVy38MVBnE+IbbVYUew+OrCXaRkfj" crossorigin="anonymous"></script>
<script src="https://cdn.jsdelivr.net/npm/popper.js@1.16.0/dist/umd/popper.min.js" integrity="sha384-Q6E9RHvbIyZFJoft+2mJbHaEWldlvI9IOYy5n3zV9zzTtmI3UksdQRVvoxMfooAo" crossorigin="anonymous"></script>
<script src="https://stackpath.bootstrapcdn.com/bootstrap/4.5.0/js/bootstrap.min.js" integrity="sha384-OgVRvuATP1z7JjHLkuOU7Xw704+h835Lr+6QL9UvYjZE3Ipu6Tp75j7Bh/kR0JKI" crossorigin="anonymous"></script>
</html>`
};
module.exports = generateHTML;
