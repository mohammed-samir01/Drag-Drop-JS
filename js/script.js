let inp = document.getElementById('inp');
let btn = document.getElementById('btn');
let boxs = document.querySelectorAll('.box');
let drag = null;



btn.onclick = function() {

    if (inp.value != '') {

        boxs[0].innerHTML += `
        
        <p class ='item' draggable='true'>${inp.value}</p>

        `
        inp.value = '';

        dragItem();

    }

    function dragItem() {

        let items = document.querySelectorAll('.item');
        items.forEach(item => {
            item.addEventListener('dragstart', function() {
                drag = item;
                item.style.opacity = '0.5';

                // console.log('drag start');
            })
            item.addEventListener('dragend', function() {
                drag = null;
                item.style.opacity = '1';


                // console.log('dragend');
            })

            boxs.forEach(box => {
                box.addEventListener('dragover', function(e) {

                    e.preventDefault();
                    box.style.background = '#090';
                    box.style.color = '#fff';


                    // console.log('dragover');
                })
                box.addEventListener('dragleave', function() {

                    box.style.background = '#0A99A3';

                    // console.log('drag leave');
                })

                box.addEventListener('drop', function() {

                    box.append(drag);
                    box.style.background = '#0A99A3';

                    // console.log('drop');
                })
            })


        })
    }



};