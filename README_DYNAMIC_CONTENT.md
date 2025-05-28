# Guide de Gestion du Contenu Dynamique

Ce site de documentation utilise un système de gestion de contenu dynamique qui vous permet de mettre à jour facilement toutes les informations sans toucher au code.

## 🎯 Accès au Panneau d'Administration

1. Cliquez sur l'icône d'engrenage (⚙️) dans le header du site
2. Le panneau d'administration s'ouvre sur la droite
3. Utilisez les onglets pour naviguer entre les différentes sections

## 📱 Gestion des Applications

### Mettre à jour une version d'application

1. Allez dans l'onglet "Applications"
2. Trouvez l'application à mettre à jour
3. Tapez la nouvelle version dans le champ "Nouvelle version"
4. Appuyez sur Entrée pour valider

### Modifier les statistiques

1. Dans l'onglet "Applications", section "Statistiques"
2. Cliquez sur la valeur que vous voulez modifier
3. Tapez la nouvelle valeur
4. Cliquez ailleurs pour sauvegarder

## 📝 Gestion du Changelog

### Ajouter une nouvelle release

1. Allez dans l'onglet "Changelog"
2. Remplissez le formulaire :
   - **Application** : Sélectionnez l'app concernée
   - **Version** : Format recommandé v1.0.0
   - **Type** : Feature, Bugfix ou Amélioration
   - **Priorité** : Basse, Moyenne ou Haute
   - **Titre** : Titre descriptif de la release
   - **Description** : Description détaillée
   - **Changements** : Liste des modifications (un par ligne)
3. Cliquez sur "Ajouter la Release"

### Types de release

- **Feature** : Nouvelles fonctionnalités
- **Bugfix** : Corrections de bugs
- **Improvement** : Améliorations existantes

## ⚙️ Configuration du Site

### Modifier les textes principaux

1. Allez dans l'onglet "Configuration"
2. Modifiez les champs :
   - **Titre du Site** : Titre affiché dans le header
   - **Sous-titre** : Sous-titre du header
   - **Titre Hero** : Grand titre de la page d'accueil
   - **Sous-titre Hero** : Description de la page d'accueil

## 📁 Structure des Fichiers de Données

### `/src/data/apps.json`

Contient toutes les informations sur les applications :

```json
{
  "apps": [
    {
      "id": "entrepot",
      "name": "Entrepôt",
      "description": "Description de l'app",
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

### `/src/data/changelog.json`

Contient l'historique des releases :

```json
{
  "releases": [
    {
      "id": "entrepot-v2.1.0",
      "version": "v2.1.0",
      "date": "2025-01-28",
      "app": "Entrepôt",
      "type": "feature",
      "title": "Titre de la release",
      "description": "Description détaillée",
      "changes": ["Changement 1", "Changement 2"],
      "priority": "high"
    }
  ],
  "roadmap": [...]
}
```

### `/src/data/config.json`

Configuration générale du site :

```json
{
  "site": {
    "title": "Documentation Apps",
    "subtitle": "Suivi des évolutions",
    "version": "1.0.0",
    "lastUpdate": "2025-01-28"
  },
  "content": {
    "heroTitle": "Documentation des Applications",
    "heroSubtitle": "Description de la page d'accueil"
  }
}
```

## 🎨 Personnalisation des Icônes

Les icônes sont gérées dans `/src/components/ui/Icon.tsx`. Pour ajouter une nouvelle icône :

1. Ajoutez l'icône SVG dans le `iconMap`
2. Utilisez le nom de l'icône dans vos données JSON
3. L'icône sera automatiquement affichée

Icônes disponibles :

- `warehouse`, `car`, `truck`, `chart-bar`
- `lightning`, `users`, `check-circle`
- `clock`, `star`, `bug`, `grid`
- Et bien d'autres...

## 🔄 Mise à Jour en Temps Réel

Toutes les modifications sont appliquées immédiatement dans l'interface. Les données sont stockées en mémoire pendant la session.

**Note** : Pour une persistance permanente, vous devrez implémenter une sauvegarde vers un backend ou un système de fichiers.

## 🚀 Bonnes Pratiques

### Versions

- Utilisez le format sémantique : `v1.2.3`
- Incrémentez le patch pour les bugfixes
- Incrémentez le minor pour les features
- Incrémentez le major pour les breaking changes

### Descriptions

- Soyez concis mais descriptifs
- Utilisez un langage accessible
- Mentionnez l'impact utilisateur

### Changements

- Un changement par ligne
- Commencez par un verbe d'action
- Soyez spécifique

## 🛠️ Développement

### Ajouter une nouvelle application

1. Ajoutez l'app dans `apps.json`
2. Créez une section dédiée dans `/src/components/sections/`
3. Ajoutez la route dans `MainContent.tsx`
4. Ajoutez l'entrée dans la navigation

### Ajouter un nouveau type de contenu

1. Créez un nouveau fichier JSON dans `/src/data/`
2. Créez un hook personnalisé dans `/src/hooks/`
3. Intégrez dans le panneau d'administration

## 📞 Support

Pour toute question ou problème :

- Consultez ce guide
- Vérifiez la console du navigateur pour les erreurs
- Contactez l'équipe de développement

---

**Version du guide** : 1.0.0  
**Dernière mise à jour** : 28 janvier 2025
