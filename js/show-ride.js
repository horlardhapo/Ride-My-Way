function notification(){

    let div = document.getElementById('notification');
        if(div.style.display === 'none'){
            div.style.display = 'block';
        }
        else if(div.style.display === 'block'){
            div.style.display = 'none';
        }

        else{
            div.style.display = 'none';
        }
}