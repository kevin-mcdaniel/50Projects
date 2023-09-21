
const btnAdd = document.getElementById('add');
const notes = JSON.parse(localStorage.getItem('notes'));
console.log(notes);
if(notes) {
    notes.forEach(note => addNewNote(note));
}

btnAdd.addEventListener('click', () => addNewNote());

function addNewNote(text=''){
    const note = document.createElement('div');
    note.classList.add('note');
    note.innerHTML = `
        <div class="tools">
            <button class="edit"><i class="fas fa-edit"></i></button>
            <button class="delete"><i class="fas fa-trash-alt"></i></button>
        </div>
    
        <div class="main ${text ? '' : 'hidden' }"></div>
        <textarea cols="30" rows="10" class="${text ? 'hidden' : ''}"></textarea>
    `;

    const editBtn = note.querySelector('.edit');
    const deleteBtn = note.querySelector('.delete');
    const elMain = note.querySelector('.main');
    const elTextarea = note.querySelector('textarea');

    elTextarea.value = text;
    elMain.innerHTML = marked(text);

    deleteBtn.addEventListener('click', () => {

        note.remove();
        updateLS();
    });

    editBtn.addEventListener('click', () => {
        elMain.classList.toggle('hidden')
        elTextarea.classList.toggle('hidden');
    });


    elTextarea.addEventListener('input', e => {
        const {value} = e.target;
        elMain.innerHTML = marked(value);

        updateLS();
    })
    document.body.appendChild(note);
}


function updateLS (){
    const notesText = document.querySelectorAll('textarea');
    const notes = [];
    notesText.forEach(note => {
        notes.push(note.value);
    });

    localStorage.setItem('notes', JSON.stringify(notes));
}