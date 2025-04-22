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
<h1 class="text-white my-5">QnA 게시판</h1>
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
<table class="table">
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
	</c:if>
</div>
</div>
</div>
</div>


<jsp:include page="../include/footer.jsp"/>