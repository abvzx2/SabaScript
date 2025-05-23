<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"%>
<%@ taglib uri="http://java.sun.com/jsp/jstl/core" prefix="c" %>
<%@ taglib uri="http://java.sun.com/jsp/jstl/fmt" prefix="fmt" %>
<jsp:include page="../include/header.jsp" flush="false"/>


<div class="container mt-5">
    <div class="row justify-content-center">
        <div class="col-xl-10 col-lg-12 col-md-9">
            <div class="card shadow-lg border-0">
                <div class="card-body p-0">
                    <div class="row g-0">
                        <div class="px-3 col-lg-6 d-none d-lg-block bg-login-image bg-dark">
                        <!--배경이미지-->
                        </div>
                        <div class="col-lg-6 d-flex align-items-center">
                            <div class="p-5 w-100">
                                <div class="text-center mb-4">
		                          <h2 class="fw-bold">お帰りなさい!</h2>
		                          <p class="text-muted">Welcome Back!</p>
                        		</div>
		                        <c:if test="${not empty requestScope.loginError and requestScope.loginError ne ''}">
									<div class="alert alert-danger text-center mt-3" role="alert">
										${requestScope.loginError}
									</div>
								</c:if>
                        
                                <form method="post" action="/member/signin" ><!-- class="needs-validation" -->
                                    <div class="mb-3">
                                        <input
                                        type="text"
                                        class="userIdIcon form-control-user" 
                                        name="userId"
                                        value="${rememberId != null ? rememberId : ''}"
                                        placeholder="ID"
                                        required="required"
                                        />
                                    </div>
                                    <div class="mb-3">
                                        <input
                                        type="password"
                                        class="userPassIcon form-control-user" 
                                        name="userPass"
                                        placeholder="Password"
                                        required="required"
                                        />
                                    </div>
                                    <div class="form-check mb-3 custom-control custom-checkbox">
                                       <input
                                       type="checkbox"
                                       class="form-check-input"
                                       id="customCheck"
                                       name="rememberMe"
                                       />
                                       <label class="form-check-label" for="customCheck">Remember Me</label>
                                    </div>
                                    <button type="submit" class="btn btn-primary w-100">Login</button>
                                <hr class="my-4">
                                <a href="${contextPath}/member/google" class="btn btn-outline-danger w-100 mb-2">
                                    <i class="fab fa-google me-2"></i> Login with Google
                                </a>
                                <a href="${contextPath}/member/face" class="btn btn-outline-primary w-100">
                                    <i class="fab fa-facebook me-2"></i> Login with Facebook
                                </a>
                                <div class="d-flex justify-content-between mt-4">
                                    <a href="${contextPath}/member/forgot" class="text-muted small">Forgot Password?</a>
                                    <a href="${contextPath}/member/signup" class="text-muted small">Join</a>
                                </div>
                            </form>
                            <script>
                            	(() => {
                            		const form = document.querySelector('form');
                            		form.addEventListener('submit', (e) => {
                            			if (!form.checkValidity()) {
                            				e.preventDefault();
                            				e.stopPropagation();
                            			}
                            			form.classList.add('was-validated');
                            		});
                            	})();
                            </script>
                            </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>                            
    </div>
</div>

<jsp:include page="../include/footer.jsp" flush="false"/>
