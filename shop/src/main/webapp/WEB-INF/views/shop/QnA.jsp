<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"%>
<jsp:include page="../include/header.jsp"/>

<div class="container-fluid bg-gradient-primary">
<div class="row">
<div class="col-md-12">
<div class="d-flex">
<div class="w-25">
<div class="mt-1"></div>

</div>
<div class="w-75 p-4">
<h2 class="mt-5 mb-3 text-white">QnA</h2>
<form method="post" enctype="multipart/form-data"><!-- 이미지나 다른 파일을 등록할때  -->
<div class="input-group">
<label class="form-label text-white">문의 종류</label>
<select class="form-select category1 mx-3">
<option value="">
전체
</option>
</select>
</div>

<div class="input-group mt-5">
<label class="form-label text-white w-10">제목</label>
<input type="text" id="contents_title" name="contents_title" class="form-control w-90" required/>
</div>

<div class="input-group mt-5">
<label class="form-label text-white w-10">문의사항</label>
<textarea rows="5" id="contents_description" name="contents_description" class="form-control" required>내용을 적어주세요</textarea>
<script src="${contextPath}/resources/js/ckeditorConfig.js">
</script>
</div>

<button type="submit" id="register_Btn" class="btn btn-warning btn-lg btn-block my-4">
등록
</button>
</form>
<script>
let jsonData = JSON.parse('${category}');
</script>
<script src="${contextPath}/resources/js/jsonDrop.js"><!--2개의 드롭다운으로 카테고리를 선택할때 json으로 오라클에db 카테고리를 선택-->
</script>
</div>
</div>
</div>
</div>
</div>


<jsp:include page="../include/footer.jsp"/>