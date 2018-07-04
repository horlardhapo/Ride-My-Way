let hovered = document.getElementById('hovered');
let _accounts = document.getElementById('accounts');


function notification(){

    let div = document.getElementById('notification');
        if(div.style.display === 'none'){
            document.getElementById('rides').style.width = '50%';
            div.style.display = 'block';
        }
        else if(div.style.display === 'block'){
            document.getElementById('rides').style.width = '75%';
            div.style.display = 'none';
        }
        else{
            div.style.display = 'none';
        }
}

function change_rides_view(a,b,c) {
    let x = document.getElementById(a);
    let y = document.getElementById(b);
    let z = document.getElementById(c);

    if(x.style.display === 'none'){
        x.style.display = 'table';
        x.style.borderBottomColor = 'peru solid';
        y.style.display = 'none';
        z.style.display = 'none';
    }
    else if(a.style.display ==='table'){
        x.style.display = 'table';
        x.style.borderBottomColor = 'peru solid';
        y.style.display = 'none';
        z.style.display = 'none';
    }
}

function accounts(){

    let div = document.getElementById('accounts-content');

    if(div.style.display === 'none'){
        document.getElementById('friend-content').style.display = 'none';
        hovered.style.borderBottomColor = 'inherit';

        div.style.display = 'block';
        _accounts.style.borderBottom = 'peru solid';
    }
    else if(div.style.display === 'block'){

        div.style.display = 'block';
        _accounts.style.borderBottom = 'peru solid';
    }
    else{
        document.getElementById('friend-content').style.display = 'block';
        hovered.style.borderBottom = 'peru solid';

        div.style.display = 'none';
        _accounts.style.borderBottom = 'inherit';
    }
}

function friends(){

    let div = document.getElementById('friend-content');

    if(div.style.display === 'none'){
        document.getElementById('accounts-content').style.display = 'none';
        _accounts.style.borderBottom = 'inherit';

        div.style.display = 'block';
        hovered.style.borderBottom = 'peru solid';
    }
    else if (div.style.display === 'block'){

        div.style.display = 'block';
        hovered.style.borderBottom = 'peru solid';
    }
    else{
        document.getElementById('accounts-content').style.display = 'block';
        _accounts.style.borderBottom = 'peru solid';

        div.style.display = 'none';
        hovered.style.borderBottom = 'inherit';
    }
}