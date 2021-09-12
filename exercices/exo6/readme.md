## Exercice 6

Cette fois, les paroles ont correctement été ajoutés. Mais ne parlant pas anglais, il n'as pas mis les bonnes couleurs à la chanson.

**Remarque :** Comme pour l'exercice précédent, toute modification des fichiers `index.html` et `style.css` sera ignorée. Les deux fichier sont présents à titre indicatif.

> 1. Supprimez la classe `red`.
> 2. Mettez en italique tous les refrains.
> 3. La couleur de la classe `blue` est trop forte, trouvez un moyen de mettre une couleur blue plus douce (`#8A2BE2`, `#6495ED` par exemple).
> 4. Avez vous réussi a ne pas laisser d'espaces blancs entre chaque paragraphe ?

::: Conseils

- Utilisez la fonction `selection.classed()`[<sup>ref</sup>](https://github.com/d3/d3-selection#selection_classed) d'une `selection` afin d'ajouter ou supprimer les classes.
- Vous ne pouvez pas modifier le css, mais vous pouvez ajouter l'attribut `selection.style()`[<sup>ref</sup>](https://github.com/d3/d3-selection#selection_style)
- Il y a un moyen d'ajouter la couleur d'arrière plan à l'ensemble des `paroles`... .

:::

**Lors de l'éxecution, il peux vous afficher une erreur, re-executer à nouveau regle généralement le problème.**

@[Exercice 6]({"layout": "aside", "stubs": ["exo6/src/index.js", "exo6/read-only/index.html", "exo6/read-only/style.css"], "command": "echo \"TECHIO> open -s /project/target/ exo6/src/index.html\"" })
