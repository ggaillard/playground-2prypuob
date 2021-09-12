## Exercice 2

Cette fois, les paroles ont correctement été ajoutés. Mais ne parlant pas anglais, il n'as pas mis les bonnes couleurs à la chanson.

**Remarque :** Comme pour l'exercice précédent, toute modification des fichiers `index.html` et `style.css` sera ignorée. Les deux fichier sont présents à titre indicatif.

> 1. Supprimez la classe `red`.
> 2. Mettez en italique tous les refrains.
> 3. La couleur de la classe `blue` est trop forte, trouvez un moyen de mettre une couleur blue plus douce (`#8A2BE2`, `#6495ED` par exemple).
> 4. Avez vous réussi a ne pas laisser d'espaces blancs entre chaque paragraphe ?

::: Conseils

- Utilisez l'attribut `classList`[<sup>ref</sup>](https://developer.mozilla.org/fr/docs/Web/API/Element/classList) d'un element afin de manipuler les classes de cet objet.
- Vous ne pouvez pas modifier le css, mais vous pouvez ajouter l'attribut `style`[<sup>ref</sup>](https://developer.mozilla.org/fr/docs/Web/HTML/Attributs_universels/style) en utilisant `setAttribute()`[<sup>ref</sup>](https://developer.mozilla.org/fr/docs/Web/API/Element/setAttribute) par exemple.  
  _Il est aussi possible de directement manipuler les styles via une API[<sup>ref</ref>](https://developer.mozilla.org/fr/docs/Web/API/HTMLElement/style)_.
- Il y a un moyen d'ajouter la couleur d'arrière plan à l'ensemble des `paroles`... .

:::

**Lors de l'éxecution, il peux vous afficher une erreur, re-executer à nouveau regle généralement le problème.**

@[Exercice 2]({"layout": "aside", "stubs": ["exo2/src/index.js", "exo2/read-only/index.html", "exo2/read-only/style.css"], "command": "echo \"TECHIO> open -s /project/target/ exo2/src/index.html\"" })
