# Alumni front:

### récuperation du projet sur github:

#### Cloner le projet:

`https://github.com/TimotheSymbolIt/alumni_front.git`

#### Installation des dépendences:

`npm intall`

#### Lancement du serveur front:

`npm run dev`

---

### Structure du projet:

#### Crée avec vite.js incluant :

1. React.
2. React-dom.
3. React-router-dom.
4. Eslint.
5. Prettier.
6. Tailwindcss( trie des class automatique).
7. Axios pour gérer les calls Api.
8. Lucide-react pour les icons.
9. Jodit-react comme editeur de textarea.
10. React-datepicker pour gérer les dates.
11. React-toastify pour afficher des réponses.
12. React-vertical-timeline-component pour la partie acceuil #formation.
13. Swipper pour slider/caroussel.
14. Framer-motion pour les animations et l'infinite scrolling.

---

### Users stories:

#### Visiteurs :

- Accès à la page d'accueil,à propos et formations.

#### Utilisateur connecté ( alumni ) :

- Accès à toutes les pages hormis le dashboard ou il aura accès qu'à la modification de son profil, et pouvoir obtenir le rôle de mentor ( aucun accès accordé en plus pour le moment ).

#### Admin/moderateur connecté ( admin/moderator ) :

- Accès à toutes les pages.

- Il peux dans le dashboard accepter ou non de nouveaux utilisateurs et definir un rôle moderateur si besoin.
- Supprimer un utilisateur sauf un admin.
- Poster/Modifier/accepter des évenements.
- (A faire ! : Accepter de nouveaux employeurs ou non, pouvoir valider de nouvelles offres d'emplois et en supprimé).
- Modifier son profil utilisateurs.

#### Recruteur connecté ( recrutor ) :

- Accès à toute les pages.
- dans le dashboard il pourra éditer son profil et gérer ses offres d'emploi.

---

### Les routes :

#### Utilisateurs :

- Enregistrer un nouveau utilisateur : `authUser/registerUser`
- Se connecter : `authUser/loginUser`
- Récuperer tout les utilisateur : `users`
- Récuperer l'utilisateur courrant : `users/currentUser`
- Utilisateur inactifs : `users/activation`
- Editer un utilisateur : `users/edit/:id`
- Devenir mentor pour un alumni : `users/mentoring`

#### Evenements :

- Récuperer tout les événements : `events`
- Récuperer un événement : `events/:id`
- Créer un événement : `events/post`
- Valider ou non un événement : `events/activation`
- Editer un événement : `events/edit/:id`
