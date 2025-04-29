<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"%>
<%@ taglib prefix="fn" uri="http://java.sun.com/jsp/jstl/functions"%>
<%@ taglib prefix="fmt" uri="http://java.sun.com/jsp/jstl/fmt"%>
<%@ taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core"%>
<% pageContext.setAttribute("CRLF", "\r\n"); %><!-- 줄바꿈 적용 -->
<jsp:include page="../include/header.jsp"/>

<div class="container-fluid">
<div class="row">
<div class="col-md-3 col-lg-2 mt-5 me-5">
<jsp:include page="../include/aside.jsp" /> 	
</div> 
<div class="col-md-7 col-lg-8 ms-5">
<form class=""><!-- 검색창 -->
<div class="input-group">
<h1 class="text-white my-5">자주 묻는 질문</h1>
<div class="container-fluid">
<div>
  <a class="card card-qna p-2 my-2" data-bs-toggle="collapse" href="#collapseExample1" role="tap" aria-expanded="false" aria-controls="collapseExample">
    자주 묻는 질문은 무엇인가요?
  </a>
</div>
<div class="collapse" id="collapseExample1">
  <div class="card card-body card-qna">
    test 입니다
  </div>
</div>
<div>
  <a class="card card-qna p-2 my-2" data-bs-toggle="collapse" href="#collapseExample2" role="tap" aria-expanded="false" aria-controls="collapseExample">
    ID를 모르겠어요.
  </a>
</div>
<div class="collapse" id="collapseExample2">
  <div class="card card-body card-qna">
    test 입니다
  </div>
</div>
<div>
  <a class="card card-qna p-2 my-2" data-bs-toggle="collapse" href="#collapseExample3" role="tap" aria-expanded="false" aria-controls="collapseExample">
    비밀번호를 모르겠어요.
  </a>
</div>
<div class="collapse" id="collapseExample3">
  <div class="card card-body card-qna">
    test 입니다
  </div>
</div>
<div>
  <a class="card card-qna p-2 my-2" data-bs-toggle="collapse" href="#collapseExample4" role="tap" aria-expanded="false" aria-controls="collapseExample">
    찜하기는 어떻게 하나요?
  </a>
</div>
<div class="collapse" id="collapseExample4">
  <div class="card card-body card-qna">
    test 입니다
  </div>
</div>
<c:forEach items="${list}" var="list">
<c:set var="liked" value="${likedList != null and likedList.contains(list.contents_id)}"/>
	<div class="col">
		<div class="card h-100 shadow-sm border-0">
			<a href="/shop/view?n=${list.contents_id}" class="text-decoration-none">
				<img src="${list.contents_thumb_img}" class="card-img-top topImgCard" alt="${list.contents_title}">
			</a>
			<div class="card-body">
				<a href="/shop/view?n=${list.contents_id}" class="text-decoration-none">
					<h5 class="card-title text-dark">${list.contents_title}</h5>
				</a>
				<p class="text-muted small mb-1">
					<button class="btn btn-sm toggle-like" data-contents_id="${list.contents_id}" data-liked="${liked}"> ${liked ? '❤' : '🤍'} <span>${list.contents_likes}</span></button>
				 	💬 ${list.gdsReviewCount}
				</p>
			</div>
		</div>
	</div>
</c:forEach>
</div>
<!-- <input
class="form-control"
placeholder="Search"
value="${blogListRequestVO.search}"
/>
<input
type="submit"
name="search_button"
value="검색"
class="btn btn-outline-success"
/> -->
<!-- input 타입이 버튼일때 (jquery[ajax]로 콘트롤할 확률이 높다 
이프로젝트 전체에서 댓글을 ajax로 사용할건데..
그건 나중에
-->
</div>
</form>
<!--  <table class="table">
<colgroup>
<col width="5%"/>
<col width="10%"/>
<col width="60%"/>
<col width="10%"/>
<col width="15%"/>
</colgroup>
<thead>
<tr>
<th class="text-center">글번호</th><th class="text-center">카테고리</th><th class="text-center">제목</th><th class="text-center">작성자</th><th class="text-center">작성일</th>
</tr>
</thead>
<tbody>
<c:forEach var="blogListResponseVO" items="${blogListResponseVOList}">
<tr>
<td>${blogListResponseVO.blgContSeq}</td><%--<% 스크립 틀릿 %><%= 익스프레션 %> el--%>
<td>
<a href="/read/${blogListResponseVO.blgContSeq}">
${blogListResponseVO.title}
</a>
</td>
<td>${blogListResponseVO.insertDtFormat}</td>
</tr>
</c:forEach>
</tbody>
</table>
	<div class="d-flex justify-content-end my-5">
	<a href="${contextPath}/shop/QnA" class="btn btn-outline-success">
	create
	</a>
	</div>
	
	<c:if test="${empty blogListResponseVOList}">
	<strong class="text-secondary">검색 결과가 없습니다</strong>
	</c:if> -->
</div>
</div>
</div>
</div>


<jsp:include page="../include/footer.jsp"/>