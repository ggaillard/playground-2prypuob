const checkboxParoles = document.querySelector('#masquer-paroles');
const checkboxLabel = checkboxParoles.parentElement

const divParoles = document.querySelector('#paroles'); //

checkboxParoles.addEventListener('click', function (event) {
  if (event.target.checked) {
      divParoles.classList.add('hidden');
      checkboxLabel.lastChild.remove()
      checkboxLabel.appendChild(document.createTextNode("Afficher les paroles"))
  } else {
    divParoles.classList.remove('hidden');
    checkboxLabel.lastChild.remove()
    checkboxLabel.appendChild(document.createTextNode("Masquer les paroles"))
  }
});


const $checkboxRefrain = document.querySelector('#masquer-refrains')
const $refrainLabel = $checkboxRefrain.parentElement

const $refrains = document.querySelectorAll('.refrain')

$checkboxRefrain.addEventListener('click', function(event){

    $refrains.forEach(function($refrain, index){
        if(index !== 0){
            if (event.target.checked) {
                $refrain.querySelector('.definition').classList.remove('hidden')
                $refrain.querySelector('.contenu').classList.add('hidden')
            } else {
                $refrain.querySelector('.definition').classList.add('hidden')
                $refrain.querySelector('.contenu').classList.remove('hidden')
            }
        }
    })

  if (event.target.checked) {
    $refrainLabel.lastChild.remove()
    $refrainLabel.appendChild(document.createTextNode("Afficher les paroles"))
  } else {
    $refrainLabel.lastChild.remove()
    $refrainLabel.appendChild(document.createTextNode("Masquer les paroles"))
  }
})

$refrains.forEach(function($refrain){
    $refrain.addEventListener('mouseenter', function(){
        $refrain.querySelector('.contenu').classList.remove('hidden')
    })

    $refrain.addEventListener('mouseleave', function(){
        if(!$refrain.querySelector('.definition').classList.contains('hidden')){
            $refrain.querySelector('.contenu').classList.add('hidden')
        }
    })
})
