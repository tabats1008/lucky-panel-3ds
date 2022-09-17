//各カジノの設定
const casino1 = [1,2,3,4,12,13,14,15,16,17,18,19,26,28,35,36,39,40,41,47,50,51,53,54,63,64,65,66,73,74,76,80,81,103,104,106,107,109,110,114,115,116];
const casino2 = [1,2,3,4,7,12,13,14,15,16,17,18,19,20,22,23,26,28,29,30,31,35,36,37,38,39,40,41,42,43,47,48,49,50,51,52,53,54,55,56,57,63,64,65,66,67,68,73,74,75,76,77,80,81,85,86,88,89,91,92,93,94,95,101,102,103,104,105,106,107,108,109,110,114,115,116];
const casino3 = [1,2,3,4,5,6,7,8,9,10,12,13,14,15,16,17,18,19,20,22,23,24,25,27,28,29,30,31,32,33,34,35,36,37,38,39,40,41,42,43,44,45,46,47,48,49,50,51,52,53,54,55,56,57,58,59,60,61,62,63,64,65,66,67,68,69,70,71,72,73,74,75,77,78,79,80,81,82,83,84,85,86,87,88,89,90,91,92,93,94,95,96,97,98,99,100,101,192,103,104,105,106,107,109,110,111,112,114,115,116];
const casino4 = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,27,28,29,30,31,32,33,34,35,36,37,38,39,40,41,42,43,44,45,46,47,48,49,50,51,52,53,54,55,56,57,58,59,60,61,62,63,64,65,66,67,68,69,70,71,72,73,74,75,77,78,79,80,81,82,83,84,85,86,87,88,89,90,91,92,93,94,95,96,97,98,99,100,101,192,103,104,105,106,107,109,110,111,112,113,114,115,116,117,118];

//使用するアイテムを選択
function selectItem(i){

  //使用アイテム選択時
  if($('.pasteItem').hasClass('hidden')){
    if($('.img' + i).hasClass('selected')){
      $('.img' + i).removeClass('selected');
    }
    else{
      $('.img' + i).addClass('selected');
    }
  }
  else{
    $('.pasteImg').attr('src', 'img/' + i + '.bmp');
    $('.imgNo').val(i);
  }
}

//使用するアイテムをクリア
function clearItem(){
  $('img').removeClass('selected');
}

//使用するアイテムを確定
function submitItem(){
  $('button').addClass('hidden');
  $('.pasteItem').removeClass('hidden');
  $('.clearPanel').removeClass('hidden');
  for(i=0;i<=118;i++){

    if(i == 0 || i == 115 || i == 116){
      $('.img' + i).removeClass('hidden');
    }
    else{
      if(!$('.img' + i).hasClass('selected')){
        $('.img' + i).addClass('hidden');
      }
    }
  }
  $('.item').removeClass('selected');
}


//貼り付け
function paste(i){
  const no = $('.imgNo').val();
  $('.panel' + i).attr('src', 'img/' + no + '.bmp');
}

//Cを押す
function c(){
  $('.pasteItem img').attr('src', 'img/0.bmp');
  $('.imgNo').val(0);
}

function selectCasino(i){

  let casino;

  $('.casino'+ i ).removeClass('hidden');

  if(i == 1){casino = casino1;}
  else if(i == 2){casino = casino2;}
  else if(i == 3){casino = casino3;}
  else if(i == 4){casino = casino4;}

  const len = casino.length;

  for(j=0;j<len;j++){
    $('.img' + casino[j]).addClass('selected');
  }
  submitItem()
}
