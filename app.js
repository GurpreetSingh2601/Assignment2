const themeChange = document.querySelector('#dark')

themeChange.addEventListener('click', () =>{
    document.body.classList.toggle('dark')
})
function theme_button(){
    
    if (document.getElementById("dark").innerHTML==="dark_mode"){
        document.getElementById("dark").innerHTML="light_mode";
    }
    else {
        document.getElementById("dark").innerHTML="dark_mode";
    }

}
const notesArray=[]

function defineNoteWritingSection(){
    html= `
    <div id ="note-area">
    <div id ="note" contenteditable ="true"></div>
    <button onclick="saveNote()">save</button>
    <button onclick="cleanUp()">cancel</button>
    </div>`
    return html
}
function createContentWritingArea(){
    const div= document.querySelector('#content')
    div.insertAdjacentHTML('beforeend', defineNoteWritingSection())
    setCursor()
}
function setCursor(){
    const div=document.querySelector('#note')
    div.focus()
}
function saveNote(){
    const div=document.querySelector('#note')
    const title=div.firstChild.textContent
    const body=convertDivstoString()
    notesArray.push(createNote(title,body))
    cleanUp()
}
function createNote(title,body){
    return {title,body}
}

function convertDivstoString(){
    let str=""
    const divs=[...document.querySelectorAll('[contenteditable] > div:not(:first-child)')]
    for (const i of divs){
        str += `${i.textContent}\n`
    }
    return str
}

function cleanUp(){
    const div =document.querySelector('#note-area')
    div.remove()
}
const noteArray=[{title : "note1", body:"this is bost"}]

const noteList=document.querySelector('#notes-list')

    
window.addEventListener('load', createNoteList(noteArray))


function noteListTemplate(title){
    return html=`
    <li>${title}</li>`

}

function displayNoteTemplate(note){
    const{title,body}=note
    return html=`
    <div id="note">
    <h2>${title}</h2>
    <p>${body}</p>
    <button onclick="removeNote()">close note</button>
    </div>
    `
    
}


function createNoteList(arr){
    const noteDiv=document.querySelector('#notes-list')
    for (const note of arr){
        noteDiv.insertAdjacentHTML('beforeend',noteListTemplate(note.title))
    }
}

function displayNote(title, arr){
    return note = arr.find(n=>n.title===title)
}

function removeNote(){
    const note = document.querySelector('#note')
    note.remove()
}
noteList.addEventListener('click', (e) =>{
    const noteDisplayArea= document.querySelector('#note-display')
    const title=e.target.textContent
    const note = displayNote(title, noteArray)
    noteDisplayArea.insertAdjacentHTML('beforeend', displayNoteTemplate(note))

})