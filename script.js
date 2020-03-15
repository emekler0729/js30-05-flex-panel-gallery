const panels = document.querySelectorAll('.panel');

function toggleOpen() {
    this.classList.toggle('open');
}

function toggleActive(e) {
    if(e.propertyName.includes('flex')) {
        this.classList.toggle('openactive');
    }
}

panels.forEach(panel => panel.addEventListener('click', toggleOpen));
panels.forEach(panel => panel.addEventListener('transitionend', toggleActive));