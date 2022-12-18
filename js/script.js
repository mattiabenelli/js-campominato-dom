
function createGridSquare(number){
    const elemento = document.createElement('div');
    elemento.classList.add('square')
    elemento.innerHTML += number;
    return elemento;
}
function bombsArrayGenerator(min, max){
    let bombs = [];
    let i = 0;
    while(i < 16){
        let number = Math.floor(Math.random() * (max - min + 1)) + min;
        if(!bombs.includes(number)){
            bombs.push(number);
            i++;
        }
    }
    return bombs;
}


let grid = document.getElementById('grid');
let start = document.getElementById('btn');
let arrayBombs = [];
let goodCells = 0;

start.addEventListener('click',function(){
    document.querySelector('.grid').innerHTML = '';
    let mode = document.getElementById('difficulty').value
    console.log(mode)
    
    if(mode == 'facile'){
        arrayBombs = bombsArrayGenerator (1,100)
        console.log(arrayBombs) 
        
        for(let i=1; i<=100; i++){


            const currentSquare = createGridSquare(i);
            grid.appendChild(currentSquare);
            
            currentSquare.addEventListener('click',function(){
                this.classList.add('clicked');
                goodCells++
                if(arrayBombs.includes(parseInt(this.innerText))){
                    this.classList.add('bomb');
                    grid.classList.add('events-none');
                    goodCells--
                    const cell = document.getElementsByClassName('square')
                    for(let i=0; i<100; i++){
                        let element = cell[i]
                        if(arrayBombs.includes(parseInt(element.innerText))){
                            element.classList.add('clicked')
                            element.classList.add('bomb');
                        }
                    }
                    alert(`hai preso la bomba ${this.innerText} e hai fatto un punteggio di ${goodCells} `) 
                }
                console.log(this.innerText)
            })
        }
    }
    else if(mode == 'intermedio'){
        arrayBombs = bombsArrayGenerator (1,81)
        console.log(arrayBombs) 
        for(let i=1; i<=81; i++){

            const currentSquare = createGridSquare(i);
            currentSquare.classList.add('intermedio')
            grid.appendChild(currentSquare);
            
            currentSquare.addEventListener('click',function(){
                this.classList.add('clicked');
                if(arrayBombs.includes(parseInt(this.innerText))){
                    this.classList.add('bomb');
                    grid.classList.add('events-none');
                    const cell = document.getElementsByClassName('square')
                    for(let i=0; i<100; i++){
                        let element = cell[i]
                        if(arrayBombs.includes(parseInt(element.innerText))){
                            element.classList.add('clicked')
                            element.classList.add('bomb');
                        }
                    }
                    alert(`hai preso la bomba ${this.innerText} e hai fatto un punteggio di ${goodCells} `) 
                }
                console.log(this.innerText)
            })
        }
    }
    else if(mode == 'difficile'){
        arrayBombs = bombsArrayGenerator (1,49)
        console.log(arrayBombs) 
        for(let i=1; i<=49; i++){

            const currentSquare = createGridSquare(i);
            currentSquare.classList.add('difficile')
            grid.appendChild(currentSquare);
            
            currentSquare.addEventListener('click',function(){
                this.classList.add('clicked');
                if(arrayBombs.includes(parseInt(this.innerText))){
                    this.classList.add('bomb');
                    grid.classList.add('events-none');
                    const cell = document.getElementsByClassName('square')
                    for(let i=0; i<100; i++){
                        let element = cell[i]
                        if(arrayBombs.includes(parseInt(element.innerText))){
                            element.classList.add('clicked')
                            element.classList.add('bomb');
                        }
                    }
                    alert(`hai preso la bomba ${this.innerText} e hai fatto un punteggio di ${goodCells} `) 
                }
                console.log(this.innerText)
            })
        }
    }
})