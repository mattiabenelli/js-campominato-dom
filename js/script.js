
function createGridSquare(number){
    const elemento = document.createElement('div');
    elemento.classList.add('square')
    elemento.innerHTML += number;
    return elemento;
}

let grid = document.getElementById('grid');
let start = document.getElementById('btn');

start.addEventListener('click',function(){
    document.querySelector('.grid').innerHTML = '';
    let mode = document.getElementById('difficulty').value
    console.log(mode)
    if(mode == 'facile'){
        for(let i=1; i<=100; i++){

            const currentSquare = createGridSquare(i);
            grid.appendChild(currentSquare);
            
            currentSquare.addEventListener('click',function(){
                this.classList.toggle('clicked');
                console.log(this.innerText)
            })
        }
    }
    else if(mode == 'intermedio'){
        for(let i=1; i<=81; i++){

            const currentSquare = createGridSquare(i);
            currentSquare.classList.add('intermedio')
            grid.appendChild(currentSquare);
            
            currentSquare.addEventListener('click',function(){
                this.classList.toggle('clicked');
                console.log(this.innerText)
            })
        }
    }
    else if(mode == 'difficile'){
        for(let i=1; i<=49; i++){

            const currentSquare = createGridSquare(i);
            currentSquare.classList.add('difficile')
            grid.appendChild(currentSquare);
            
            currentSquare.addEventListener('click',function(){
                this.classList.toggle('clicked');
                console.log(this.innerText)
            })
        }
    }
})