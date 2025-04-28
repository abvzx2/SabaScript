$(document).on("click",".modify",function(){
	//1) 徐々に表示されるアニメーション効果
	$(".replyModal").fadeIn(200);
	//2) データの取得
	var repNum = $(this).attr("data-repNum");
	var repCon = $(this).parent().parent().children(".replyContent").text();
	
	$(".modal_repCon").val(repCon);
	$(".modal_modify_btn").attr("data-repNum", repNum);
});

// 削除
$(document).on("click",".delete",function(){
//　削除の確認をユーザーに表示
var deleteConfirm = confirm("削除してもいいですか？");
//削除時
if(deleteConfirm){
	var data = {repNum : $(this).attr("data-repNum")};
	
	//메모리 줄이고 렌더링하지 않게 ...
	$.ajax({
url:"/shop/view/deleteReply", type:"post", data:data, success : function(result){
	if(result == 1) {//세션여부에 따라 다르다
replyList();//本人のみ削除可能	
	}else{
alert("投稿者ご本人のみ削除できます")		
	}
},error : function(){alert("ログインしてください")}		
	});
}
});