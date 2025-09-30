# NyxoSolution - Site Vitrine

Site vitrine professionnel pour NyxoSolution, entreprise spécialisée en audit digital et développement web & mobile basée à Rabat, Maroc.

## 🚀 Technologies

- **Next.js 15** (App Router)
- **TailwindCSS** pour le styling
- **Framer Motion** pour les animations
- **TypeScript** pour la robustesse
- **Lucide React** pour les icônes

## 🎨 Design

- **Thème sombre futuriste** avec couleurs néon
- **Glassmorphism** et effets de transparence
- **Animations fluides** avec Framer Motion
- **Responsive design** pour tous les appareils
- **Optimisé SEO** avec métadonnées complètes

## 📁 Structure du projet

```
src/
├── app/
│   ├── layout.tsx          # Layout principal
│   ├── page.tsx           # Page d'accueil
│   ├── globals.css        # Styles globaux
│   ├── sitemap.ts         # Sitemap SEO
│   └── robots.ts          # Robots.txt
├── components/
│   ├── Header.tsx         # Navigation sticky
│   ├── Hero.tsx           # Section d'accueil
│   ├── About.tsx          # À propos Hamza Bayahia
│   ├── Services.tsx       # Services proposés
│   ├── Portfolio.tsx      # Projets réalisés
│   ├── Contact.tsx        # Formulaire de contact
│   ├── Footer.tsx         # Pied de page
│   └── GoogleAnalytics.tsx # Analytics
```

## 🛠️ Comment modifier le contenu

### 1. Informations personnelles (About.tsx)
```tsx
// Modifier le texte de présentation
<p>
  Je suis Hamza Bayahia, fondateur de NyxoSolution...
</p>

// Ajouter/modifier les compétences
const skills = [
  { icon: Code, name: 'Développement Web', color: 'from-blue-500 to-cyan-500' },
  // Ajouter d'autres compétences...
];
```

### 2. Services (Services.tsx)
```tsx
const services = [
  {
    icon: Shield,
    title: 'Audit Digital',
    description: 'Sécurité, performance et SEO technique...',
    features: ['Audit de sécurité', 'Analyse de performance', 'SEO technique'],
    color: 'from-green-500 to-emerald-500'
  },
  // Ajouter d'autres services...
];
```

### 3. Projets (Portfolio.tsx)
```tsx
const projects = [
  {
    id: 1,
    title: 'E-Commerce Platform',
    description: 'Plateforme e-commerce complète...',
    technologies: ['Next.js', 'TypeScript', 'Stripe'],
    category: 'Web App',
    status: 'Live',
    link: '#',
    github: '#'
  },
  // Ajouter d'autres projets...
];
```

### 4. Informations de contact (Contact.tsx)
```tsx
// Modifier l'email
<p className="text-white font-semibold">contact@nyxosolution.com</p>

// Modifier le téléphone
<p className="text-white font-semibold">+33 6 12 34 56 78</p>
```

### 5. Métadonnées SEO (layout.tsx)
```tsx
export const metadata: Metadata = {
  title: "NyxoSolution - Audit & Développement Web & Mobile | Rabat, Maroc",
  description: "NyxoSolution basé à Rabat, Maroc...",
  keywords: "audit digital Rabat, développement web Maroc...",
  // Modifier selon vos besoins
};
```

## 🎨 Personnalisation des couleurs

Dans `globals.css`, modifiez les variables CSS :
```css
:root {
  --primary-dark: #0B1020;      /* Fond principal */
  --secondary-silver: #C0C0C0;  /* Argent */
  --accent-neon: #00E0FF;       /* Bleu néon */
  --text-primary: #FFFFFF;      /* Texte principal */
  --text-secondary: #C0C0C0;    /* Texte secondaire */
}
```

## 📱 Responsive Design

Le site est entièrement responsive avec :
- **Mobile** : < 768px
- **Tablette** : 768px - 1024px  
- **Desktop** : > 1024px

## 🔍 SEO

- **Métadonnées complètes** dans layout.tsx
- **Sitemap automatique** (sitemap.ts)
- **Robots.txt** (robots.ts)
- **Google Analytics** intégré
- **Open Graph** pour les réseaux sociaux

## 🚀 Déploiement

1. **Vercel** (recommandé) :
   ```bash
   npm run build
   vercel --prod
   ```

2. **Netlify** :
   ```bash
   npm run build
   # Déployer le dossier .next
   ```

3. **Autres plateformes** :
   ```bash
   npm run build
   npm start
   ```

## 📊 Analytics

Pour activer Google Analytics :
1. Créez un compte Google Analytics 4
2. Ajoutez l'ID dans les variables d'environnement :
   ```env
   NEXT_PUBLIC_GA_ID=G-XXXXXXXXXX
   ```

## 🎯 Performance

- **Images optimisées** avec Next.js Image
- **Lazy loading** automatique
- **Animations performantes** avec Framer Motion
- **Code splitting** automatique

## 📞 Support

Pour toute question ou personnalisation :
- **Email** : contact@nyxosolution.com
- **Localisation** : Rabat, Maroc

---

**NyxoSolution** - Transformez vos idées en solutions digitales performantes 🚀