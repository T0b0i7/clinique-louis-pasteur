# Clinique Louis Pasteur

Refonte du site de la Clinique Louis Pasteur, clinique polyvalente située au quartier Djassin, 631 route de Louho, Porto-Novo au Bénin.

Le projet reprend le template [medicare-hospital](https://github.com/Pulipati-Rahul/medicare-hospital) (Next.js 15, React 19, Tailwind CSS 4, Framer Motion) et remplace tout le contenu par des informations réelles, en français.

## Lancer le projet

```bash
npm install
npm run dev
```

Le site est disponible sur http://localhost:3000.

Pour vérifier le build de production :

```bash
npm run build
```

## Contenu

Le site est une page unique découpée en sections :

- Accueil et présentation de la clinique
- La clinique, son histoire et ses valeurs
- Spécialités et services
- Équipe médicale et examens d'immigration Canada
- Pourquoi choisir la clinique
- Assurances et moyens de paiement
- Guide du patient
- Questions fréquentes
- Demande de rendez-vous
- Contact et carte

## Sources des informations

Les informations publiées proviennent du site officiel de la clinique :

- https://cliniquelouispasteur.bj/
- https://cliniquelouispasteur.bj/guide-du-patient/
- https://cliniquelouispasteur.bj/services/liste-specialites/

Les images du logo, de la façade et de la carte sont utilisées à partir de sources publiques. La carte est issue d'OpenStreetMap.

## Points à confirmer avec la clinique

- Les horaires des praticiens peuvent changer. Ils sont affichés à titre indicatif et doivent être confirmés par téléphone.
- Les tarifs ne sont pas publiés. La section paiement présente uniquement les moyens de règlement et le tiers payant.
- Le formulaire de rendez-vous ne réserve pas de créneau automatiquement. Il prépare une demande à envoyer par email ou à confirmer par téléphone.
- La liste des assureurs partenaires n'est pas publiée sur le site. Elle est à demander à l'accueil.

## Coordonnées

- Adresse : Quartier Djassin, 631 route de Louho, Porto-Novo, Bénin
- Téléphone : +229 20 21 22 22
- Mobile : +229 95 86 95 25
- Ambulance : +229 95 62 15 64
- Email : contact@cliniquelouispasteur.com
- Autorisation d'ouverture : 0793/MSP/DC/SGM/DNPS/SHMNT du 12 décembre 2003

## Structure

```text
src/app/                 Layout, page et fichiers SEO
src/components/          Navigation, chargeur, urgences, retour en haut
src/components/sections/ Sections de la page
public/images/           Logo, façade et carte
```
