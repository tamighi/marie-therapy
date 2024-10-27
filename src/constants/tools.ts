import { flower_image } from "../assets";

export type Tool = {
    title: string;
    description: string;
    img: string;
};

export const tools: Tool[] = [
    {
        title: "Thérapie Systémique",
        description: `
La thérapie systémique vise à comprendre et améliorer les dynamiques relationnelles
au sein des groupes, tels que les familles, les couples ou les équipes. Elle examine
les interactions entre les individus et cherche à résoudre les conflits ou les
dysfonctionnements qui peuvent survenir. En travaillant sur la communication et les
liens interpersonnels, cette approche aide les personnes à trouver des solutions
efficaces et durables pour une meilleure harmonie collective.
<br/>
<br/>
Elle est particulièrement utile pour traiter des problèmes relationnels,
de communication ou des situations de crise au sein d'un groupe.
  `,
        img: flower_image,
    },
    {
        title: "Thérapie Artistique",
        description: `
La thérapie artistique utilise la créativité et l'expression artistique comme outils
de guérison. Cette méthode permet aux participants d’explorer leurs émotions
et de libérer des tensions ou des blocages inconscients à travers des formes
d’art comme la peinture, le dessin ou le modelage. Adaptée pour toutes
les générations, elle offre un espace de découverte de soi et de transformation
sans nécessiter de compétences artistiques préalables.
<br/>
<br/>
Idéale pour travailler sur l'estime de soi, la gestion du stress et la résolution
des traumatismes.
  `,
        img: flower_image,
    },
    {
        title: "Mindfulness",
        description: `
La thérapie basée sur la pleine conscience, ou mindfulness, aide à cultiver une
présence attentive et non jugeante dans l'instant présent. En apprenant à observer
ses pensées et ses émotions sans s’y attacher, on développe une meilleure
gestion du stress et une résilience émotionnelle accrue. Ce type de thérapie est
souvent utilisé pour traiter des problèmes d'anxiété, de dépression et de gestion
de la douleur chronique.
<br/>
<br/>
Elle favorise un mieux-être global et améliore la qualité de vie en renforçant
l'acceptation de soi et la régulation émotionnelle.
  `,
        img: flower_image,
    },
];
