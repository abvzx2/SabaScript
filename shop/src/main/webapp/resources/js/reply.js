//Asynchronous javascript and xml : 정말필요한 내용을 부분적으로 갱신해서 필요한 데이터와 자우너만 받아올수 있다
//다시 로딩하지 않고 필요한 일부분만 갱신
$("#reply_btn").click(function(){
	var formObj = $(".replyForm form[role='form']");
	var contents_id = $('#contents_id').val();
	var repCon = $('#repCon').val();
	
	//ReplyVO형태로 데이터 생성
	var data = {contents_id:contents_id, repCon:repCon};
	//
	$.ajax({
url:"/shop/view/registReply", type:"post", data:data, success:function(){
replyList();//리스트 새로고침
$("#repCon").val("");//텍스트 에어리어를 초기화
}	
	});
});