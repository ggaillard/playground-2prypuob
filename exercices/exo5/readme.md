# Exercice 5

Suite à un oubli de la part du créateur de l'exercice plusieurs erreurs n'ont pas été corrigés sur la page.

Il en revient à vous pour corriger les erreurs qui y sont glissés.

**Remarque :** Le fichier `index.html` est en lecture seule et n'est affiché qu'à titre indicatif. Vous ne pouvez agir sur ce fichier qu'en javascript.  
Les exercices 5, 6, 7, 8 sont les mêmes que les exercices 1, 2, 3, 4. Sauf qu'au lieu d'utiliser les fonctions de selections natifs, nous utiliserons les fonctionnalités de [D3](https://d3js.org/)

> 1. Selectionnez le titre et modifiez son contenu en `Rick Astley - Never Gonna Give You Up` en utilisant`d3.select`.
> 2. Sélectionnez tous les éléments possèdant la classe `couplet` et supprimer la première ligne qui est en double.  
>    _N'oubliez pas de supprimer le `<br />` qui cause le retour à la ligne_
> 3. Le refrain s'est dupliqué à cause de l'écho. Supprimez les occurences en double.  
>    _N'oubliez pas de supprimer le `<br />` qui cause le retour à la ligne_
> 4. Maintenant que toutes les erreurs ont été corrigées, supprimer l'élément ayant pour id `erreur`
> 5. Ajoutez en bas de la page (dernier element de `<body>`), un `<footer>` contenant `© Copyright 2020 - Nom`

::: Conseils

- d3 suit une logique differente que celle de la manipulation de DOM en natif. Inspirez vous des commentaires dans l'`index.js`
- Utilisez `d3.select("balise")` pour sélectionner un element.
- Utilisez `d3.select("#un_id")`[<sup>ref</sup>](https://github.com/d3/d3-selection#select) pour récuperer un élément ayant pour id `un_id`.
- Pour sélectionner tous les éléments qui possèdent une classe, utilisez `d3.selectAll(".nom_classe")`[<sup>ref</sup>](https://github.com/d3/d3-selection#select)
  **Attention, ces fonctions retournent un tableau.**
- Dans le cas où vous n'arrivez pas effectuer une operation avec d3, vous pouvez récuperer l'`Element` d'un objet d3 "`selection`" en utilisant  `selection.node()`[<sup>ref</sup>](https://github.com/d3/d3-selection#selection_node)
- Utilisez `selection.remove()`[<sup>ref</sup>](https://github.com/d3/d3-selection#selection_remove) pour supprimer les elements sélectionnés.
- Faites attention lorsque vous modifiez les elements d'une liste lors de son parcours.
- Utilisez `selection.append(enfant)`[<sup>ref</sup>](https://github.com/d3/d3-selection#selection_append) pour créer un element et l'ajouter à la selection.  
  **Attention, appendChild n'accepte que des `Node`**. Il faut donc les créer, ce qui peut se faire avec `d3.create()`[<sup>ref</sup>](https://github.com/d3/d3-selection#create) pour créer un `Element` et `document.createTextNode("un texte")`[<sup>ref</sup>](https://developer.mozilla.org/fr/docs/Web/API/Document/createTextNode) pour créer un noeud de type `Text` contenant `un texte`.

:::

**Lors de l'éxecution, il peux vous afficher une erreur, re-executer à nouveau regle généralement le problème.**

@[Exercice 5]({ "layout": "aside", "stubs": ["exo5/src/index.js", "exo5/read-only/index.html"], "command": "echo \"TECHIO> open -s /project/target/ exo5/src/index.html\"" })
