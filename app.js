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
const notearray=[{title : "note1", body:"this is bost"}]
    
window.addEventListener('load', createNoteList(notearray))

function noteListTemplate(title){
    return html=`
    <li>${title}</li>`

}

function createNoteList(arr){
    const noteDiv=document.querySelector('#notes-list')
    for (const note of arr){
        noteDiv.insertAdjacentHTML('beforeend',noteListTemplate(note.title))
    }
}