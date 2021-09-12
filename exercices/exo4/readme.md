# Exercice 4

Grâce aux exercices précédents, vous avez pu voir

- La manipulation du `DOM` (selection, edition, suppression).
- La manipulation d'attribut/styles.
- La gestion des interactions (evenements).
  Cet exercice résume l'ensemble de ces techniques pour consolider votre maîtrise.

Pour cet exercice, la Créatrice n'as pas pu être travailler à cause du confinement, les fichiers étant sur son ordinateur de travail. Elle vous à donc envoyé une chanson en format `json`, un fichier `index.html` "vide" (avec les scripts et styles importés), et un fichier `style.css`

> 1. Ajoutez le titre de facon à avoir `<h1><small>auteur -</small> Titre de la chanson</h1>`
> 2. Créer une `div` avec la classe `paroles`.  
>    Ajoutez-y les couplets, englobés dans des paragraphes `<p>`.  
>    Chaque ligne doit être séparée par un `<br/>` qui permet de passer à la ligne suivante.
>    Le résultat doit ressembler à quelquechose comme:
>
>    ```html
>    <div class="paroles">
>      <p>
>        What is love?<br />
>        Baby, don't hurt me<br />
>        Don't hurt, me no more<br />
>        Baby, don't hurt me<br />
>        Don't hurt, me no more<br />
>        What is love? Yeah
>      </p>
>    </div>
>    ```
> 3. Ajoutez un `<footer>` avec un copyright `© Copyright 2020 - IUT` en bas de la page.
> 4. [_Optionnel_] Vous pouvez ajouter les interacteurs de l'exercice précédent.  
>   Pensez par contre que vous ne pouvez sélectionner les éléments qu'une fois qu'ils ont été ajoutés à la page.

::: Conseils

- Le but est de tout faire en js.
- Observez la structure de la donnée qui vous est fournie.
- N'hésitez pas a créer des fonctions et a structurer votre code pour simplifier la lecture de certaines opérations. Par exemple, une fonction qui permet de créer un couplet.
- References:
    - `firstElementChild`[<sup>ref</sup>](https://developer.mozilla.org/fr/docs/Web/API/ParentNode/firstElementChild) .
    - `document.getElementById("un_id")`[<sup>ref</sup>](https://developer.mozilla.org/fr/docs/Web/API/Document/getElementById).
    - `document.getElementsByClassName("nom_classe")`[<sup>ref</sup>](https://developer.mozilla.org/fr/docs/Web/API/Element/getElementsByClassName) ou `document.querySelectorAll(".nom_classe")`[<sup>ref</sup>](https://developer.mozilla.org/fr/docs/Web/API/Document/querySelectorAll)  
    **Attention, ces fonctions retournent un tableau.**
    - `parent.removeChild(enfant)`[<sup>ref</sup>](https://developer.mozilla.org/fr/docs/Web/API/Node/removeChild) afin de supprimer un élément `enfant` d'un élément `parent`.
    - `parent.appendChild(enfant)`[<sup>ref</sup>](https://developer.mozilla.org/fr/docs/Web/API/Node/appendChild) pour ajouter un element.  
    **Attention, appendChild n'accepte que des `Node`**.  
    - `document.createElement("div")`[<sup>ref</sup>](https://developer.mozilla.org/fr/docs/Web/API/Document/createElement) pour créer un `Element`[<sup>ref</sup>](https://developer.mozilla.org/fr/docs/Web/API/Element) (dans ce cas, un `div`)
    - `document.createTextNode("un texte")`[<sup>ref</sup>](https://developer.mozilla.org/fr/docs/Web/API/Document/createTextNode) pour créer un noeud de type `Text`[<sup>ref</sup>](https://developer.mozilla.org/fr/docs/Web/API/Text) contenant `un texte`.

:::

**Lors de l'éxecution, il peux vous afficher une erreur, re-executer à nouveau regle généralement le problème.**

@[Exercice 4]({"layout": "aside", "stubs": ["exo4/src/index.js", "exo4/src/index.html", "exo4/src/style.css", "exo4/src/chanson.js"], "command": "echo \"TECHIO> open -s /project/target/ exo4/src/index.html\"" })