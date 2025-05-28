# Système de Design - Documentation Complète

## 🎨 Vue d'ensemble

Ce document décrit le système de design complet de l'application, permettant de reproduire l'interface sur n'importe quelle plateforme ou framework.

## 🎯 Philosophie de Design

- **Minimalisme moderne** : Interface épurée avec des éléments essentiels
- **Accessibilité** : Respect des standards WCAG 2.1
- **Cohérence** : Système de tokens unifié
- **Adaptabilité** : Design responsive et thème sombre/clair

## 🎨 Palette de Couleurs

### Mode Clair (Light Mode)

```css
/* Couleurs principales */
--background: oklch(1 0 0);           /* Blanc pur */
--foreground: oklch(0.145 0 0);       /* Noir profond */
--primary: oklch(0.205 0 0);          /* Noir pour les actions principales */
--primary-foreground: oklch(0.985 0 0); /* Blanc pour le texte sur primary */

/* Couleurs secondaires */
--secondary: oklch(0.97 0 0);         /* Gris très clair */
--secondary-foreground: oklch(0.205 0 0); /* Noir pour le texte sur secondary */
--muted: oklch(0.97 0 0);             /* Gris clair pour les éléments discrets */
--muted-foreground: oklch(0.556 0 0); /* Gris moyen pour le texte discret */

/* Couleurs d'interface */
--card: oklch(1 0 0);                 /* Blanc pour les cartes */
--card-foreground: oklch(0.145 0 0);  /* Noir pour le texte des cartes */
--border: oklch(0.922 0 0);           /* Gris clair pour les bordures */
--input: oklch(0.922 0 0);            /* Gris clair pour les champs */
--ring: oklch(0.708 0 0);             /* Gris moyen pour les focus */

/* Couleurs d'état */
--destructive: oklch(0.577 0.245 27.325);     /* Rouge pour les erreurs */
--success: hsl(151, 55%, 41%);                /* Vert pour les succès */
--warning: hsl(24deg 94% 50%);               /* Orange pour les avertissements */
--info: hsl(221.2 83.2% 53.3%);             /* Bleu pour les informations */
```

### Mode Sombre (Dark Mode)

```css
/* Couleurs principales */
--background: oklch(0.145 0 0);       /* Noir profond */
--foreground: oklch(0.985 0 0);       /* Blanc */
--primary: oklch(0.985 0 0);          /* Blanc pour les actions principales */
--primary-foreground: oklch(0.205 0 0); /* Noir pour le texte sur primary */

/* Couleurs secondaires */
--secondary: oklch(0.269 0 0);        /* Gris foncé */
--secondary-foreground: oklch(0.985 0 0); /* Blanc pour le texte sur secondary */
--muted: oklch(0.269 0 0);            /* Gris foncé pour les éléments discrets */
--muted-foreground: oklch(0.708 0 0); /* Gris clair pour le texte discret */

/* Couleurs d'interface */
--card: oklch(0.2 0 0);               /* Gris très foncé pour les cartes */
--card-foreground: oklch(0.985 0 0);  /* Blanc pour le texte des cartes */
--border: oklch(0.269 0 0);           /* Gris foncé pour les bordures */
--input: oklch(0.269 0 0);            /* Gris foncé pour les champs */
--ring: oklch(0.439 0 0);             /* Gris moyen pour les focus */

/* Couleurs d'état */
--destructive: oklch(0.396 0.141 25.723);     /* Rouge sombre pour les erreurs */
--success: hsl(151deg 55% 41.5%);             /* Vert pour les succès */
--warning: hsl(24deg 94% 50%);                /* Orange pour les avertissements */
--info: hsl(217.2 91.2% 59.8%);              /* Bleu pour les informations */
```

## 📐 Espacement et Tailles

### Système d'espacement (basé sur rem)

```css
/* Espacements de base */
--spacing-1: 0.25rem;    /* 4px */
--spacing-2: 0.5rem;     /* 8px */
--spacing-3: 0.75rem;    /* 12px */
--spacing-4: 1rem;       /* 16px */
--spacing-5: 1.25rem;    /* 20px */
--spacing-6: 1.5rem;     /* 24px */
--spacing-8: 2rem;       /* 32px */
--spacing-10: 2.5rem;    /* 40px */
--spacing-12: 3rem;      /* 48px */
--spacing-16: 4rem;      /* 64px */
--spacing-20: 5rem;      /* 80px */
--spacing-24: 6rem;      /* 96px */
--spacing-32: 8rem;      /* 128px */
```

### Rayons de bordure

```css
--radius: 0.625rem;              /* 10px - Rayon de base */
--radius-sm: calc(var(--radius) - 4px);  /* 6px - Petit rayon */
--radius-md: calc(var(--radius) - 2px);  /* 8px - Rayon moyen */
--radius-lg: var(--radius);              /* 10px - Grand rayon */
--radius-xl: calc(var(--radius) + 4px);  /* 14px - Très grand rayon */
```

## 🔤 Typographie

### Familles de polices

```css
--font-sans: 'Geist Sans', system-ui, -apple-system, sans-serif;
--font-mono: 'Geist Mono', 'Fira Code', monospace;
```

### Échelle typographique

```css
/* Tailles de texte */
.text-xs { font-size: 0.75rem; line-height: 1rem; }      /* 12px */
.text-sm { font-size: 0.875rem; line-height: 1.25rem; }  /* 14px */
.text-base { font-size: 1rem; line-height: 1.5rem; }     /* 16px */
.text-lg { font-size: 1.125rem; line-height: 1.75rem; }  /* 18px */
.text-xl { font-size: 1.25rem; line-height: 1.75rem; }   /* 20px */
.text-2xl { font-size: 1.5rem; line-height: 2rem; }      /* 24px */
.text-3xl { font-size: 1.875rem; line-height: 2.25rem; } /* 30px */
.text-4xl { font-size: 2.25rem; line-height: 2.5rem; }   /* 36px */
.text-5xl { font-size: 3rem; line-height: 1; }           /* 48px */
.text-6xl { font-size: 3.75rem; line-height: 1; }        /* 60px */
.text-7xl { font-size: 4.5rem; line-height: 1; }         /* 72px */

/* Poids de police */
.font-light { font-weight: 300; }
.font-normal { font-weight: 400; }
.font-medium { font-weight: 500; }
.font-semibold { font-weight: 600; }
.font-bold { font-weight: 700; }
```

## 🔘 Composants de Base

### Boutons

#### Variants de boutons

```css
/* Bouton par défaut */
.btn-default {
  background: var(--primary);
  color: var(--primary-foreground);
  border: none;
  box-shadow: 0 1px 2px 0 rgb(0 0 0 / 0.05);
}

.btn-default:hover {
  background: var(--primary) / 0.9;
}

/* Bouton destructif */
.btn-destructive {
  background: var(--destructive);
  color: white;
  box-shadow: 0 1px 2px 0 rgb(0 0 0 / 0.05);
}

/* Bouton outline */
.btn-outline {
  background: var(--background);
  color: var(--foreground);
  border: 1px solid var(--border);
  box-shadow: 0 1px 2px 0 rgb(0 0 0 / 0.05);
}

.btn-outline:hover {
  background: var(--accent);
  color: var(--accent-foreground);
}

/* Bouton secondaire */
.btn-secondary {
  background: var(--secondary);
  color: var(--secondary-foreground);
  box-shadow: 0 1px 2px 0 rgb(0 0 0 / 0.05);
}

/* Bouton ghost */
.btn-ghost {
  background: transparent;
  color: var(--foreground);
}

.btn-ghost:hover {
  background: var(--accent);
  color: var(--accent-foreground);
}

/* Bouton link */
.btn-link {
  background: transparent;
  color: var(--primary);
  text-decoration: underline;
  text-underline-offset: 4px;
}
```

#### Tailles de boutons

```css
/* Taille par défaut */
.btn-default-size {
  height: 2.25rem;        /* 36px */
  padding: 0.5rem 1rem;   /* 8px 16px */
  font-size: 0.875rem;    /* 14px */
}

/* Petite taille */
.btn-sm {
  height: 2rem;           /* 32px */
  padding: 0.375rem 0.75rem; /* 6px 12px */
  font-size: 0.875rem;    /* 14px */
  gap: 0.375rem;          /* 6px */
}

/* Grande taille */
.btn-lg {
  height: 2.5rem;         /* 40px */
  padding: 0.5rem 1.5rem; /* 8px 24px */
  font-size: 1rem;        /* 16px */
}

/* Bouton icône */
.btn-icon {
  width: 2.25rem;         /* 36px */
  height: 2.25rem;        /* 36px */
  padding: 0;
}
```

#### Propriétés communes des boutons

```css
.btn-base {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  gap: 0.5rem;
  white-space: nowrap;
  border-radius: var(--radius-md);
  font-weight: 500;
  outline: none;
  transition: all 0.2s ease;
  cursor: pointer;
  flex-shrink: 0;
}

.btn-base:focus-visible {
  outline: 2px solid var(--ring);
  outline-offset: 2px;
}

.btn-base:disabled {
  pointer-events: none;
  opacity: 0.5;
}

.btn-base svg {
  width: 1rem;
  height: 1rem;
  pointer-events: none;
  flex-shrink: 0;
}
```

### Cartes

```css
.card {
  background: var(--card);
  color: var(--card-foreground);
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
  border-radius: var(--radius-xl);
  border: 1px solid var(--border);
  padding: 1.5rem;
  box-shadow: 0 1px 3px 0 rgb(0 0 0 / 0.1), 0 1px 2px -1px rgb(0 0 0 / 0.1);
}

.card-header {
  display: grid;
  grid-template-rows: auto auto;
  gap: 0.375rem;
  align-items: start;
  padding: 0 1.5rem;
}

.card-title {
  font-weight: 600;
  line-height: 1;
}

.card-description {
  color: var(--muted-foreground);
  font-size: 0.875rem;
}

.card-content {
  padding: 0 1.5rem;
}

.card-footer {
  display: flex;
  align-items: center;
  padding: 0 1.5rem;
}
```

### Champs de saisie

```css
.input {
  display: flex;
  height: 2.25rem;
  width: 100%;
  border-radius: var(--radius-md);
  border: 1px solid var(--input);
  background: var(--background);
  padding: 0.5rem 0.75rem;
  font-size: 0.875rem;
  outline: none;
  transition: all 0.2s ease;
}

.input:focus-visible {
  outline: 2px solid var(--ring);
  outline-offset: 2px;
}

.input:disabled {
  cursor: not-allowed;
  opacity: 0.5;
}

.input::placeholder {
  color: var(--muted-foreground);
}
```

## 🎭 Effets Visuels

### Ombres

```css
/* Ombres de base */
.shadow-xs { box-shadow: 0 1px 2px 0 rgb(0 0 0 / 0.05); }
.shadow-sm { box-shadow: 0 1px 3px 0 rgb(0 0 0 / 0.1), 0 1px 2px -1px rgb(0 0 0 / 0.1); }
.shadow-md { box-shadow: 0 4px 6px -1px rgb(0 0 0 / 0.1), 0 2px 4px -2px rgb(0 0 0 / 0.1); }
.shadow-lg { box-shadow: 0 10px 15px -3px rgb(0 0 0 / 0.1), 0 4px 6px -4px rgb(0 0 0 / 0.1); }
.shadow-xl { box-shadow: 0 20px 25px -5px rgb(0 0 0 / 0.1), 0 8px 10px -6px rgb(0 0 0 / 0.1); }
.shadow-2xl { box-shadow: 0 25px 50px -12px rgb(0 0 0 / 0.25); }
```

### Arrière-plans avec motifs

```css
/* Grille de fond */
.bg-grid {
  --bg-grid-color: hsl(0 0% 100% / 0.1);
  background-color: transparent;
  background-image:
    linear-gradient(90deg, var(--bg-grid-color) 1px, transparent 1px),
    linear-gradient(180deg, var(--bg-grid-color) 1px, transparent 1px);
  background-size: 64px 64px;
}

/* Motif de points */
.dot-pattern {
  background-image: radial-gradient(circle, var(--muted-foreground) 1px, transparent 1px);
  background-size: 20px 20px;
  opacity: 0.5;
}
```

### Dégradés

```css
/* Dégradé principal */
.gradient-primary {
  background: linear-gradient(135deg, var(--primary) 0%, #9089fc 100%);
}

/* Dégradé coloré */
.gradient-colorful {
  background: linear-gradient(135deg, #ff80b5 0%, #9089fc 100%);
}

/* Texte avec dégradé */
.text-gradient {
  background-clip: text;
  -webkit-background-clip: text;
  color: transparent;
}
```

## 📱 Layout et Structure

### Conteneurs

```css
/* Conteneur principal */
.container {
  width: 100%;
  margin: 0 auto;
  padding: 0 1rem;
}

/* Breakpoints */
@media (min-width: 640px) {
  .container { max-width: 640px; padding: 0 1.5rem; }
}

@media (min-width: 768px) {
  .container { max-width: 768px; }
}

@media (min-width: 1024px) {
  .container { max-width: 1024px; padding: 0 2rem; }
}

@media (min-width: 1280px) {
  .container { max-width: 1280px; }
}

@media (min-width: 1536px) {
  .container { max-width: 1536px; }
}
```

### Grilles

```css
/* Grille responsive */
.grid {
  display: grid;
  gap: 1rem;
}

.grid-cols-1 { grid-template-columns: repeat(1, minmax(0, 1fr)); }
.grid-cols-2 { grid-template-columns: repeat(2, minmax(0, 1fr)); }
.grid-cols-3 { grid-template-columns: repeat(3, minmax(0, 1fr)); }
.grid-cols-4 { grid-template-columns: repeat(4, minmax(0, 1fr)); }

/* Responsive */
@media (min-width: 640px) {
  .sm\:grid-cols-2 { grid-template-columns: repeat(2, minmax(0, 1fr)); }
  .sm\:grid-cols-3 { grid-template-columns: repeat(3, minmax(0, 1fr)); }
}

@media (min-width: 768px) {
  .md\:grid-cols-3 { grid-template-columns: repeat(3, minmax(0, 1fr)); }
  .md\:grid-cols-4 { grid-template-columns: repeat(4, minmax(0, 1fr)); }
}

@media (min-width: 1024px) {
  .lg\:grid-cols-4 { grid-template-columns: repeat(4, minmax(0, 1fr)); }
  .lg\:grid-cols-6 { grid-template-columns: repeat(6, minmax(0, 1fr)); }
}
```

## 🎨 Composants Spécialisés

### Section Hero

```css
.hero {
  position: relative;
  isolation: isolate;
  display: flex;
  flex-direction: column;
  padding: 6rem 0 10rem;
}

.hero-content {
  position: relative;
  margin: 0 auto;
  max-width: 80rem;
  padding: 0 1.5rem;
}

.hero-text {
  margin: 0 auto;
  max-width: 42rem;
  text-align: center;
}

.hero-title {
  font-size: 3rem;
  font-weight: 600;
  letter-spacing: -0.025em;
  text-wrap: balance;
}

@media (min-width: 640px) {
  .hero-title { font-size: 4.5rem; }
}

@media (min-width: 1024px) {
  .hero-title { font-size: 4.5rem; }
}

.hero-description {
  margin-top: 2rem;
  font-size: 1.125rem;
  font-weight: 500;
  color: var(--muted-foreground);
  text-wrap: pretty;
}

@media (min-width: 640px) {
  .hero-description { font-size: 1.25rem; line-height: 2rem; }
}

.hero-actions {
  margin-top: 2.5rem;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 1.5rem;
}
```

### Sidebar

```css
.sidebar {
  background: var(--sidebar);
  color: var(--sidebar-foreground);
  border-right: 1px solid var(--sidebar-border);
  width: 16rem;
  height: 100vh;
  position: fixed;
  left: 0;
  top: 0;
  z-index: 40;
}

.sidebar-header {
  padding: 1rem;
  border-bottom: 1px solid var(--sidebar-border);
}

.sidebar-content {
  padding: 1rem;
  overflow-y: auto;
  flex: 1;
}

.sidebar-nav {
  display: flex;
  flex-direction: column;
  gap: 0.25rem;
}

.sidebar-nav-item {
  display: flex;
  align-items: center;
  gap: 0.75rem;
  padding: 0.5rem 0.75rem;
  border-radius: var(--radius-md);
  font-size: 0.875rem;
  font-weight: 500;
  color: var(--sidebar-foreground);
  text-decoration: none;
  transition: all 0.2s ease;
}

.sidebar-nav-item:hover {
  background: var(--sidebar-accent);
  color: var(--sidebar-accent-foreground);
}

.sidebar-nav-item.active {
  background: var(--sidebar-primary);
  color: var(--sidebar-primary-foreground);
}
```

## 🎯 Animations

### Transitions de base

```css
.transition-all { transition: all 0.2s ease; }
.transition-colors { transition: color 0.2s ease, background-color 0.2s ease, border-color 0.2s ease; }
.transition-opacity { transition: opacity 0.2s ease; }
.transition-transform { transition: transform 0.2s ease; }
```

### Animations personnalisées

```css
/* Animation d'accordéon */
@keyframes accordion-down {
  from { height: 0; }
  to { height: var(--radix-accordion-content-height); }
}

@keyframes accordion-up {
  from { height: var(--radix-accordion-content-height); }
  to { height: 0; }
}

.animate-accordion-down {
  animation: accordion-down 0.2s ease-out;
}

.animate-accordion-up {
  animation: accordion-up 0.2s ease-out;
}

/* Animation de fondu */
@keyframes fade-in {
  from { opacity: 0; }
  to { opacity: 1; }
}

.animate-fade-in {
  animation: fade-in 0.3s ease-out;
}

/* Animation de glissement */
@keyframes slide-in-from-top {
  from { transform: translateY(-100%); }
  to { transform: translateY(0); }
}

.animate-slide-in-from-top {
  animation: slide-in-from-top 0.3s ease-out;
}
```

## 📐 Breakpoints Responsive

```css
/* Mobile first approach */
/* xs: 0px - 639px (par défaut) */

/* sm: 640px et plus */
@media (min-width: 640px) { /* Styles pour tablettes petites */ }

/* md: 768px et plus */
@media (min-width: 768px) { /* Styles pour tablettes */ }

/* lg: 1024px et plus */
@media (min-width: 1024px) { /* Styles pour desktop */ }

/* xl: 1280px et plus */
@media (min-width: 1280px) { /* Styles pour grands écrans */ }

/* 2xl: 1536px et plus */
@media (min-width: 1536px) { /* Styles pour très grands écrans */ }
```

## 🎨 États et Interactions

### États de focus

```css
.focus-visible {
  outline: 2px solid var(--ring);
  outline-offset: 2px;
}

.focus-within {
  outline: 2px solid var(--ring);
  outline-offset: 2px;
}
```

### États de hover

```css
.hover-lift {
  transition: transform 0.2s ease;
}

.hover-lift:hover {
  transform: translateY(-2px);
}

.hover-scale {
  transition: transform 0.2s ease;
}

.hover-scale:hover {
  transform: scale(1.05);
}
```

### États disabled

```css
.disabled {
  pointer-events: none;
  opacity: 0.5;
  cursor: not-allowed;
}
```

## 🔧 Utilitaires

### Classes utilitaires communes

```css
/* Visibilité */
.sr-only {
  position: absolute;
  width: 1px;
  height: 1px;
  padding: 0;
  margin: -1px;
  overflow: hidden;
  clip: rect(0, 0, 0, 0);
  white-space: nowrap;
  border: 0;
}

/* Truncate */
.truncate {
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
}

/* Aspect ratio */
.aspect-square { aspect-ratio: 1 / 1; }
.aspect-video { aspect-ratio: 16 / 9; }

/* Object fit */
.object-cover { object-fit: cover; }
.object-contain { object-fit: contain; }
```

## 📋 Checklist d'implémentation

### ✅ Étapes pour reproduire le design

1. **Configuration de base**
   - [ ] Installer les polices Geist Sans et Geist Mono
   - [ ] Configurer les variables CSS pour les couleurs
   - [ ] Mettre en place le système de breakpoints

2. **Composants essentiels**
   - [ ] Implémenter le système de boutons avec tous les variants
   - [ ] Créer les composants de cartes
   - [ ] Développer les champs de saisie
   - [ ] Mettre en place la navigation/sidebar

3. **Layout et structure**
   - [ ] Configurer le système de grille
   - [ ] Implémenter les conteneurs responsive
   - [ ] Créer les sections hero et landing

4. **Thème et accessibilité**
   - [ ] Implémenter le mode sombre/clair
   - [ ] Ajouter les états de focus
   - [ ] Tester l'accessibilité

5. **Animations et interactions**
   - [ ] Ajouter les transitions de base
   - [ ] Implémenter les animations personnalisées
   - [ ] Configurer les états hover

### 🎯 Points d'attention

- **Cohérence** : Utiliser systématiquement les tokens de design
- **Performance** : Optimiser les animations et transitions
- **Accessibilité** : Respecter les contrastes et la navigation clavier
- **Responsive** : Tester sur tous les breakpoints
- **Thème** : S'assurer que tous les composants fonctionnent en mode sombre

## 📚 Ressources

### Outils recommandés

- **Figma/Sketch** : Pour la conception
- **Tailwind CSS** : Framework CSS utilitaire
- **Radix UI** : Composants accessibles
- **Framer Motion** : Animations avancées
- **Storybook** : Documentation des composants

### Références

- [WCAG 2.1 Guidelines](https://www.w3.org/WAI/WCAG21/quickref/)
- [Material Design](https://material.io/design)
- [Apple Human Interface Guidelines](https://developer.apple.com/design/human-interface-guidelines/)
- [Tailwind CSS Documentation](https://tailwindcss.com/docs)

---

*Ce document est un guide complet pour reproduire le système de design. Adaptez les valeurs selon vos besoins spécifiques tout en conservant la cohérence globale.* 