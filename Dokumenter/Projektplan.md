Projektplan: Aalborg Ultimate Frisbee Klub (AUFK)
Dette dokument beskriver den overordnede strategi og de tekniske metoder, vi anvender for at sikre et effektivt samarbejde og en struktureret udviklingsproces.

1. Valg af Metodik: Kanban
Til dette projekt har vi valgt at benytte Kanban som vores primære styringsværktøj via GitHub Projects.

Der anvendes GitHub projects til opgavestyring vha. Kanban. Det blev besluttet at anvende Kanban tidligt i processen, da scrum ville kræve commitment til sprints,
hvilket var svært at forholde sig til med dette projekt i forbindelse med resten af semestrets undervisning og obligationer.
Kanban muligør at vi i stedet kan forholde os fleksible og samtidig undgå at "låse" os i roller som scrum også lægger op til.
Ligeledes blev scrumban fravalgt, da det ville være et for stort værktøj til et projekt af denne størelse.

Yderligere hjælper kanban os også med at skabe et løbende flow, samt lave en visuel flaskehals identifikation, hvis en af os sidder fast med en opgave.

2. Udviklingsmiljø og Værktøjer
For at sikre en ensartet kodebase og nem deling af dokumentation bruger vi følgende:

Til projektet er der anvendt GitHub (desktop og browser) til repository og Git funktionen i Visual Studio Code, til udarbejdelse af kode.
Dette er gjort da det var nemmest ift. opgavebeskrivelse og vi allerede har anvendt Visual Studio Code på tidligere semestre.


3. Git Workflow og Samarbejde
For at imødekomme kravet om parallelisering og minimering af konflikter i vores repository, har vi aftalt følgende workflow:

Branching Strategy: Vi arbejder aldrig direkte i main. Hver opgave (f.eks. en ny HTML-side eller en UML-model) laves i en separat branch (f.eks. feature/kontakt-side).

Pull Requests (PR): Når en opgave er færdig, oprettes en PR. Den anden gruppemedlem gennemser koden (Code Review) for at sikre, at links og styling virker, før den flettes (merges) ind i main.


