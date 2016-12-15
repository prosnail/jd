
var container=document.getElementById('img-container');
var imgArr=container.getElementsByTagName('img');
var pagination=document.getElementById('pagination');
var pageArr=pagination.getElementsByTagName('span');
var leftM=document.getElementById('leftM');
var rightM=document.getElementById('rightM');
var nowIndex=0;
imgArr[nowIndex].className='active';
pageArr[nowIndex].className='spanActive';
var timer=setInterval(nextImg,4000);
rightM.onclick = function () {
    nextImg();
};
leftM.onclick = function () {
    lastImg()
};
container.onmouseover = function () {
    stopImg();
};
container.onmouseout = function () {
    startImg();
};
function lastImg(){
    nowIndex--;
    for(var i=0;i<imgArr.length;i++){
        imgArr[i].className='';
        pageArr[i].className='';
    }
    if(nowIndex<0){
        nowIndex=imgArr.length-1;
    }
    imgArr[nowIndex].className='active';
    pageArr[nowIndex].className='spanActive';
}
function nextImg(){
    nowIndex++;
    for(var i=0;i<imgArr.length;i++){
        imgArr[i].className='';
        pageArr[i].className='';
    }
    if(nowIndex>imgArr.length-1){
        nowIndex=0;
    }
    imgArr[nowIndex].className='active';
    pageArr[nowIndex].className='spanActive';
}
function stopImg(){
    clearInterval(timer);
}
function startImg(){
    timer=setInterval(nextImg,4000);
}
function changeImg(e){
    console.log(e.target.innerHTML);
    nowIndex= e.target.innerHTML-1;
    for(var i=0;i<imgArr.length;i++){
        imgArr[i].className='';
        pageArr[i].className='';
    }
    if(nowIndex>imgArr.length-1){
        nowIndex=0;
    }
    imgArr[nowIndex].className='active';
    pageArr[nowIndex].className='spanActive';
}