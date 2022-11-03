function projectSwitch (projectPage, titleProject, projnum) {
    document.getElementById("projectContent").innerHTML = projectPage;
    document.getElementById("TitleProject").innerHTML = titleProject;
    currProj = projnum;
}
function scrollTopDiv() {
    var divElement = document.getElementById("projectContent");
    divElement.scroll({
        top: 0,//scroll to the bottom of the element
        behavior: 'auto' //auto, smooth, initial, inherit
    });
}

var button;
var currProj=0;
console.log(currProj);
document.addEventListener('keydown', function(e){
    if(e.key === 'w'){
        var button = document.getElementById("proj" + (currProj -1));
        button.click();
        console.log(currProj);
    }
    else if(e.key === 's'){
    var button = document.getElementById("proj" + (currProj +1));
    button.click();
    console.log(currProj);
}
  });


var project1Page = ("\
<div>\
<h2>Mijn eerste project/game. </h2>\
<img src=\"/images/projectcontent/pong.png\" alt=\"image project\" style=\"width: 80%;\"> </br>\
<p style=\"color:rgba(0, 0, 0, 0.5);\"> ^ Schermafbeelding van wereld design (Gemaakt in Unity) ^ </p>\
<h4>Mijn Voortgang</h4>\
<p>Pong was mijn eerste project. We kregen de basisinleiding in C# en in de lessen legde de leraar uit hoe je een bewegende bal moest coderen.\
Daarna werd ons uitgelegd hoe we het konden laten stuiteren door materialen te gebruiken in plaats van het laten stuiteren door een botsing met een object te coderen.\
Daarna leerden we hoe we gebruikersinvoer konden gebruiken om objecten te verplaatsen en ze op bepaalde punten te laten stoppen.\
We moesten ook audio afspelen bij elke botsing van de bal. \
We mochten met het project doen waar we zin in hadden, zoals een spoor maken. Dit moest je wel zelf uitzoeken. \
Ook mocht je de bal bij elke stuit sneller laten gaan, maar net als het spoor was dat optioneel. \
Al met al was dit spel een groot ding voor mij. Het deed me beseffen hoe leuk ik coderen vond. \
Als ik nu terugkijk op het project denk ik aan veel manieren om het te verbeteren, wat geweldig voelt omdat het een teken is dat mijn vaardigheden zijn verbeterd. </p>\
<h4>De game zelf</h4>\
<p>-Het spel is voor 2 spelers, één aan elke kant.</br>\
-Speler één beweegt het pedaal links met W (omhoog) en S (omlaag).</br>\
-Speler twee beweegt het pedaal rechts met Pijl omhoog en Pijl omlaag.</br>\
<br>\
De bedoeling is om de bal naar de andere speler te stuiteren en de ander de bal te laten missen.</br>\
Als de andere speler de bal mist, en hij komt voorbij hen, krijg je een punt en wordt de bal opnieuw in het midden geplaatst.</br>\
Het spel heeft geen einde, dus het is eindeloos, en het wordt ook niet moeilijker.</p>\
<a class=\"btn btn-dark\" href=\"../indexNE.html\" role=\"button\">Ga Naar Home Pagina</a>\
</div>\
");
var project2Page = ("\
<div>\
<h2>Mijn eerste 3d wereld/game</h2>\
<img src=\"/images/projectcontent/3dleveldesign.png\" alt=\"image project\" style=\"width: 80%;\"> </br>\
<p style=\"color:rgba(0, 0, 0, 0.5);\"> ^ Schermafbeelding van wereld design (Gemaakt in Unity) ^ </p>\
<h4>Mijn Voortgang</h4>\
<p>Dit was de eerste keer dat ik in 3D werkte. We moesten een level ontwerpen voor een FPS spel. We mochten copyright vrije texturen gebruiken.\
Met behulp van unity's landscaping functie, maakte ik een berggebied met sneeuw en verschillende texturen.\
Ik wilde ook water en dorpen toevoegen, maar ik had niet genoeg tijd en ik wilde geen water dat gewoon een foto is.\
Ik heb wel geprobeerd het terrein eruit te laten zien als een gigantisch mesachtig object dat het diagonaal doorsnijdt met schroeiplekken.\
Persoonlijk vond ik deze opdracht niet leuk, omdat het alleen landscaping was en het gebruik van andermans texturen/prefabs (voor huizen).\
</p>\
<a class=\"btn btn-dark\" href=\"../indexNE.html\" role=\"button\">Ga Naar Home Pagina</a>\
</div>\
");
var project3Page = ("\
<div>\
<h2>Mijn eerste persoonlijke 2D Game</h2>\
<img src=\"/images/projectcontent/gameAmbitie.png\" alt=\"image project\" style=\"width: 80%;\"> </br>\
<p style=\"color:rgba(0, 0, 0, 0.5);\"> ^ Schermafbeelding van mijn test level (Gemaakt in Unity) ^ </p>\
<h4>Eerst extra info</h4>\
<p>Ik heb een half jaar aan dit project gewerkt, omdat ik er tijdens volgende projecten meer aan wilde werken.</br>\
Omdat ik er verder aan werkte, heb ik geen oudere screenshots.</p>\
<h4>Mijn voortgang</h4>\
<p>Dit project was het eerste project waar we alles mochten maken wat we wilden. Ik begon ideeën te bedenken en maakte uiteindelijk een 2D platformer met krachten. \
Zo kon ik leren hoe ik getimede cooldowns kan maken en particles kan gebruiken. Toen ik een basis/test wereld had gemaakt, volgde ik een tutorial over basisbewegingen. \
In eerdere projecten moesten we vaak transform.position gebruiken. Door deze tutorial te volgen, leerde ik meer over velocity en hoeveel beter dat is. \
Dus zodra ik de beweging onder de knie had, begon ik te werken aan mijn eerste vaardigheid. Double Jump. Ik bewerkte wat dingen in mijn bewegingsscript, zodat ik twee keer kon springen als ik de grond raakte. \
Na de dubbele sprong, maakte ik een kloonvaardigheid. Je kon een kloon oproepen die 10 seconden bleef, en daarna kon je hem weer in spawnen. \
Daarna maakte ik een dash kracht en kort daarna een schild kracht. De dash stuurt je vooruit in de richting die je in keek met een bepaalde snelheid. \
De schild kracht zou een transparant blauw vierkant over de speler laden, waaruit blijkt dat je het schild hebt geactiveerd. Elke vaardigheid had zijn eigen duur (als ze die hadden) en cooldown. \
Daarna maakte ik een laser die de speler zou vernietigen bij contact, behalve als je het schild actief had. Toen maakte ik een teleportatie muur. \
Als je op de juiste knop drukte, ging je door de muur naar de andere kant, met behoud van je Y-positie (en later je X-positie als ik een horizontale teleportatiemuur maakte). \
Vervolgens maakte ik zichtbare cooldown animaties met alleen Unity's canvas. Het had een fill-functie en ik liet de cooldowns de hoeveelheid fill veranderen afhankelijk van de cooldown duur. \
Ik liet het schild ook zichtbaar de cooldown opladen, zodat je kon zien hoe lang je nog had tot de cooldown.\
Daarna voegde ik een doodsanimatie toe, waarbij de speler gewoon verdween en er partikels verschenen. je cooldowns worden dan ook op 0 gezet . \
en je bleef 5 seconden op de plaats waar je stierf kijken. Daarna heb ik partikels toegevoegd voor de lasers als je erin ging met een schild. \
De deeltjes zouden bovenop de speler verschijnen en niet door de hele laser heen. Ik heb wel partikels toegevoegd die in de lasers zitten, maar die waren een stuk minder 'intensief'. \
Ik voegde dash partikles en schild destructie partikels toe, en ook een kloon partikle\
Vervolgens voegde ik Power-ups toe die je kon oppakken en een paar keer kon stapelen (er was een limiet aan hoeveel je er tegelijk kon gebruiken). \
Er was een snelheid Power Up en een spring hoogtte Power Up. Daarna voegde ik vijanden toe die in een bepaald gebied rondliepen en alleen konden worden vernietigd door er tegenaan te dashen. \
De vijanden zouden een paar seconden na hun vernietiging opnieuw verschijnen. Daarna voegde ik een tutorial level en checkpoints toe, zodat als je zou sterven je bij het checkpoint zou spawnen. \
Daarna was ik eigenlijk klaar, dus maakte ik een menu waar je elke cooldown/lengte waarde kon aanpassen, evenals standaard waarden zoals snelheid of spronghoogte. \
Ik voegde ook een levelsysteem toe, zodat je het tutoriallevel moest uitspelen, en dan kon je naar het zandbak/testlevel. Ik heb nooit echt andere levels toegevoegd, en ik ben ook niet van plan om er meer toe te voegen.</p>\
<h2>Wat heb ik geleerd door dit project?</h2>\
<p> -Partikels</br>\
    -Cooldowns</br>\
    -PowerUps</br>\
    -krachten</br>\
    -bewegende vijanden</br>\
    -een menu met werkende settings</br></p>\
<a class=\"btn btn-dark\" href=\"../indexNE.html\" role=\"button\">Ga Naar Home Pagina</a>\
</div>\
");
var project4Page = ("\
<div>\
<h2>Eerste Keer Blender Gebruiken</h2>\
<img src=\"/images/projectcontent/RenderBlikje.png\" alt=\"image project\" style=\"width: 80%;\"> </br>\
<p style=\"color:rgba(0, 0, 0, 0.5);\"> ^ Rendered foto (Gemaakt in Blender) ^ </p>\
<h4>Mijn voortgang</h4>\
<p>Dit blender blikje was het eerste ding dat ik ooit heb gemaakt met Blender. Ik maakte een textuur en plaatste die op dit blikje dat ik maakte naar aanleiding van een tutorial. \
Het is niet zo interessant, en het heeft niets te maken met coderen, dus ik zal het kort houden. We moesten een blikje maken gebaseerd op alles wat je wilden.\
Ik heb de mijne gebaseerd op een spel genaamd Genshin Impact. Ik wilde over blender praten omdat het misschien nuttig is voor spelontwikkelaars om een paar 3d sprites te kunnen maken \
wat ik kan. Het kan nuttig zijn als ik ooit tijdelijke sprites nodig heb.</p>\
<a class=\"btn btn-dark\" href=\"../indexNE.html\" role=\"button\">Ga Naar Home Pagina</a>\
</div>\
");
var project5Page = ("\
<div>\
</br>\
<h1>Komt binnenkort?</h1>\
</div>\
");
