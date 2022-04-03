//自動入力
$(document).on('click', '#autoInput', function () {
  //trの数を取得
  const tr_length = $('.table_body tr').length;

  //trの数だけ計算する
  for (let i = 0; i < tr_length; i++) {
    //trごとの各項目の数値を参照
    const num3 = $('.table_body').find(`.num3:eq(${i})`).text();
    $('.table_body').find(`.inputVal:eq(${i})`).val(num3);
  }
  window.setTimeout(calcAnswer, 100);
  window.setTimeout(calcAnswer2, 100);
});

//inputにfocusが当たったらtype=number
$(document).on('focus', '.inputVal', function () {
  const number = Number($(this).val().replace(/,/g, ''));
  console.log('コンマ外した後', number);
  $(this).val(number);
  $(this).attr('type', 'number');
});

//inputにfocusがはずれたらtype=text
$(document).on('blur', '.inputVal', function () {
  $('.inputVal').attr('type', 'text');
  $(this).val(Number($(this).val()).toLocaleString());
});

//自動計算-----------------------------------------------------------
function calcAnswer() {
  removeCommaAll();
  //trの数を取得
  const tr_length = $('.table_body tr').length;
  //trの数だけ計算する
  for (let i = 0; i < tr_length; i++) {
    //trごとの各項目の数値を参照
    const num1 = $('.table_body').find(`.num1:eq(${i})`).text();
    const num2 = $('.table_body').find(`.num2:eq(${i})`).text();
    const num3 = $('.table_body').find(`.num3:eq(${i})`).text();
    let num4 = $('.table_body').find(`.inputVal:eq(${i})`).val();
    if (!num4) {
      num4 = 0;
    }
    const num5 = $('.table_body').find(`.num5:eq(${i})`).text();

    //計算式
    const answer =
      Number(num1) + Number(num2) + Number(num3) + Number(num4) + Number(num5);
    $('.table_body').find(`.answer:eq(${i})`).text(answer);
  }
  addCammaAll();
}
calcAnswer();

function recalcAnswer() {}

//自動「再」計算-----------------------------------------------------------
$(document).on('input', '.inputVal', function () {
  const tr = $(this).parent().parent()[0];
  console.log(tr.cells);

  //★対象のtrのカンマを外しNumberにする
  $(tr.cells[0]).text($(tr.cells[0]).text().replace(',', ''));
  $(tr.cells[1]).text($(tr.cells[1]).text().replace(',', ''));
  $(tr.cells[2]).text($(tr.cells[2]).text().replace(',', ''));
  $(tr.cells[3]).val($(tr.cells[3]).val().replace(',', ''));
  $(tr.cells[4]).text($(tr.cells[4]).text().replace(',', ''));

  const num1 = $(tr.cells[0]).text();
  const num2 = $(tr.cells[1]).text();
  const num3 = $(tr.cells[2]).text();
  const num4 = tr.cells[3].childNodes[0].value;
  const num5 = $(tr.cells[4]).text();
  //計算式
  const answer =
    Number(num1) + Number(num2) + Number(num3) + Number(num4) + Number(num5);
  $(tr.cells[5]).text(answer);

  //★対象のtrのカンマを付ける
  $(tr.cells[0]).text(Number(num1).toLocaleString());
  $(tr.cells[1]).text(Number(num2).toLocaleString());
  $(tr.cells[2]).text(Number(num3).toLocaleString());
  $(tr.cells[4]).text(Number(num5).toLocaleString());
  $(tr.cells[5]).text(Number(answer).toLocaleString());
});

//全ての値に一気にカンマを付ける---------------------------------------------------
function addCammaAll() {
  //trの数を取得
  const tr_length = $('.table_body tr').length;

  for (let i = 0; i < tr_length; i++) {
    //trごとの各項目の数値を参照
    const num1 = Number($('.table_body').find(`.num1:eq(${i})`).text());
    const num2 = Number($('.table_body').find(`.num2:eq(${i})`).text());
    const num3 = Number($('.table_body').find(`.num3:eq(${i})`).text());
    let num4 = Number($('.table_body').find(`.inputVal:eq(${i})`).val());
    if (num4) {
      Number($('.table_body').find(`.inputVal:eq(${i})`).val());
    }
    const num5 = Number($('.table_body').find(`.num5:eq(${i})`).text());
    const answer = Number($('.table_body').find(`.answer:eq(${i})`).text());

    $('.table_body').find(`.num1:eq(${i})`).text(num1.toLocaleString());
    $('.table_body').find(`.num2:eq(${i})`).text(num2.toLocaleString());
    $('.table_body').find(`.num3:eq(${i})`).text(num3.toLocaleString());
    $('.table_body').find(`.inputVal:eq(${i})`).val(num4.toLocaleString());
    $('.table_body').find(`.num5:eq(${i})`).text(num5.toLocaleString());
    $('.table_body').find(`.answer:eq(${i})`).text(answer.toLocaleString());
  }
}

//全ての値に一気にカンマを外す---------------------------------------------------
function removeCommaAll() {
  //trの数を取得
  const tr_length = $('.table_body tr').length;

  for (let i = 0; i < tr_length; i++) {
    //trごとの各項目の数値を参照
    const num1 = $('.table_body').find(`.num1:eq(${i})`).text();
    const num2 = $('.table_body').find(`.num2:eq(${i})`).text();
    const num3 = $('.table_body').find(`.num3:eq(${i})`).text();
    let num4 = $('.table_body').find(`.inputVal:eq(${i})`).val();
    if (!num4) {
      num4 = '0';
    } else {
      num4 = $('.table_body').find(`.inputVal:eq(${i})`).val().toString();
    }
    const num5 = $('.table_body').find(`.num5:eq(${i})`).text();
    const answer = $('.table_body').find(`.answer:eq(${i})`).text();

    $('.table_body').find(`.num1:eq(${i})`).text(num1.replace(',', ''));
    $('.table_body').find(`.num2:eq(${i})`).text(num2.replace(',', ''));
    $('.table_body').find(`.num3:eq(${i})`).text(num3.replace(',', ''));
    $('.table_body').find(`.inputVal:eq(${i})`).val(num4.replace(',', ''));
    $('.table_body').find(`.num5:eq(${i})`).text(num5.replace(',', ''));
    $('.table_body').find(`.answer:eq(${i})`).text(answer.replace(',', ''));
  }
}

function calcAnswer2() {
  console.log('recalc');
  //trの数を取得
  const tr_length = 2;

  let answer2 = 0;
  for (let i = 0; i < tr_length; i++) {
    //trごとの各項目の数値を参照
    let num4 = $('.table_body').find(`.inputVal:eq(${i})`).val();
    if (num4) {
      //★★★もしコンマ区切りならコンマを外して数値に直す
      console.log(num4);
      answer2 = answer2 + Number(num4);
    } else {
      let nonComma = $('.table_body')
        .find(`.inputVal:eq(${i})`)
        .val()
        .toString()
        .replace(',', '');
      console.log(nonComma);
    }
  }
  console.log(answer2);
  $('.answer2').text(answer2);
}
calcAnswer2();
