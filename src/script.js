const refs = {
    controls: document.querySelector('[data-controls]'),
    pane: document.querySelector('[data-panes]')
}

refs.controls.addEventListener('click', onControlsClick)

function onControlsClick(e){
    
    e.preventDefault();

    if(e.target.nodeName !== 'A'){
        return
    }

    const currentSituation = refs.controls.querySelector('.controls__item--active')

    if(currentSituation){
        currentSituation.classList.remove('controls__item--active')
    }

    e.target.classList.add('controls__item--active')

    const pane = document.querySelector(`${e.target.hash}`)

    const currentPaneSituation = refs.pane.querySelector('.pane--active')

    if(currentPaneSituation){
        currentPaneSituation.classList.remove('pane--active')
    }

    pane.classList.add('pane--active')

}