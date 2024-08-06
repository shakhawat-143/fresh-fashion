let counter = document.querySelectorAll(".counter")
let arr = Array.from(counter)

arr.map((item)=>{
    let count = 0

    function CounterUp(){
        count++
        item.innerHTML = count
        if(count == item.dataset.number){
            clearInterval(stop);
        }
    }
    let stop = setInterval(
        function(){
            CounterUp();
        },100/item.dataset.speed
    );
})







