<%@ page language="java" contentType="text/html; charset=UTF-8" pageEncoding="UTF-8"%>
<%@ taglib uri="http://java.sun.com/jsp/jstl/core" prefix="c" %>
<%@ taglib uri="http://java.sun.com/jsp/jstl/fmt" prefix="fmt" %>
<jsp:include page="../include/header.jsp" flush="false"/>

<div class="container-fluid mt-5">
	<div class="row">
		<div class="col-md-3">
			<jsp:include page="../include/aside.jsp" />		
		</div>
		<div class="col-md-9">
			<div class="row row-cols-1 row-cols-sm-2 row-cols-md-3 g-4">
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
		</div>
		<script>
			document.querySelectorAll(".toggle-like").forEach(button => {
			  button.addEventListener("click", function () {
			    const btn = this;
			    const contents_id = btn.dataset.contents_id;
			
			    fetch("/shop/toggleLike", {
			      method: "POST",
			      headers: { "Content-Type": "application/x-www-form-urlencoded" },
			      body: "contents_id=" + contents_id
			    })
			    .then(res => res.json())
			    .then(data => {
			      if (data.status === "unauthenticated") {
			        alert("ログインしてください！");
			        return;
			      }
			
			      // UI 전환
			      const liked = data.liked;
			      const likeCount = parseInt(btn.textContent.match(/\d+/)) || 0;
			      const newCount = liked ? likeCount + 1 : likeCount - 1;
			      btn.innerText = (liked ? "❤ " : "🤍 ") + newCount;
			      btn.classList.toggle("btn-danger", liked);
			      btn.classList.toggle("btn-outline-danger", !liked);
			    });
			  });
			});
		</script>
	</div>
</div>

<jsp:include page="../include/footer.jsp" />