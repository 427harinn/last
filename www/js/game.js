function startGame1() {
  active = true;
  bactive = false;
  tactive = false;
  easy = 1;
  $("#ranking").prop("disabled", true);
  $("#normalstart").prop("disabled", true);
  $("#hardstart").prop("disabled", true);
  $("#easystart").prop("disabled", true);
  startTime = new Date();
  score = 0;
}

function startGame2() {
  active = true;
  bactive = false;
  tactive = false;
  normal = 1;
  $("#ranking").prop("disabled", true);
  $("#normalstart").prop("disabled", true);
  $("#hardstart").prop("disabled", true);
  $("#easystart").prop("disabled", true);
  startTime = new Date();
  score = 0;
}

function startGame3() {
  active = true;
  bactive = false;
  tactive = false;
  hard = 1;
  $("#ranking").prop("disabled", true);
  $("#normalstart").prop("disabled", true);
  $("#hardstart").prop("disabled", true);
  $("#easystart").prop("disabled", true);
  startTime = new Date();
  score = 0;
}

function saveScore(name, score) {
  // **********【問題１】名前とスコアを保存しよう！**********
  if (easy == 1) {
    var GameScore = ncmb.DataStore("GameScore_easy");
    var gameScore = new GameScore();

    gameScore.set("name", name);
    gameScore.set("score", score);

    gameScore.save()
      .then(function () {
        console.log("保存に成功しました。");
        easy = 0;
        normal = 0;
        hard = 0;
      })
      .catch(function (error) {
        console.log("保存に失敗しました。エラー:" + error);
      });
  }
  if (normal == 1) {
    var GameScore = ncmb.DataStore("GameScore_normal");
    var gameScore = new GameScore();

    gameScore.set("name", name);
    gameScore.set("score", score);

    gameScore.save()
      .then(function () {
        console.log("保存に成功しました。");
        easy = 0;
        normal = 0;
        hard = 0;
      })
      .catch(function (error) {
        console.log("保存に失敗しました。エラー:" + error);
      });
  }
  if (hard == 1) {
    var GameScore = ncmb.DataStore("GameScore_hard");
    var gameScore = new GameScore();

    gameScore.set("name", name);
    gameScore.set("score", score);

    gameScore.save()
      .then(function () {
        console.log("保存に成功しました。");
        easy = 0;
        normal = 0;
        hard = 0;
      })
      .catch(function (error) {
        console.log("保存に失敗しました。エラー:" + error);
      });
  }
}

function imputName(score) {
  // 入力アラートを表示
  var name = window.prompt("名前を入力してください", "");
  if (name == null || name == "") {
    $("#list-page p").html("保存がキャンセルされました");
  } else {
    // スコアと入力した名前を保存
    saveScore(name, score);
    $("#list-page p").html(name + "さんのスコアは" + String(score) + "でした");
  }
  // ボタンの有効化
  //document.gameForm.start.disabled = false;
  //document.gameForm.ranking.disabled = false;
}