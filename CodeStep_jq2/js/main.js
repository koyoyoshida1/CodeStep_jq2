// アコーディオンメニューの実装に入ります$(function () {
  
$(function() {
  // メニューアイテムをクリック時のアクション
  $('.menu_item').on("click", function () {
    // 次の要素(menu_list)の表示or非表示を切り替える
    $(this).next().slideToggle();
    $(this).toggleClass("open");
    // 一つ開けて一つ閉じるアコーディオンメニューの実装
    $('.menu_item').not($(this)).next().slideUp();
    $('.menu_item').not($(this)).removeClass("open");
  });
});