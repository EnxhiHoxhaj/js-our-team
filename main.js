// creiamo un array con i membri del team
const teamMembers = [
    {
        "nome": "Wayne",
        "surname": "Barnett",
        "role": "Founder & CEO",
        "foto": "wayne-barnett-founder-ceo.jpg"
    },
    {
        "nome": "Angela",
        "surname": "Caroll",
        "role": "Chif Editor",
        "foto": "angela-caroll-chief-editor.jpg "
    },
    {
        "nome": "Walter",
        "surname": "Gordon",
        "role": "Office Manager",
        "foto": "walter-gordon-office-manager.jpg"
    },
    {
        "nome": "Angela",
        "surname": "Lopez",
        "role": "Social Media Manager",
        "foto": "angela-lopez-social-media-manager.jpg"
    },
    {
        "nome": "Scott",
        "surname": "Estrada",
        "role": "Developer",
        "foto": "scott-estrada-developer.jpg "
    },
    {
        "nome": "Barbra",
        "surname": "Ramos",
        "role": "Graphic designer",
        "foto": "barbara-ramos-graphic-designer.jpg "
    },
];

//console.log(teamMembers)
// tiriamo fuori il contenuto 
for ( let kay in teamMembers) {
    //console.log(teamMembers[kay]);
}

// cilo sui membri del team

 for (let i = 0; i < teamMembers.length; i++) {
    let singoloMembro = teamMembers [i];
    //console.log(singoloMembro);
    // stampo il console le info di ogni singolo membro del team
    let nomeMem = singoloMembro.nome;
    let cognomeMem = singoloMembro.surname;
    let mansioneMem = singoloMembro.role;
    let fotoMem = singoloMembro.foto;
    console.log(nomeMem, cognomeMem, ":" , mansioneMem);
    console.log(fotoMem); 
 }

// stampo le info nel DOM come stringa