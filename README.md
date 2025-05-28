# 📚 Documentation Apps - Site de Documentation Interactif

Une application web moderne de documentation pour le suivi des évolutions et nouvelles fonctionnalités de vos applications mobiles et web.

![Version](https://img.shields.io/badge/version-1.0.0-blue.svg)
![React](https://img.shields.io/badge/React-19.1.0-61dafb.svg)
![TypeScript](https://img.shields.io/badge/TypeScript-5.8.3-blue.svg)
![Tailwind CSS](https://img.shields.io/badge/Tailwind%20CSS-4.1.7-38bdf8.svg)
![Vite](https://img.shields.io/badge/Vite-6.3.5-646cff.svg)

## 🎯 Vue d'ensemble

Cette application de documentation offre une interface moderne et intuitive pour suivre l'évolution de vos applications. Elle permet de gérer facilement les changelogs, les nouvelles fonctionnalités, les corrections de bugs et les informations techniques de vos projets.

### ✨ Fonctionnalités principales

- **📱 Gestion d'applications** : Suivi de 4+ applications (Entrepôt, Auto Pièces JSP, Livraison, Dashboard)
- **📝 Changelog dynamique** : Historique complet des versions avec types (feature, bugfix, improvement)
- **⚙️ Panneau d'administration** : Interface d'administration complète pour la gestion du contenu
- **🎨 Design moderne** : Interface responsive avec mode sombre/clair
- **🔄 Temps réel** : Mise à jour instantanée du contenu
- **📊 Statistiques** : Métriques et données importantes sur vos applications
- **🎯 Navigation intuitive** : Sidebar organisée par catégories

## 🏗️ Architecture

```
docc/
├── public/                 # Fichiers statiques
├── src/
│   ├── components/        # Composants React
│   │   ├── admin/        # Panneau d'administration
│   │   ├── sections/     # Sections de contenu
│   │   └── ui/           # Composants UI réutilisables
│   ├── data/             # Données JSON
│   │   ├── apps.json     # Informations des applications
│   │   ├── changelog.json # Historique des versions
│   │   └── config.json   # Configuration du site
│   ├── hooks/            # Hooks React personnalisés
│   └── assets/           # Ressources (images, etc.)
├── package.json
└── README.md
```

## 🚀 Installation et Démarrage

### Prérequis

- **Node.js** 18+
- **npm** ou **yarn**

### Installation

```bash
# Cloner le projet
git clone [url-du-repo]
cd docc

# Installer les dépendances
npm install

# Démarrer en mode développement
npm run dev
```

### Scripts disponibles

```bash
# Développement avec hot reload
npm run dev

# Build de production
npm run build

# Aperçu du build
npm run preview

# Linting du code
npm run lint
```

## 🛠️ Stack Technique

### Frontend

- **React 19.1.0** - Framework JavaScript moderne avec Concurrent Features
- **TypeScript 5.8.3** - Langage typé pour une meilleure robustesse
- **Tailwind CSS 4.1.7** - Framework CSS utility-first
- **Vite 6.3.5** - Build tool ultra-rapide avec HMR

### Outils de développement

- **ESLint** - Linting et qualité du code
- **TypeScript ESLint** - Règles TypeScript spécialisées
- **React Hooks ESLint** - Validation des hooks React

## 📱 Applications Documentées

### 1. **Entrepôt** (v2.1.0)

- **Technologie** : Flutter + Firebase
- **Statut** : Production
- **Fonctionnalités** : 12 fonctionnalités principales
- **Intégration** : API automatique avec Livraison

### 2. **Auto Pièces JSP** (v1.8.2)

- **Technologie** : Flutter + Strapi
- **Statut** : Production
- **Code** : 110KB+ (67KB écran principal, 28KB chat, 15KB demandes)
- **Fonctionnalités** : Marketplace complète avec messagerie

### 3. **Livraison** (v3.0.1)

- **Technologie** : Flutter + Firebase
- **Statut** : Production
- **Fonctionnalités** : Gestion complète des livraisons

### 4. **Dashboard Livraison** (v2.0.2)

- **Technologie** : React + TypeScript
- **Statut** : Production
- **Fonctionnalités** : Analytics et graphiques temps réel

## ⚙️ Configuration

### Structure des données

#### `src/data/apps.json`

```json
{
  "apps": [
    {
      "id": "entrepot",
      "name": "Entrepôt",
      "description": "...",
      "status": "Production",
      "version": "v2.1.0",
      "color": "blue",
      "icon": "warehouse",
      "features": [...],
      "techStack": [...]
    }
  ],
  "stats": [...]
}
```

#### `src/data/changelog.json`

```json
{
  "releases": [
    {
      "id": "entrepot-v2.1.0",
      "version": "v2.1.0",
      "date": "2025-01-28",
      "app": "Entrepôt",
      "type": "feature",
      "title": "...",
      "description": "...",
      "changes": [...],
      "priority": "high"
    }
  ]
}
```

#### `src/data/config.json`

```json
{
  "site": {
    "title": "Documentation Apps",
    "subtitle": "Suivi des évolutions",
    "version": "1.0.0"
  },
  "content": {
    "heroTitle": "Documentation des Applications",
    "heroSubtitle": "..."
  }
}
```

## 🎨 Système de Design

Le projet utilise un système de design moderne basé sur :

- **Couleurs** : Palette cohérente avec mode sombre/clair
- **Typographie** : Geist Sans pour le texte, Geist Mono pour le code
- **Espacement** : Système basé sur rem (4px, 8px, 16px, etc.)
- **Composants** : Boutons, cartes, champs de saisie standardisés
- **Animations** : Transitions fluides et micro-interactions

Consultez `DESIGN_SYSTEM.md` pour la documentation complète du design system.

## 🔧 Panneau d'Administration

Accédez au panneau d'administration via l'icône d'engrenage (⚙️) dans le header.

### Fonctionnalités disponibles :

#### 📱 Gestion des Applications

- Mise à jour des versions
- Modification des statistiques
- Gestion des informations

#### 📝 Gestion du Changelog

- Ajout de nouvelles releases
- Types : Feature, Bugfix, Improvement
- Priorités : Basse, Moyenne, Haute
- Liste des changements détaillés

#### ⚙️ Configuration du Site

- Modification des textes principaux
- Personnalisation du contenu
- Paramètres d'affichage

## 📊 Métriques et Statistiques

Le site affiche automatiquement :

- **Nombre total d'applications** en production
- **Versions publiées** avec historique complet
- **Nouvelles fonctionnalités** développées
- **Corrections de bugs** apportées
- **Uptime moyen** des applications (99.9%)

## 🎯 Utilisation

### Navigation

1. **Vue d'ensemble** : Introduction et statistiques globales
2. **Applications** : Détails de chaque application
3. **Intégrations** : APIs et services connectés
4. **Changelog** : Historique des mises à jour

### Gestion du contenu

1. Cliquez sur l'icône ⚙️ pour ouvrir l'administration
2. Utilisez les onglets pour naviguer entre les sections
3. Modifiez le contenu directement dans l'interface
4. Les changements sont appliqués instantanément

## 🔄 Mise à jour du contenu

### Ajouter une nouvelle application

1. Modifiez `src/data/apps.json`
2. Ajoutez les informations de l'application
3. Créez une section dédiée dans `src/components/sections/`
4. Ajoutez la route dans `MainContent.tsx`

### Ajouter une release

1. Utilisez le panneau d'administration
2. Ou modifiez directement `src/data/changelog.json`
3. Respectez le format des données existantes

## 🚀 Déploiement

### Build de production

```bash
npm run build
```

### Déploiement sur Vercel/Netlify

1. Connectez votre repository
2. Configurez la commande de build : `npm run build`
3. Dossier de sortie : `dist`

### Variables d'environnement

Aucune variable d'environnement requise pour le fonctionnement de base.

## 🤝 Contribution

### Structure du code

- **Composants** : Un composant par fichier
- **Hooks** : Logique métier dans des hooks personnalisés
- **Types** : TypeScript strict activé
- **Style** : Tailwind CSS avec classes utilitaires

### Conventions

- **Nommage** : PascalCase pour les composants, camelCase pour les fonctions
- **Fichiers** : Noms descriptifs et organisation par fonctionnalité
- **Commits** : Messages clairs et descriptifs

## 📝 Documentation Technique

### Hooks personnalisés

#### `useAppData`

Gestion des données des applications et statistiques.

#### `useChangelog`

Gestion de l'historique des versions et releases.

#### `useConfig`

Configuration du site et préférences utilisateur.

### Composants principaux

#### `AdminPanel`

Interface d'administration complète avec onglets.

#### `MainContent`

Routeur principal pour l'affichage des sections.

#### `Sidebar`

Navigation latérale avec organisation par catégories.

## 🐛 Résolution de problèmes

### Problèmes courants

**Le site ne se charge pas**

- Vérifiez que Node.js 18+ est installé
- Exécutez `npm install` pour installer les dépendances

**Les données ne s'affichent pas**

- Vérifiez la syntaxe JSON dans les fichiers de données
- Consultez la console du navigateur pour les erreurs

**Le build échoue**

- Vérifiez les erreurs TypeScript avec `npm run lint`
- Assurez-vous que tous les imports sont corrects

## 📞 Support

Pour toute question ou problème :

- **Email** : contact@votreentreprise.com
- **Téléphone** : +33 1 23 45 67 89
- **Documentation** : Consultez `README_DYNAMIC_CONTENT.md` pour la gestion du contenu

## 📄 Licence

Ce projet est sous licence privée. Tous droits réservés.

---

**Version** : 1.0.0  
**Dernière mise à jour** : 28 janvier 2025  
**Développé avec** ❤️ par votre équipe de développement
