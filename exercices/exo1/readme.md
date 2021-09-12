# Exercice 1

Suite à un oubli de la part du créateur de l'exercice plusieurs erreurs n'ont pas été corrigés sur la page.

Il en revient à vous pour corriger les erreurs qui y sont glissés.

**Remarque :** Le fichier `index.html` est en lecture seule et n'est affiché qu'à titre indicatif. Vous ne pouvez agir sur ce fichier qu'en javascript.

> 1. Selectionnez le premier fils de l'élèment `body` et modifiez son contenu en `Rick Astley - Never Gonna Give You Up`.
> 2. Sélectionnez tous les éléments possèdant la classe `couplet` et supprimer la première ligne qui est en double.  
>    _N'oubliez pas de supprimer le `<br />` qui cause le retour à la ligne_
> 3. Le refrain s'est dupliqué à cause de l'écho. Supprimez les occurences en double.  
>    _N'oubliez pas de supprimer le `<br />` qui cause le retour à la ligne_
> 4. Maintenant que toutes les erreurs ont été corrigées, supprimer l'élément ayant pour id `erreur`
> 5. Ajoutez en bas de la page (dernier element de `<body>`), un `<footer>` contenant `© Copyright 2020 - Nom`

::: Conseils

- Utilisez `firstElementChild`[<sup>ref</sup>](https://developer.mozilla.org/fr/docs/Web/API/ParentNode/firstElementChild) pour sélectionner le premier `Element` d'un Node.
- Utilisez `firstChild`[<sup>ref</sup>](https://developer.mozilla.org/fr/docs/Web/API/Node/firstChild) pour sélectionner le premier `Node` d'un Node.
- Utilisez `childNodes`[<sup>ref</sup>](https://developer.mozilla.org/fr/docs/Web/API/Node/childNodes) pour sélectionner les sous-`Node`s d'un Node.
- Utilisez `document.getElementById("un_id")`[<sup>ref</sup>](https://developer.mozilla.org/fr/docs/Web/API/Document/getElementById) pour récuperer un élément ayant pour id `un_id`.
- Pour sélectionner tous les éléments qui possèdent une classe, utilisez `document.getElementsByClassName("nom_classe")`[<sup>ref</sup>](https://developer.mozilla.org/fr/docs/Web/API/Element/getElementsByClassName) ou `document.querySelectorAll(".nom_classe")`[<sup>ref</sup>](https://developer.mozilla.org/fr/docs/Web/API/Document/querySelectorAll)  
  **Attention, ces fonctions retournent un tableau.**
- Utilisez `parent.removeChild(enfant)`[<sup>ref</sup>](https://developer.mozilla.org/fr/docs/Web/API/Node/removeChild) afin de supprimer un élément `enfant` d'un élément `parent`.
- Faites attention lorsque vous modifiez les elements d'une liste lors de son parcours.
- Utilisez `parent.appendChild(child)`[<sup>ref</sup>](https://developer.mozilla.org/fr/docs/Web/API/Node/appendChild) pour ajouter un element.  
  **Attention, appendChild n'accepte que des `Node`**. Il faut donc les créer, ce qui peut se faire avec `document.createElement()`[<sup>ref</sup>](https://developer.mozilla.org/fr/docs/Web/API/Document/createElement) pour créer un `Element` et `document.createTextNode("un texte")`[<sup>ref</sup>](https://developer.mozilla.org/fr/docs/Web/API/Document/createTextNode) pour créer un noeud de type `Text` contenant `un texte`.

:::

**Lors de l'éxecution, il peux vous afficher une erreur, re-executer à nouveau regle généralement le problème.**

@[Exercice 1]({ "layout": "aside", "stubs": ["exo1/src/index.js", "exo1/read-only/index.html"], "command": "echo \"TECHIO> open -s /project/target/ exo1/src/index.html\"" })
