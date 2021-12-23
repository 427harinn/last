function ranking() {
  console.log("rank");
}//
//  tapGame.js
//  MonacaFirstApp
//
//  Created by Natsumo Ikeda on 2016/07/01.
//  Copyright 2017 FUJITSU CLOUD TECHNOLOGIES LIMITED All Rights Reserved.
//

// 「ランキングを見る」ボタン押下時の処理
function toRanking() {
  // データ取得
  checkRanking();
  // ランキング画面へ遷移
  window.location.href = "#ranking-page";
}

// 【mBaaS】保存したデータの検索と取得
function checkRanking() {
  // **********【問題２】ランキングを表示しよう！**********
  var highScore = ncmb.DataStore("GameScore_easy");
  highScore.order("score", true)
    .limit(5)
    .fetchAll()
    .then(function (results) {
      console.log("検索に成功しました。");
      setData(results);
    })
    .catch(function (error) {
      console.log("検索に失敗しました。エラー:" + error);
    });

  var highScore = ncmb.DataStore("GameScore_normal");
  highScore.order("score", true)
    .limit(5)
    .fetchAll()
    .then(function (results) {
      console.log("検索に成功しました。");
      setData_normal(results);
    })
    .catch(function (error) {
      console.log("検索に失敗しました。エラー:" + error);
    });


  var highScore = ncmb.DataStore("GameScore_hard");
  highScore.order("score", true)
    .limit(5)
    .fetchAll()
    .then(function (results) {
      console.log("検索に成功しました。");
      setData_hard(results);
    })
    .catch(function (error) {
      console.log("検索に失敗しました。エラー:" + error);
    });










  // ******************************************************
}

// テーブルにデータを設定
function setData(array) {
  var table = document.getElementById("rankingTable");
  for (i = 0; i < array.length; i++) {
    // 名前の設定
    var name = table.rows[i].cells[1];
    name.innerHTML = array[i].name + "さん";
    // スコアの設定
    var score = table.rows[i].cells[2];
    score.innerHTML = array[i].score + "連打";
  }
}

function setData_normal(array) {
  var table = document.getElementById("rankingTable_normal");
  for (i = 0; i < array.length; i++) {
    // 名前の設定
    var name = table.rows[i].cells[1];
    name.innerHTML = array[i].name + "さん";
    // スコアの設定
    var score = table.rows[i].cells[2];
    score.innerHTML = array[i].score + "連打";
  }
}

function setData_hard(array) {
  var table = document.getElementById("rankingTable_hard");
  for (i = 0; i < array.length; i++) {
    // 名前の設定
    var name = table.rows[i].cells[1];
    name.innerHTML = array[i].name + "さん";
    // スコアの設定
    var score = table.rows[i].cells[2];
    score.innerHTML = array[i].score + "連打";
  }
}







