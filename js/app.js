window.addEventListener("load", () => {

    const data = [
        {
            projectArea: "SISTEMES, SEGURETAT I ATENCIÓ AL CLIENT",
            projectName: "CONNECTIVITAT, SISTEMES I EQUIPS",
            projectDescription: "Accions en relació al manteniment de sistemes, xarxes i equips de la Fundació Sant Tomàs.",
            projectInitialData: "-",
            projectFinalData: "-",
            projectNumTaskTotals: 12,
            projectNumTaskPending: 2,
            projectNumTaskDelayed: 0,
            projectNumTaskClosed: 10,
            projectODS : ["09"],
            projecteProjects: []
        },
        {
            projectArea: "SISTEMES, SEGURETAT I ATENCIÓ AL CLIENT",
            projectName: "ATENCIÓ AL CLIENT",
            projectDescription: "Accions en relació a la resolució de incidències TIC de la Fundació Sant Tomàs.",
            projectInitialData: "-",
            projectFinalData: "-",
            projectNumTaskTotals: 15,
            projectNumTaskPending: 5,
            projectNumTaskDelayed: 1,
            projectNumTaskClosed: 9,
            projectODS : ["09"],
            projecteProjects: []
        },
        {
            projectArea: "SISTEMES, SEGURETAT I ATENCIÓ AL CLIENT",
            projectName: "CIBERSEGURETAT",
            projectDescription: "Accions en relació al manteniment la seguretat de les xarxes, equips i aplicacions de la Fundació Sant Tomàs.",
            projectInitialData: "-",
            projectFinalData: "-",
            projectNumTaskTotals: 8,
            projectNumTaskPending: 6,
            projectNumTaskDelayed: 6,
            projectNumTaskClosed: 2,
            projectODS : ["09"],
            projecteProjects: []
        },
        {
            projectArea: "PROJECTES I APLICACIONS",
            projectName: "PROJECTES I SUBVENCIONS",
            projectDescription: "Accions en relació a la recerca de finançament i per l'execució de projectes TIC a la Fundació Sant Tomàs.",
            projectInitialData: "-",
            projectFinalData: "-",
            projectNumTaskTotals: 13,
            projectNumTaskPending: 3,
            projectNumTaskDelayed: 2,
            projectNumTaskClosed: 10,
            projectODS : ["09", "17"],
            projecteProjects: []
        },
        {
            projectArea: "PROJECTES I APLICACIONS",
            projectName: "APLICACIONS",
            projectDescription: "Accions en relació al disseny, desenvolupament i implantació de projectes TIC a la Fundació Sant Tomàs.",
            projectInitialData: "-",
            projectFinalData: "-",
            projectNumTaskTotals: 0,
            projectNumTaskPending: 1,
            projectNumTaskDelayed: 1,
            projectNumTaskClosed: 0,
            projectODS : ["03", "09", "10"],
            projecteProjects: [
                {
                    name: "Implantació Office 365 a Fundació Sant Tomàs",
                    tasks: "2/3",
                    initialData: "01/12/2023",
                    finalData: "31/12/2024",
                    progres: "0%",
                    state: "open",
                },
                {
                    name: "Implantació DINANTIA com a eina comunicació famílies i usuaris",
                    tasks: "0/15",
                    initialData: "01/10/2023",
                    finalData: "31/12/2024",
                    progres: "0%",
                    state: "open",
                },
                {
                    name: "Afegir Pla Estratègic al programa de Qualitat Fundació Sant Tomàs",
                    tasks: "1/5",
                    initialData: "01/09/2023",
                    finalData: "31/01/2024",
                    progres: "30%",
                    state: "open",
                },
                {
                    name: "TacProd - ERP de gestió de brigades de serveis",
                    tasks: "3/30",
                    initialData: "01/01/2023",
                    finalData: "31/12/2024",
                    progres: "60%",
                    state: "open",
                },
                {
                    name: "Software EMS - seguiment d'usuaris",
                    tasks: "9/16",
                    initialData: "01/08/2023",
                    finalData: "31/12/2024",
                    progres: "60%",
                    state: "open",
                },
                {
                    name: "Integració software de Cafeteria amb Sage",
                    tasks: "1/9",
                    initialData: "01/07/2023",
                    finalData: "31/01/2024",
                    progres: "60%",
                    state: "open",
                },
                {
                    name: "Desenvolupar software de gestió de legionel·losi Fundació Sant Tomàs",
                    tasks: "1/1",
                    initialData: "04/12/2023",
                    finalData: "31/01/2024",
                    progres: "0%",
                    state: "open",
                },
            ]
        },
        {
            projectArea: "RGPD I LEGALITAT",
            projectName: "RGPD I LEGALITAT",
            projectDescription: "Accions en relació a assegurar el compliment del Reglament General de Protecció de dades assegurant la legalitat en relació a les TIC.",
            projectInitialData: "-",
            projectFinalData: "-",
            projectNumTaskTotals: 3,
            projectNumTaskPending: 2,
            projectNumTaskDelayed: 1,
            projectNumTaskClosed: 1,
            projectODS : ["09"],
            projecteProjects: []
        },
        {
            projectArea: "DADES I DATA GOVERNANCES",
            projectName: "DADES I DATA GOVERNANCES",
            projectDescription: "Accions en relació a la gestió de les dades dins de la Fundació Sant Tomàs.",
            projectInitialData: "-",
            projectFinalData: "-",
            projectNumTaskTotals: 2,
            projectNumTaskPending: 0,
            projectNumTaskDelayed: 0,
            projectNumTaskClosed: 2,
            projectODS : ["03", "09"],
            projecteProjects: [
                {
                    name: "Quadres de comandament Sant Tomàs",
                    tasks: "10/15",
                    initialData: "01/09/2023",
                    finalData: "31/07/2024",
                    progres: "30%",
                    state: "open",
                },
                {
                    name: "Ratis socials de l'àrea social i educativa",
                    tasks: "1/4",
                    initialData: "01/09/2023",
                    finalData: "31/03/2024",
                    progres: "30%",
                    state: "open",
                },
            ]
        },
    ]

    // Accions pantalla inicial
    let count = 0 // Contador per anar passant les àrees TIC
    let initial = document.querySelector(".initial-windows")
    let dashboard = document.querySelector(".dashboard-project")
    document.addEventListener("click", (event)=> {
        if (event.target.classList.contains("fa-shield-halved")) {
            initial.classList.add("disable")
            dashboard.classList.remove("disable")
            count = 2
        }
        if (event.target.classList.contains("fa-circle-info")) {
            initial.classList.add("disable")
            dashboard.classList.remove("disable")
            count = 1
        }
        if (event.target.classList.contains("fa-house-signal")) {
            initial.classList.add("disable")
            dashboard.classList.remove("disable")
            count = 0
        }
        if (event.target.classList.contains("fa-hand-holding-dollar")) {
            initial.classList.add("disable")
            dashboard.classList.remove("disable")
            count = 3
        }
        if (event.target.classList.contains("fa-tablet-screen-button")) {
            initial.classList.add("disable")
            dashboard.classList.remove("disable")
            count = 4
        }
        if (event.target.classList.contains("fa-magnifying-glass-chart")) {
            initial.classList.add("disable")
            dashboard.classList.remove("disable")
            count = 6
        }
        if (event.target.classList.contains("fa-scale-balanced")) {
            initial.classList.add("disable")
            dashboard.classList.remove("disable")
            count = 5
        }
    })

    // Acció retorn pàgina principal
    document.addEventListener("click", (event) => {
        if (event.target.classList.contains("return")) {
            initial.classList.remove("disable")
            dashboard.classList.add("disable")
            count = 4
        }
    })

    // Accions dasboard tasques
    let project = document.querySelector(".dashboard-project")
    let longitud = data.length
    let porlets = ""
    let ods = ""
    setInterval(() => {
        if (data[count].projecteProjects != undefined) {
            data[count].projecteProjects.map(element => {
                porlets = porlets + `<div class="porlet">
                <span>${element.name}</span>
                <span>Nº tasques pendents</span>
                <span class="value">
                    ${element.tasks}
                    <img src="./img/progress_bar/barra${element.progres == "0%" ? "1" : element.progres == "30%" ? "2" : "3"}.png">
                </span>
                
            </div>`
            })
        }
        if (data[count].projectODS != undefined) {
            data[count].projectODS.map(element => {
                ods = ods + `<img src="./img/S-WEB-Goal-${element}.png">`
            })
        }
        project.innerHTML = `
        <div class="header">
                <h1 class="project-name">${data[count].projectName}</h1>
                <p class="project-name">${data[count].projectDescription}</p>
            </div>
            <div class="porlets">
                <div class="porlet num-task-totals">
                    <span>Nº tasques totals</span>
                    <span class="value">${data[count].projectNumTaskTotals}</span>
                </div>
                <div class="porlet num-task-pending">
                    <span>Nº tasques pendents</span>
                    <span class="value">${data[count].projectNumTaskPending}</span>
                </div>
                <div class="porlet num-task-delayed">
                    <span>Nº tasques amb retard</span>
                    <span class="value">${data[count].projectNumTaskDelayed}</span>
                </div>
                <div class="porlet num-task-closed">
                    <span>Nº tasques tancades</span>
                    <span class="value">${data[count].projectNumTaskClosed}</span>
                </div>
            </div>
            <div class="task-week">
                <p>Projectes actius inclosos en aquesta àrea</p>
                <div class="porlets">${porlets}</div>
                <p class="task"></p>
            </div>
            <div class="footer ods-images">
                ${ods}
                <p class="return">Informació sobre accions de l'àrea TIC de Sant Tomàs</p>
            </div>
        `
        if (count < longitud-1) {
            count = count + 1;
        } else {
            count = 0;
        }
        porlets = ""
        ods = ""
    },20000)  
});