
var cate1Arr = new Array();
var cate1Obj = new Object();

for(var i = 0; i < jsonData.length; i++) {
	
	if(jsonData[i].level == "1") {
		cate1Obj = new Object();  //초기화
		cate1Obj.contents_category_code = jsonData[i].contents_category_code;
		cate1Obj.cateName = jsonData[i].cateName;
		cate1Arr.push(cate1Obj);
	}
}

var cate1Select = $("select.category1")

for(var i = 0; i < cate1Arr.length; i++) {
	cate1Select.append("<option value='" + cate1Arr[i].contents_category_code + "'>"
						+ cate1Arr[i].cateName + "</option>");	
}


$(document).on("change", "select.category1", function(){

	var cate2Arr = new Array();
	var cate2Obj = new Object();
	
	for(var i = 0; i < jsonData.length; i++) {
		
		if(jsonData[i].level == "2") {
			cate2Obj = new Object();
			cate2Obj.contents_category_code = jsonData[i].contents_category_code;
			cate2Obj.cateName = jsonData[i].cateName;
			cate2Obj.catecodeRef = jsonData[i].catecodeRef;
			
			cate2Arr.push(cate2Obj);
		} 
	}
	
	var cate2Select = $("select.category2");
	
	/*
	for(var i = 0; i < cate2Arr.length; i++) {
			cate2Select.append("<option value='" + cate2Arr[i].contents_category_code + "'>"
								+ cate2Arr[i].cateName + "</option>");
	}
	*/
	
	cate2Select.children().remove();
 
	$("option:selected", this).each(function(){
		
		var selectVal = $(this).val();		
				
		cate2Select.append("<option value='" + selectVal + "'>전체</option>");
		
		for(var i = 0; i < cate2Arr.length; i++) {
			if(selectVal == cate2Arr[i].catecodeRef) {
				cate2Select.append("<option value='" + cate2Arr[i].contents_category_code + "'>"
									+ cate2Arr[i].cateName + "</option>");
			}
		}		
	});
});

var select_contents_category_code = '${goods.contents_category_code}';
var select_catecodeRef = '${goods.catecodeRef}';
var select_cateName = '${goods.cateName}';

console.log("select_contents_category_code = " + select_contents_category_code);
console.log("select_catecodeRef = " + select_catecodeRef);


if(select_catecodeRef != null && select_catecodeRef != "") {
	
	console.log("값이 없으면");
	
	$(".category1").val(select_catecodeRef);
	$(".category2").val(select_contents_category_code);
	$(".category2").children().remove();
	$(".category2").append("<option value='"
							+ select_contents_category_code + "'>" + select_cateName + "</option>");


	
	
} else {
	
	console.log("값이 있으면");
	
	$(".category1").val(select_contents_category_code);
	//$(".category2").val(select_contents_category_code);
	$(".category2").append("<option value='"
			+ select_contents_category_code + "' selected='selected'>전체</option>");
}
