let Summer = 'orange';
let Autumn = 'brown';
let Spring = 'lightgreen';
let Winter = 'lightblue';

function changeImage() {
    document.getElementById('main-image').src = 'Pictures/Summer.jpg';
    document.getElementById('caption').innerHTML = 'This is a Summer Scene';
    document.getElementById('caption').style.color = Summer;
    document.getElementById('main-image').style.borderColor = Summer;
    
    }
function changePic() {
    document.getElementById('main-image').src = 'Pictures/Autumn.jpg';
    document.getElementById('caption').innerHTML = 'This is a Autumn Scene';
    document.getElementById('caption').style.color = Autumn;
    document.getElementById('main-image').style.borderColor = Autumn;
    }
function alterImage() {
    document.getElementById('main-image').src = 'Pictures/spring.jpg';
    document.getElementById('caption').innerHTML = 'This is a Spring Scene';
    document.getElementById('caption').style.color = Spring;
    document.getElementById('main-image').style.borderColor = Spring;
    }
function alterPic() {
    document.getElementById('main-image').src = 'Pictures/winter.jpg';
    document.getElementById('caption').innerHTML = 'This is a Winter Scene';
    document.getElementById('caption').style.color = Winter;
    document.getElementById('main-image').style.borderColor = 'rgb(9, 129, 177)';
    }

