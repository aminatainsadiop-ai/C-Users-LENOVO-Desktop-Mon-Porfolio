# Portfolio — Aminata Diop

Portfolio personnel d'**Aminata Diop**, étudiante en Licence 3 Informatique, formatrice en
informatique et passionnée par le développement web, le design graphique et la communication
digitale.

Le site est construit avec **React 19**, **Vite** et **Tailwind CSS 4**, avec des icônes
**Lucide React**. Il est entièrement responsive et prêt à être déployé sur Vercel.

## Fonctionnalités

- Navigation fixe avec menu mobile et mise en évidence de la section active.
- Section d'accueil, à propos, compétences, projets, parcours, domaines d'intérêt et contact.
- Cartes de projets avec statut (terminé, en cours, projet académique, à personnaliser).
- Formulaire de contact avec validation des champs et messages clairs.
- Animations légères qui respectent la préférence « réduire les animations ».
- Accessibilité : structure sémantique, focus visibles, attributs ARIA et navigation au clavier.

## Prérequis

- [Node.js](https://nodejs.org/) 20 ou plus récent.
- npm (installé avec Node.js).

## Installation

```bash
npm install
```

## Lancer le site en local

```bash
npm run dev
```

Ouvrez ensuite l'adresse affichée dans le terminal (par défaut `http://localhost:5173`).

## Compiler pour la production

```bash
npm run build
```

Les fichiers générés se trouvent dans le dossier `dist/`. Pour prévisualiser la version compilée :

```bash
npm run preview
```

## Qualité du code

```bash
npm run lint
```

## Personnaliser le portfolio

Tout le contenu personnel est centralisé dans le dossier `src/data/` :

| Fichier | Contenu |
| --- | --- |
| `src/data/profile.js` | Nom, rôle, accroche, photo, CV, e-mail, réseaux, texte « À propos », formulaire. |
| `src/data/skills.js` | Catégories et liste des compétences. |
| `src/data/projects.js` | Projets, statuts, technologies et liens. |
| `src/data/journey.js` | Étapes du parcours (formation, expériences). |
| `src/data/services.js` | Domaines d'intérêt et de contribution. |

### Éléments à renseigner

1. **Photo de profil** : le fichier est déjà présent dans `public/porfolio.jpeg`. Remplacez-le par
   une photo professionnelle en conservant ce nom, ou modifiez `photo` dans `src/data/profile.js`.
2. **CV** : déposez votre CV dans `public/` (par exemple `cv-aminata-diop.pdf`) puis renseignez
   `cvUrl: '/cv-aminata-diop.pdf'`. Le bouton « CV » apparaîtra automatiquement dans la navigation.
3. **Adresse e-mail** : `email` dans `src/data/profile.js`.
4. **LinkedIn et GitHub** : `linkedin` et `github`. Le bouton GitHub et les liens n'apparaissent que
   si une URL est renseignée.
5. **Photo et liens des projets** : champs `image`, `demo` et `github` dans `src/data/projects.js`.
6. **Formulaire de contact** : pour activer l'envoi automatique, créez un formulaire sur
   [Formspree](https://formspree.io/) et renseignez son URL dans `formspreeEndpoint`. Sans cette
   configuration, le formulaire ouvre la messagerie du visiteur avec le message pré-rempli.

## Publier sur GitHub

```bash
git init
git add .
git commit -m "Portfolio Aminata Diop"
git branch -M main
git remote add origin https://github.com/VOTRE-IDENTIFIANT/portfolio-aminata-diop.git
git push -u origin main
```

## Déployer sur Vercel

1. Créez un compte sur [vercel.com](https://vercel.com/) et connectez votre compte GitHub.
2. Cliquez sur **Add New → Project** et importez le dépôt `portfolio-aminata-diop`.
3. Vercel détecte automatiquement Vite : commande de build `npm run build`, dossier de sortie
   `dist`. Ne modifiez rien et cliquez sur **Deploy**.

## Structure du projet

```
src/
  components/     Navbar, Footer, SectionTitle, ProjectCard, SkillCard, Reveal
  sections/       Hero, About, Skills, Projects, Journey, Services, Contact
  data/           profile, skills, projects, journey, services
  App.jsx
  main.jsx
  index.css
```

## Licence

© Aminata Diop. Tous droits réservés.
