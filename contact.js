function validerFormulaire() {
    var form = document.contactForm;
    
  
    var nom = form.nom.value;
    var prenom = form.prenom.value;
    var email = form.email.value;
    var telephone = form.telephone.value;
    var objet = form.objet.value;
    var message = form.message.value;
    

    if (nom === "") {
        alert("Le champ Nom est obligatoire !");
        form.nom.focus();
        return false;
    }
    
    if (prenom === "") {
        alert("Le champ Prénom est obligatoire !");
        form.prenom.focus();
        return false;
    }
    
    var regexNom = /^[a-zA-ZÀ-ÿ\s-]+$/;
    if (!regexNom.test(nom)) {
        alert("Le nom ne doit contenir que des lettres !");
        form.nom.focus();
        return false;
    }
    
    if (!regexNom.test(prenom)) {
        alert("Le prénom ne doit contenir que des lettres !");
        form.prenom.focus();
        return false;
    }
    

    if (email === "") {
        alert("Le champ Email est obligatoire !");
        form.email.focus();
        return false;
    }
    
    var regexEmail = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!regexEmail.test(email)) {
        alert("Veuillez entrer une adresse email valide !");
        form.email.focus();
        return false;
    }
    

    if (telephone !== "") {
        var regexTel = /^[\d\s+()-]+$/;
        if (!regexTel.test(telephone)) {
            alert("Le numéro de téléphone n'est pas valide !");
            form.telephone.focus();
            return false;
        }
    }
    

    if (objet === "") {
        alert("Veuillez sélectionner un objet pour votre message !");
        form.objet.focus();
        return false;
    }
    

    if (message === "") {
        alert("Le champ Message est obligatoire !");
        form.message.focus();
        return false;
    }
    
    if (message.length < 10) {
        alert("Votre message doit contenir au moins 10 caractères !");
        form.message.focus();
        return false;
    }

    var preferenceContact = "";
    for (var i = 0; i < form.preference_contact.length; i++) {
        if (form.preference_contact[i].checked) {
            preferenceContact = form.preference_contact[i].value;
            break;
        }
    }
    

    var newsletter = form.newsletter.checked ? "Oui" : "Non";
    var copie = form.copie.checked ? "Oui" : "Non";
  
    var confirmation = "Récapitulatif de votre message :\n\n";
    confirmation += "Nom : " + nom + "\n";
    confirmation += "Prénom : " + prenom + "\n";
    confirmation += "Email : " + email + "\n";
    if (telephone !== "") {
        confirmation += "Téléphone : " + telephone + "\n";
    }
    confirmation += "Objet : " + objet + "\n";
    confirmation += "Message : " + message.substring(0, 50) + "...\n";
    confirmation += "Préférence de contact : " + preferenceContact + "\n";
    confirmation += "Newsletter : " + newsletter + "\n";
    confirmation += "Copie du message : " + copie + "\n\n";
    confirmation += "Voulez-vous envoyer ce message ?";
    

    if (confirm(confirmation)) {
        alert("Merci " + prenom + " " + nom + " !\n\nVotre message a été envoyé avec succès.\nNous vous répondrons dans les plus brefs délais.");

        form.reset();
        return true;
    } else {
        alert("Envoi annulé. Vous pouvez modifier votre message.");
        return false;
    }
}