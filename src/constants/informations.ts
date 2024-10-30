export type Information = {
    title: string;
    content: string;
};

export const informations: Information[] = [
    {
        title: "Prix et durée",
        content: `Les séances de thérapie clinique durent généralement 50 minutes. <br /><br />
                  Les tarifs peuvent varier en fonction du type de consultation (individuelle, couple, familiale)
                  et des besoins spécifiques. Un devis détaillé peut être fourni lors du premier échange
                  pour vous donner une estimation claire des coûts.`,
    },
    {
        title: "Rendez-vous",
        content: `Les rendez-vous sont à organiser par téléphone ou via notre plateforme en ligne,
                  offrant des créneaux flexibles en présentiel ou par téléconsultation. <br /><br />
                  Vous pourrez sélectionner le format qui vous convient le mieux en fonction
                  de votre emploi du temps et de vos préférences.`,
    },
    {
        title: "Annulations",
        content: `Pour annuler ou reporter un rendez-vous, merci de prévenir au moins 24 heures à l’avance. <br /><br />
                  Cela permet de réajuster le planning et de proposer le créneau à d’autres patients. <br /><br />
                  En cas d'annulation tardive, un montant peut être facturé selon les conditions fixées.`,
    },
    {
        title: "Remboursements",
        content: `Les séances de thérapie peuvent être partiellement remboursées par certaines mutuelles. <br /><br />
                  Les niveaux de couverture varient ; il est donc recommandé de vérifier auprès de votre assurance. <br /><br />
                  Une facture peut être fournie à la fin de chaque séance pour faciliter les démarches de remboursement.`,
    },
];
