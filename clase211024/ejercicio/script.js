document.getElementById('lista').addEventListener('submit', (e) => {
    e.preventDefault();
    const tareaInput = document.getElementById('tarea');
    const nuevaTarea = tareaInput.value.trim();

    if (nuevaTarea) {
        console.log(`Agregando tarea: ${nuevaTarea}`); 
        agregarTarea(nuevaTarea);
        tareaInput.value = '';
    }
});

const agregarTarea = (tarea) => {
    const listaTareas = document.getElementById('lista-tareas');
    const li = document.createElement('li');
    li.textContent = tarea;
    console.log(`Nueva tarea: ${tarea}`); 
    
    const botonEliminar = document.createElement('button');
    botonEliminar.textContent = 'Eliminar';
    botonEliminar.addEventListener('click', () => {
        console.log(`Eliminando tarea: ${tarea}`); 
        listaTareas.removeChild(li);
    });

    li.appendChild(botonEliminar);
    listaTareas.appendChild(li);
}