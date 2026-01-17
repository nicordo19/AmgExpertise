# 📧 Configuration Brevo (Sendinblue) + Firebase Functions

## ✅ Configuration effectuée

J'ai mis en place un système d'envoi d'emails professionnel avec **Brevo** (ex-Sendinblue).

### 🎯 Pourquoi Brevo ?

- **300 emails/jour GRATUIT** (≈ 9000/mois)
- **Pas de carte bancaire** requise
- **Interface en français** 🇫🇷
- **Serveurs européens** (RGPD compliant)
- **Jamais de facturation automatique**

---

## 🚀 Étapes pour finaliser la configuration

### 1️⃣ Créer un compte Brevo (GRATUIT)

1. Va sur **https://www.brevo.com/fr/**
2. Clique sur **"Inscription gratuite"**
3. Remplis avec :
   - **Email** : `nordest.amg@expertsgroupe.fr` (l'email de l'entreprise)
   - **Nom de l'entreprise** : AMG Expertise
4. Vérifie ton email

### 2️⃣ Obtenir ta clé API

1. Une fois connecté, va dans **"Paramètres"** (icône ⚙️ en haut à droite)
2. Clique sur **"Clés API SMTP & API"** dans le menu
3. Clique sur **"Créer une nouvelle clé API"**
4. Donne un nom : `AMG Expertise Production`
5. **Copie la clé** (commence par `xkeysib-...`)

⚠️ **IMPORTANT** : La clé ne sera visible qu'une seule fois !

### 3️⃣ Installer les dépendances

Ouvre un terminal et exécute :

```bash
cd functions
npm install
cd ..
```

### 4️⃣ Configurer Firebase

```bash
# Installe Firebase CLI si pas déjà fait
npm install -g firebase-tools

# Connecte-toi à Firebase
firebase login

# Configure la clé API Brevo (remplace xkeysib-xxx par ta vraie clé)
firebase functions:config:set brevo.api_key="xkeysib-xxx"
```

### 5️⃣ Tester en local

**Terminal 1 - Lancer l'émulateur Firebase :**

```bash
cd functions
npm run build
firebase emulators:start --only functions
```

**Terminal 2 - Lancer Angular :**

```bash
npm start
```

Ton site sera sur `http://localhost:4200`. Remplis le formulaire de contact pour tester !

### 6️⃣ Déployer en production

```bash
# Déploie les fonctions Firebase
firebase deploy --only functions
```

Après le déploiement, Firebase te donnera une URL comme :

```
https://europe-west1-amg-expertise.cloudfunctions.net/sendContactEmail
```

### 7️⃣ Mettre à jour l'URL en production

Édite `src/app/services/email.service.ts` :

```typescript
// Remplace cette ligne:
private apiUrl = 'http://127.0.0.1:5001/amg-expertise/europe-west1/sendContactEmail';

// Par ton URL de production (celle que Firebase t'a donnée):
private apiUrl = 'https://europe-west1-TON-PROJET-ID.cloudfunctions.net/sendContactEmail';
```

Puis rebuild et redéploie :

```bash
npm run build
firebase deploy --only hosting
```

---

## 📬 Ce qui se passe quand un visiteur envoie un message

1. **Le visiteur remplit le formulaire** sur ton site
2. **Brevo envoie l'email à** : `nordest.amg@expertsgroupe.fr`
3. **Tu reçois un bel email formaté** avec toutes les infos
4. **Tu peux répondre directement** - la réponse ira au visiteur

### Exemple d'email reçu :

```
De: Site Web AMG Expertise <noreply@amg-expertise.fr>
À: nordest.amg@expertsgroupe.fr
Répondre à: jean.dupont@example.com

📧 Nouveau message de contact
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

👤 Nom : Jean Dupont
📧 Email : jean.dupont@example.com
📞 Téléphone : 06 12 34 56 78
📝 Sujet : Demande d'expertise

Message :
Bonjour, je souhaiterais une expertise...
```

---

## 🎨 Fonctionnalités ajoutées

✅ **Messages de succès/erreur** dans le formulaire  
✅ **Bouton désactivé pendant l'envoi**  
✅ **Validation des champs**  
✅ **Email joliment formaté** avec les couleurs AMG  
✅ **Réponse facile** via "Répondre"

---

## 📊 Statistiques dans Brevo

Dans le dashboard Brevo, tu pourras voir :

- Nombre d'emails envoyés
- Emails ouverts
- Clics
- Erreurs éventuelles

---

## 🔒 Sécurité

✅ La clé API est stockée dans Firebase (pas dans le code)  
✅ CORS configuré pour ton domaine uniquement  
✅ Validation des données côté serveur  
✅ Serveurs européens (RGPD)

---

## ❓ FAQ

### L'email d'envoi est "noreply@amg-expertise.fr", c'est normal ?

Oui ! C'est un placeholder. Pour utiliser ton vrai domaine :

1. Dans Brevo, va dans **"Expéditeurs"**
2. Ajoute et vérifie ton domaine
3. Mets à jour dans `functions/src/index.ts`

### Je vois pas les emails de test ?

Brevo peut bloquer les emails de test. Utilise un vrai email pour tester.

### Ça coûte combien après 300 emails/jour ?

Le service **s'arrête**, pas de facturation. Mais 300/jour = largement suffisant !

### Je peux envoyer des newsletters avec ?

Oui ! Brevo a aussi des outils marketing, mais c'est pas configuré ici.

---

## 🧪 Test rapide

1. Lance : `firebase emulators:start --only functions`
2. Lance : `npm start`
3. Remplis le formulaire
4. Vérifie `nordest.amg@expertsgroupe.fr` !

---

## 🆘 Besoin d'aide ?

Si tu bloques quelque part, dis-moi à quelle étape ! 💪
