# Exercice 3

Après avoir été rappelé à l'ordre, la créatrice à correctement rempli la page et le css. Par contre, elle n'as pas réussi à mettre en place les evènements; elle ne sait pas faire de `js`.
Ayant entendu parlé de vous, elle vous délègue cette tache, ayant même pris soin de permettre la modification de ses fichiers pour que ce soit plus facile.

_Remarque_ : Il n'y a normalement pas besoin de modifier `index.html` et `style.css`, ils sont modifiables afin que vous puissiez ajouter des interactions et décorations supplémentaires.

> 1. Lorsque la boite "Masquer les paroles" est cochée, masquez tout les paroles et modifiez l'intitulé en "Afficher les paroles"  
>    ![Exemple avec les paroles masquées](images/paroles_masques.png 'Exemple avec paroles masquées')
> 2. Lorsque la boite "Masquer les refrains" est cochée, _remplacez_ tous les refrains **sauf le premier** par `[Refrain]`, et modifiez l'intitulé de la boite en "Afficher les refrains"  
>    ![Exemple avec les paroles masquées](images/refrains_masques.png 'Exemple avec paroles masquées')
> 3. Lorsque les refrains sont masqués. Le du survol de `[Refrain]` affiche le contenu du refrain :
>    ![Exemple avec les paroles masquées](images/refrains_hover.gif 'Exemple de survol de [Refrain]')

::: Conseils

- Si quand les cases sont cochées les éléments sont masquées avec succes, mais rappellez vous qu'il doit aussi être possible de les afficher à nouveau.
- Utilisez `selection.on()`[<sup>ref</sup>](https://github.com/d3/d3-selection#selection_on) pour attacher une évènement à un element.
- Utilisez l'évènement `click` pour savoir quand la case est cochée.  
  Pour connaitre l'état de la case (cochée ou non), utiliser l'attribut `checked`[<sup>ref</sup>](https://developer.mozilla.org/fr/docs/Web/HTML/Element/Input/checkbox#checked).
- Utilisez l'évènement `mouseenter`[<sup>ref</sup>](https://developer.mozilla.org/fr/docs/Web/API/Element/mouseenter_event) pour savoir quand la souris survole l'element et `mouseleave`[<sup>ref</sup>](https://developer.mozilla.org/fr/docs/Web/API/Element/mouseleave_event) pour savoir quand la souris ne le survole plus.
- Vous avez du mal à masquer les elements ? La classe `hidden` n'est pas là par hasard.
- Notez que `[Refrain]` est déjà présent dans `index.html`, peut être qu'il est possible de les _remplacer_ seulement de manière visuelle (sans avoir a supprimer du texte).

:::

**Lors de l'éxecution, il peux vous afficher une erreur, re-executer à nouveau regle généralement le problème.**

@[Exercice 7]({"layout": "aside", "stubs": ["exo7/src/index.js", "exo7/src/index.html", "exo7/src/style.css"], "command": "echo \"TECHIO> open -s /project/target/ exo7/src/index.html\"" })