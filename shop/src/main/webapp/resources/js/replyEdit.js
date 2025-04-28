$(".modal_modify_btn").click(function(){
	var modifyConfirm = confirm("本当に修正しますか？");
if(modifyConfirm){
var data = {repNum : $(this).attr("data-repNum"), 
repCon : $(".modal_repCon").val()
};
$.ajax({
url:"/shop/view/modifyReply", type:"post", data:data, success:function(result){
if(result == 1){
	replyList(); $(".replyModal").fadeOut(200);
}else{
alert("投稿者ご本人のみ削除できます")	
}
},error:function(){
alert("ログインしてください")	
}
	
});
	
}	
	
});
//編集キャンセル時にフェードアウト
$(".modal_cancel").click(function(){
	$(".replyModal").fadeOut(200);
});