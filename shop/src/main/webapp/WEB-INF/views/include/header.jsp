<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"%>
<%@ taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core" %>
<%@ taglib prefix="fmt" uri="http://java.sun.com/jsp/jstl/fmt" %>
<c:set var="contextPath" value="${pageContext.request.contextPath}"/>
<!DOCTYPE html>
<html>
<head>
   <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.2/dist/css/bootstrap.min.css" rel="stylesheet">
   <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.2/dist/js/bootstrap.bundle.min.js"></script>
   <script src="https://t1.daumcdn.net/mapjsapi/bundle/postcode/prod/postcode.v2.js"></script>
   <link rel="stylesheet" href="${contextPath}/resources/css/style.css"/>
   <link rel="stylesheet" href="https://use.fontawesome.com/releases/v5.7.0/css/all.css" integrity="sha384-lZN37f5QGtY3VHgisS14W3ExzMWZxybE1SJSEsQp9S+oqd12jhcu+A56Ebc1zFSJ" crossorigin="anonymous">
   <meta charset="UTF-8">
   <script src="${contextPath}/resources/ckeditor/ckeditor.js"></script>
   <title>=== SHOP ===</title>
   <script>
      function replyList(){
         var gdsNum = ${view.gdsNum};
      
         //비동기식 데이터 요청
         $.getJSON("/shop/view/replyList" + "?n=" + gdsNum, function(data){
            var str = "";//초기화
            $(data).each(function(){
               console.log(data);
                
               //날짜 데이터를 보기 쉽게 변환
                var repDate = new Date(this.repDate);
                repdate = repDate.toLocaleDateString("ko-KR");
                
               //html코드 조립
               str += "<li data-repNum='" + this.repNum + "'class='list-group-item my-1'>"
               + "<div class=''>"
               + "<p class=''>" + this.userName + "</p>"
               + "</div>"
               + "<div class='replyContent'>"+this.repCon+"</div>"
               + "<div class=''><p class='my-3'>" + repDate + "</p></div>"
               +"<c:if test='${member != null}'>"//세션이 있어야만 수정삭제가 가능
               + "<div class='replyFooter my-3'>"
               + "<button type='button' class='modify btn btn-secondary' data-repNum='"+this.repNum+"'>수정</button>"
               + "<button type='button' class='delete btn btn-secondary mx-3' data-repNum='"+this.repNum+"'>삭제</button>"
               + "</div>"
               +"</c:if>"
               +"</li>";
            });
             $("section.replyList ul").html(str);
             });
            }
   </script>
</head>
<body class="pt-5 bg-dark">
<nav class="navbar navbar-expand-sm bg-dark fixed-top">
   <div class="container-fluid">
      <a class="navbar-brand" href="/">
         <img src="${contextPath}/resources/images/logo2.svg" alt="Logo" width="50px" height="50px"/>
      </a>
      <button class="navbar-toggler btn-primary" data-bs-toggle="collapse" data-bs-target="#mynavbar">
         <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="mynavbar">
         <ul class="navbar-nav me-auto align-items-center">
            <c:if test="${member == null}"><!-- 미로그인 -->
               <li class="nav-item">
                  <a class="nav-link text-white link-danger" href="${contextPath}/member/signin">Login</a>
               </li>
               <li class="nav-item mx-3">
                  <a class="nav-link text-white link-danger" href="${contextPath}/member/signup">Join</a>
               </li>
               <li class="nav-item">
                  <a class="text-decoration-none text-white link-danger" href="${contextPath}/shop/list?c=101&l=2">Contents</a>
               </li>
            </c:if>
            <!-- 로그인을 했을때 -->
            <c:if test="${member != null }">
                <li class="nav-item mx-2">
                    <span class="fw-bold text-white">
                    ${member.userName}
                    </span>
                </li>
         
                 <div class="topbar-divider d-none d-sm-block"></div>
              
               <li class="nav-item fw-bold mx-2">
                  <a class="nav-link fw-bold text-white link-danger" href="${contextPath}/shop/list?c=1&l=2">Contents</a>
               </li>
               <li class="nav-item fw-bold mx-2">
                  <a class="nav-link text-white link-danger" href="${contextPath}/shop/cartList">Scrap</a>
               </li>
               <li class="nav-item fw-bold mx-3">
                  <a class="nav-link small text-white link-danger" href="${contextPath}/member/signout">Logout</a>
               </li>
         
                 <!-- 로그인을 했는데 관리자라면 -->
               <c:if test="${member.verify == 9 }">
                  <a class="nav-link mx-3 text-white" href="${contextPath}/admin/index">Go to Admin Page</a>
               </c:if>
            </c:if>
         </ul>
      </div>
      <form class="d-flex ">
         <div class="btn-group">
            <input class="form-control" type="text" placeholder="Search"/>
               <button class="btn btn-coralred" type="button">
                  <i class="fas fa-search fa-sm"></i>
               </button>
         </div>
      </form>
   </div>
</nav>
<script src="https://ajax.googleapis.com/ajax/libs/jquery/3.3.1/jquery.min.js"></script>
<script src="${contextPath}/resources/js/daum.js"></script>
