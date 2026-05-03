'use strict';
{
const left = document.querySelector('nav');
left.innerHTML = '<nav>'+
                  '<ul>'+
                  '<li><a href="interview_before.html">面接まで</a></li>'+
                  '<li><a href="interview.html">面接 (前日＋当日)</a></li>'+
                  '<li><a href="go_to_the_office.html">出勤確認</a></li>'+
                  '<li><a href="others.html">その他の対応</a></li>'+
                  '<li><a href="line.html">ラインノート</a></li>'+
                  '<li><a href="campaign.html">キャンペーン</a></li>'+
                  '<li><a href="cash.html">月次会計報告</a></li>'+
                  '</ul>'+
                  '</nav>';

function getDate() {
  const one_days_after = document.getElementById('one_days_after');
  //今日の日付
  let today = new Date();
  //１日後
  today.setDate(today.getDate() + 1);

  const month = today.getMonth();
  const date = today.getDate();
  const day = today.getDay();
  const days = {
    0: '日',
    1: '月',
    2: '火',
    3: '水',
    4: '木',
    5: '金',
    6: '土',
  };
  one_days_after.textContent = `${month + 1}/${date}(${days[day]})`;
}

getDate();

function gettDate() {
  const Today = document.getElementById('Today');
  //今日の日付
  let today = new Date();
  //１日後
  today.setDate(today.getDate());

  const month = today.getMonth();
  const date = today.getDate();
  const day = today.getDay();
  const days = {
    0: '日',
    1: '月',
    2: '火',
    3: '水',
    4: '木',
    5: '金',
    6: '土',
  };
  Today.textContent = `${month + 1}/${date}(${days[day]})`;
}

gettDate();

}