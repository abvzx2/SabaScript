<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"%>
<!-- (1) page directive include -->
<%@ include file="../include/header.jsp"%>

<div class="container-fixed bg-dark">
<div class="container">
   <div class="row justify-content-center">
      <div class="col-lg-12">
         <div class="card o-hidden border-0 shadow-lg my-5">
            <div class="card-body p-0">
               <div class="row">
                  <div class="px-3 col-lg-6 d-none d-lg-block bg-login-image bg-dark">
                        <!--배경이미지-->
                        </div>
                  <div class="col-lg-6">
                     <div class="p-5">
                        <div class="text-center">
                           <h1 class="text-dark">会員登録</h1>
                           <h1 class="h4 text-gray-900 mb-4">Join Membership</h1>
                           <form method="post" class="was-validated">
                              <div class="mb-4">
                                 <input
                                 type="text"
                                 name="userId"
                                 placeholder="ID"
                                 class="form-control-user userIdIcon"
                                 required="required"
                                 />
                              </div>
                              <div class="mb-2">
                                 <input
                                 type="password"
                                 name="userPass"
                                 placeholder="Password"
                                 class="form-control-user userPassIcon"
                                 required="required"
                                 />
                              </div>
                              <div class="mb-4">
                                 <input
                                 type="password"
                                 name="userPassRe"
                                 placeholder="Password 確認"
                                 class="form-control-user userPassReIcon"
                                 required="required"
                                 />
                              </div>
                              <div class="mb-4">
                                 <div class="btn-group">
                                    <label class="btn border-0">
                                       <input type="radio" name="userGender" value="男" autocomplete="off" checked>男 (Male)
                                    </label>
                                    <label class="btn border-0">
                                       <input type="radio" name="userGender" value="女" autocomplete="off">女 (Female)
                                    </label>
                                 </div>
                              </div>
                              <div class="mb-2">
                                 <input
                                 type="text"
                                 name="userName"
                                 placeholder="お名前"
                                 class="form-control-user userNameIcon"
                                 required="required"
                                 />
                              </div>
                              <div class="mb-2">
                                 <input
                                 type="text"
                                 name="userEmail"
                                 placeholder="メールアドレス"
                                 class="form-control-user userEmailIcon"
                                 required="required"
                                 />
                              </div>
                              <div class="mb-4">
                                 <input
                                 type="text"
                                 name="userPhone"
                                 placeholder="電話番号"
                                 class="form-control-user userPhoneIcon"
                                 required="required"
                                 />
                              </div>
                              <div class="mb-2">
                                 <label class="form-label text-dark">ご住所を検索してください</label>
                                 <div class="d-flex">
                                    <input
                                    type="text"
                                    placeholder="search the address"
                                    name="userAddr1"
                                    readonly="readonly"
                                    class="form-control form-control-user address_input_1 w-75"
                                    />
                                    <a class="btn btn-outline-primary border-radius-top-right-sm w-25" onclick="go_daum_address()">住所検索</a>
                                 </div>
                              </div>
                              <div class="mb-2">
                                 <input
                                 type="text"
                                 placeholder=""
                                 name="userAddr2"
                                 readonly="readonly"
                                 class="form-control form-control-user address_input_2"
                                 />
                              </div>
                              <div class="mb-4">
                                 <input
                                 type="text"
                                 placeholder=""
                                 name="userAddr3"
                                 readonly="readonly"
                                 class="form-control form-control-user address_input_3"
                                 />
                              </div>
                              <div class="my-3">
                                 <input
                                 type="submit"
                                 class="btn btn-primary btn-user btn-block"
                                 value="Join Membership"
                                 />
                              </div>
                              <p class="mb-3">
                                          <a href="${contextPath}/member/google" class="btn btn-google btn-user btn-block">
                                             <i class="fab fa-google fa-fw"></i>
                                             &nbsp;Join with Google
                                          </a>
                                       </p>
                                       <p class="mb-3">
                                          <a href="${contextPath}/member/face" class="btn btn-facebook btn-user btn-block">
                                             <i class="fab fa-facebook fa-fw"></i>
                                             &nbsp;Join with Facebook
                                          </a>
                                       </p>   
                              <div class="mb-3">
                                 <a class="small text-dark" href="/member/forgot.jsp">Forgot Password?</a>
                              </div>
                              <div class="mb-3">
                                 <a class="small text-dark" href="/member/login.jsp">Already have an account? login!</a>
                              </div>
                           </form>
                        </div>
                     </div>
                  </div>
               </div>
            </div>
         </div>
      </div>
   </div>
</div>
</div>
<!-- (2) jsp include -->
<jsp:include page="../include/footer.jsp" flush="false"/>
