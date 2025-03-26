<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"%>
<%@ taglib uri="http://java.sun.com/jsp/jstl/core" prefix="c" %>
<%@ taglib uri="http://java.sun.com/jsp/jstl/fmt" prefix="fmt" %>

<jsp:include page="../include/header.jsp" />

<div class="container-fluid mt-5">
   <div class="row">
      <div class="col-md-3">
         <jsp:include page="../include/aside.jsp" />      
      </div>
      <div class="col-md-9">
         <div class="row row-cols-1 row-cols-sm-2 row-cols-md-3 g-4">
            <c:forEach items="${list}" var="list">
               <div class="col">
                  <div class="card h-100 shadow-sm">
                     <img src="${list.gdsThumbImg}" class="card-img-top" alt="${list.gdsName}">
                     <div class="card-body">
                        <h5 class="card-title">
                           <a href="/shop/view?n=${list.gdsNum}" class="text-decoration-none text-dark">
                              ${list.gdsName}
                           </a>
                        </h5>
                     </div>
                  </div>
               </div>
            </c:forEach>   
         </div>   
      </div>
   </div>
</div>

<jsp:include page="../include/footer.jsp" />
