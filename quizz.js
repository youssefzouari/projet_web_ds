
var bonnesReponses = ['a', 'b', 'a', 'b', 'b', 'b', 'a', 'a', 'a', 'b', 'a', 'a'];

var questions = [
    "Que signifie HTML ?",
    "Quelle balise permet de créer un lien hypertexte ?",
    "CSS signifie :",
    "Quelle propriété CSS permet de changer la couleur du texte ?",
    "JavaScript est un langage :",
    "Quelle balise HTML5 est utilisée pour l'en-tête d'une page ?",
    "HTTP signifie :",
    "Quelle méthode JavaScript affiche une boîte d'alerte ?",
    "La balise nav est utilisée pour :",
    "Pour centrer un texte en CSS, on utilise :",
    "WWW signifie :",
    "La balise footer représente :"
];

var reponsesCorrectes = [
    "Hyper Text Markup Language",
    "a",
    "Cascading Style Sheets",
    "color",
    "Côté client",
    "header",
    "HyperText Transfer Protocol",
    "alert()",
    "Les menus de navigation",
    "text-align: center",
    "World Wide Web",
    "Le pied de page"
];

function corrigerQuizz() {
    var form = document.quizzForm;
    var score = 0;
    var totalQuestions = 12;
    var corrections = "";

    var toutesRepondues = true;
    for (var i = 1; i <= totalQuestions; i++) {
        var questionName = "q" + i;
        var reponse = form[questionName].value;
        
        if (reponse === "") {
            toutesRepondues = false;
            break;
        }
    }
    
    if (!toutesRepondues) {
        alert("Veuillez répondre à toutes les questions avant de valider !");
        return;
    }
    

    for (var i = 1; i <= totalQuestions; i++) {
        var questionName = "q" + i;
        var reponse = form[questionName].value;
        var bonneReponse = bonnesReponses[i-1];
        
        if (reponse === bonneReponse) {
            score++;
        }
 
        corrections += "<p><strong>Question " + i + ":</strong> " + questions[i-1] + "<br>";
        if (reponse === bonneReponse) {
            corrections += "<span style='color: green;'>✓ Votre réponse est correcte !</span>";
        } else {
            corrections += "<span style='color: red;'>✗ Votre réponse est incorrecte.</span><br>";
            corrections += "<span style='color: green;'>Bonne réponse : " + reponsesCorrectes[i-1] + "</span>";
        }
        corrections += "</p>";
    }
    
    var noteSur20 = (score / totalQuestions) * 20;
    noteSur20 = noteSur20.toFixed(2); 
    
    document.getElementById("resultat").style.display = "block";
    
    var messageScore = "<p class='important'>Vous avez obtenu " + score + " bonnes réponses sur " + totalQuestions + "</p>";
    messageScore += "<p class='important'>Note : " + noteSur20 + " / 20</p>";
    
    if (noteSur20 >= 16) {
        messageScore += "<p style='color: green; font-size: 1.2em;'>Excellent ! Vous maîtrisez très bien la programmation web !</p>";
    } else if (noteSur20 >= 12) {
        messageScore += "<p style='color: orange; font-size: 1.2em;'>Bien ! Continuez vos efforts !</p>";
    } else if (noteSur20 >= 10) {
        messageScore += "<p style='color: orange; font-size: 1.2em;'>Passable. Il faudrait revoir certains concepts.</p>";
    } else {
        messageScore += "<p style='color: red; font-size: 1.2em;'>Il est nécessaire de réviser le cours !</p>";
    }
    
    document.getElementById("score").innerHTML = messageScore;
    document.getElementById("corrections").innerHTML = "<h4>Détail des corrections :</h4>" + corrections;
    

    document.getElementById("resultat").scrollIntoView({ behavior: 'smooth' });
}