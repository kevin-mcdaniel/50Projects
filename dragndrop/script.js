const elFill = document.querySelector('.fill');
const elEmpties = document.querySelectorAll('.empty')

elFill.addEventListener('dragstart', dragStart);
elFill.addEventListener('dragend', dragEnd);

for(const empty of elEmpties){
    empty.addEventListener('dragover', dragOver);
    empty.addEventListener('dragenter', dragEnter);
    empty.addEventListener('dragleave', dragLeave);
    empty.addEventListener('drop', dragDrop);
}

function dragStart(){
    console.log('drag start')
    this.classList.add('hold');
    setTimeout(() => this.className = 'invisible', 0)
    
}

function dragEnd(){
    console.log('drag end')
    this.className = 'fill'
    this.classList.remove('hold');
}

function dragOver(e){
    e.preventDefault();
    console.log('drag over')
    
}

function dragEnter(e){
    e.preventDefault();
    console.log('drag enter')
    this.classList.add('hovered')
}

function dragLeave(){
    console.log('drag leave')
    this.classList.remove('hovered')
}


function dragDrop(){
    console.log('drag drop')
    this.className = 'empty';
    this.append(elFill);
}