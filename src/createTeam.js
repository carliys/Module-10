const createTeam = (team) => {
    const addEngineer = (engineer) => {
        return `
            <div class="card" style="width: 18rem;">
               <div class="card-header"> ${engineer.getName()} <br/>
               <i class="Position"></i>Manager</div>
               <ul class="list-group">
                <li class="list-group-item heading">ID: 567483</li>
                <li class="list-group-item heading">Email: <span id="email"><a href="mailto:leo231@gmail.com">leo231@gmail.com</a></span></li>
                <li class="list-group-item heading">Office Number: 13224</li>
                </ul>
            </div>

        `;
    };

    const addIntern = (intern) => {
        return `
            <div class="card" style="width: 18rem;">
               <div class="card-header"> ${intern.getName()} <br/>
               <i class="Position"></i>Manager</div>
               <ul class="list-group">
                <li class="list-group-item heading">ID: 567483</li>
                <li class="list-group-item heading">Email: <span id="email"><a href="mailto:leo231@gmail.com">leo231@gmail.com</a></span></li>
                <li class="list-group-item heading">Office Number: 13224</li>
                </ul>
            </div>

        `;
    };

    const html = [];

    html.push(
        team
        .filter((teamMember) => teamMember.getRole() === "Engineer")
        .map((engineer) => addEngineer(engineer))
        .join("") 
    );
    html.push(
        team
        .filter((teamMember) => teamMember.getRole() === "Intern")
        .map((intern) => addIntern(intern))
        .join("") 
    );
    return html.join("");
};

module.exports = (team) => {
    return `
    <!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link
    href="https://cdn.jsdelivr.net/npm/bootstrap@5.2.3/dist/css/bootstrap.min.css" rel="stylesheet"
    integrity="sha384-rbsA2VBKQhggwzxH7pPCaAqO46MgnOM80zW1RWuH61DGLwZJEdK2Kadq2F9CUG65" crossorigin="anonymous"/>
    <link rel="stylesheet" href="../dist/style.css" />
    <title>dyfghghjbhhbhb</title>
</head>
<body>
    <header>
        <h1> My Team </h1>
    </header>
    <main>
    ${createTeam(team)}
    </main>
</body>
</html>`
};