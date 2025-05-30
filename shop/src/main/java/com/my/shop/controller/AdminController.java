package com.my.shop.controller;

import java.io.File;
import java.io.FileOutputStream;
import java.io.IOException;
import java.io.OutputStream;
import java.io.PrintWriter;
import java.util.List;
import java.util.UUID;

import javax.annotation.Resource;
import javax.inject.Inject;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.multipart.MultipartFile;

import com.my.shop.service.AdminService;
import com.my.shop.utils.UploadFileUtils;
import com.my.shop.vo.CategoryVO;
import com.my.shop.vo.GoodsVO;
import com.my.shop.vo.GoodsViewVO;
import com.my.shop.vo.OrderListVO;
import com.my.shop.vo.OrderVO;
import com.my.shop.vo.ReplyListVO;
import com.my.shop.vo.ReplyVO;

import net.sf.json.JSONArray;

@Controller
@RequestMapping("/admin/*")
public class AdminController {
	
	private static final Logger logger = LoggerFactory.getLogger(AdminController.class);
	
	@Inject
	AdminService adminService;
	
	@Resource(name="uploadPath")//업로드 패스 정의
	private String uploadPath;
	
	//관리자 메인
	@GetMapping("/index")//admin/index
	public void getIndex() throws Exception{
		logger.info("관리자 화면 진입");
	}
	
	//상품등록
	@GetMapping("/goods/register")
	public void getGoodsRegister(Model model) throws Exception{
		logger.info("상품등록 페이지 진입");
		
		//처음에 비워져 있어야 함 초기화
List<CategoryVO> category = null; //CategoryVO형태의 list형 변수 category선언
category = adminService.category();
//DB에 저장된 카테고리를 가져와서 category에 저장
model.addAttribute("category", JSONArray.fromObject(category));
//변수 카테고리를 제이슨 타입으로 변환하여 카테고리 세션에 부여
	}
		
	//상품등록 post
	@PostMapping("/goods/register")
	public String postGoodsRegister(GoodsVO vo, MultipartFile file) throws Exception{
//멀티파일을 사용할 경우
//이미지를 업로드할 폴더를 설정 = 
String imgUploadPath = uploadPath + File.separator + "imgUpload";
String ymdPath = UploadFileUtils.calcPath(imgUploadPath);//위의 폴더를 기준으로 연원일 폴더를 생성
String fileName = null;

//첨부파일이 없이 올리는 것도 고려를 해야합니다
if(file.getOriginalFilename() != null && file.getOriginalFilename() != "") {
	fileName = UploadFileUtils.fileUpload(imgUploadPath, file.getOriginalFilename(), file.getBytes(), ymdPath);
	//원본파일경로 + 파일명 저장
	vo.setcontents_poster_img(File.separator + "imgUpload" + ymdPath + File.separator + fileName);
	//썸네일
vo.setcontents_thumb_img(File.separator + "imgUpload" + ymdPath + File.separator +"s"+File.separator+"s_" +fileName);	
}else {//첨부된 파일이 없으면 
//미리 업로드 시켜놓은 none.png파일을 대신 출력
	fileName = File.separator + "images" + File.separator + "none.png";
	vo.setcontents_poster_img(fileName);
	vo.setcontents_thumb_img(fileName);
}


		adminService.register(vo);
		
		return "redirect:/admin/index";
	}
	
	//상품 목록
	@GetMapping(value="/goods/list")
	public void getGoodsList(Model model) throws Exception{
logger.info("상품 리스트 출력");
List<GoodsViewVO>list = adminService.goodslist();// GoodsVO형태의 List형 변수 list 선언
model.addAttribute("list",list);
	}
	
//상품조회 1)리스트에서 리스트 글들중에 제목을 선택하는데 그제목에 해당글에 순번이 랩핑 2)랩핑된걸로 요청 3)순번에 맞는 read page 보여줌
	@GetMapping(value="/goods/view")
	public void getGoodsview(@RequestParam("n") int contents_id, Model model)throws Exception{
logger.info("상세페이지");
//리턴시킬 변수 정의
GoodsViewVO goods = adminService.goodsView(contents_id);
model.addAttribute("goods", goods);

	}
	
//ck에디터에서 파일 업로드
@PostMapping(value="/goods/ckUpload")
public void postCKEditorImgUpload(HttpServletRequest req, HttpServletResponse res, @RequestParam MultipartFile upload)throws Exception{
	logger.info("우리가 개발했지만 ck에디터에 첨부파일에 등록을 하고싶다면 이메소드를 사용하세요");
	//랜덤문자 생성
	UUID uid = UUID.randomUUID();
	
	OutputStream out = null;
	PrintWriter printWriter = null;//태그나 스크립트를 자바구문에서 사용할때
	
	//태그를 작성하고 한글이 나올때는 한글깨짐을 방지하기 위해서 아래를 사용
	res.setCharacterEncoding("utf-8");
	res.setContentType("text/html; charset=utf-8");
	
	try {
String fileName = upload.getOriginalFilename(); //파일 이름 가져오기
byte[] bytes = upload.getBytes();
//업로드 경로
String ckUploadPath = uploadPath + File.separator + "ckUpload" + File.separator + uid + "_" + fileName;
out = new FileOutputStream(new File(ckUploadPath));
out.write(bytes);
out.flush();//out에 저장된 데이터를 전송하고 초기화

String callback = req.getParameter("CKEditorFuncNum");
printWriter = res.getWriter();
String fileUrl = "/ckUpload/" + uid + "_" +fileName;//작성 화면
//업로드시 메세지 출력
printWriter.println("<script> "
+ "window.parent.CKEDITOR.tools.callFunction("
+ callback +",'"+ fileUrl +"','이미지를 업로드 하였습니다')"
+ "</script>");
printWriter.flush();
	}catch(IOException e) {
		e.printStackTrace();
	}finally {
		try {
if(out != null) {out.close();}
if(printWriter != null) {printWriter.close();}
		}catch(IOException e) {
			e.printStackTrace();
		}
	}
	return;	
}


//상품수정 1)수정할 글을 불러온다 2)그 순번에 맞는 글을 수정한다
@GetMapping(value="/goods/modify")
public void getGoodsModify(@RequestParam("n") int contents_id, Model model) throws Exception{
//@RequestParam("n")으로 인해, URL주소에 있는 n의 값을 가져와 contents_id에 저장
	logger.info("수정페이지 진입");
	//GoodsViewVO변수에 goods상품정보를 저장
	GoodsViewVO goods = adminService.goodsView(contents_id);
	model.addAttribute("goods",goods);
	//카테고리 내용을 가져와야 함
	List<CategoryVO> category = null;
	category = adminService.category();
	model.addAttribute("category", JSONArray.fromObject(category));
	
	//add
	List<CategoryVO> categoryVO = adminService.category();
	model.addAttribute("categoryVO", categoryVO);
	
}

//실제적으로 상품 내용을 수정 변수 상품을 수정하는데 기존이미지를 수정할수도 있고 그대로 사용할수도 있음
@PostMapping(value="/goods/modify")
public String postGoodsModify(GoodsVO vo, MultipartFile file, HttpServletRequest req) throws Exception{
	logger.info("상품 수정");
	//새로운 파일이 등록되었는지 확인
	if(file.getOriginalFilename() != null && file.getOriginalFilename() != "") {
		//1)기존 파일을 삭제 (이미지와 썸이미지를 둘다삭제)
		new File(uploadPath + req.getParameter("contents_poster_img")).delete();
		new File(uploadPath + req.getParameter("contents_thumb_img")).delete();
		//2)새로 첨부한 파일을 등록
		String imgUploadPath = uploadPath + File.separator + "imgUpload";
		String ymdPath = UploadFileUtils.calcPath(imgUploadPath);
		String fileName = UploadFileUtils.fileUpload(imgUploadPath, file.getOriginalFilename(), file.getBytes(), ymdPath);
vo.setcontents_poster_img(File.separator + "imgUpload" + ymdPath + File.separator + fileName);
//2025\02\17\666cccc-nnnn-.jpg
vo.setcontents_thumb_img(File.separator+ "imgUpload" + ymdPath + File.separator+ "s"+File.separator +"s_"+ fileName);
//2025\02\17\s\s_666cccc-nnnn-.jpg
	}else {//새로운 파일이 등록되지 않았다면 기존 이미지를 그대로 사용
vo.setcontents_poster_img(req.getParameter("contents_poster_img"));
vo.setcontents_thumb_img(req.getParameter("contents_thumb_img"));
	}
	adminService.goodsModify(vo);
	return "redirect:/admin/index";
}

//상품삭제
@PostMapping(value="/goods/delete")
public String postGoodsDelete(@RequestParam("n") int contents_id) throws Exception{
	logger.info("상품삭제");
	adminService.goodsDelete(contents_id);
	return "redirect:/admin/index";
}

//주문 목록 : 상태변경은 어드민에서 해준다, 주문목록이 
@GetMapping("/shop/orderList")//스프링 4.0이상일때 get과 post 매핑 사용가능
//@RequestMapping()
public void getOrderList(Model model)throws Exception{
	logger.info("관리자에서 확인하는 이사이트에 모든 소비자 주문목록 진입");
	List<OrderVO> orderList = adminService.orderList();
	model.addAttribute("orderList",orderList);
}

//주문 상세 목록
@GetMapping("/shop/orderView")
public void getOrderList(@RequestParam("n") String orderId, Model model, OrderVO order)throws Exception{
	logger.info("소비자 주문에 상세페이지");
	
	order.setOrderId(orderId);
	List<OrderListVO> orderView = adminService.orderView(order);
	
	model.addAttribute("orderView", orderView);
}

//주문 상세 목록 - 상태변경 => 배송중 배송준비중 배송완료
@PostMapping("/shop/orderView")
public String delivery(OrderVO order) throws Exception{
	logger.info("배송상태 설정창 진입");
	adminService.delivery(order);
	//기존 서비스 사용
	List<OrderListVO> orderView = adminService.orderView(order);
	//콘스트럭터 생성자 사용
	GoodsVO goods = new GoodsVO();
	
	for(OrderListVO i : orderView) {
		goods.setcontents_id(i.getcontents_id());
		goods.setGdsStock(i.getCartStock());
		adminService.changeStock(goods);
	}
	
	return "redirect:/admin/shop/orderView?n=" + order.getOrderId();
}
//모든 소감(댓글)
@GetMapping("shop/allReply")
public void getAllReply(Model model)throws Exception{
	logger.info("소비자가 쓴 모든 댓글");
	List<ReplyListVO> reply = adminService.allReply();
	model.addAttribute("reply", reply);
}

@PostMapping("shop/allReply")
public String postAllReply(ReplyVO reply)throws Exception{
	logger.info("소비자가 쓴 모든 댓글 삭제");
	adminService.deleteReply(reply.getRepNum());
	return "redirect:/admin/shop/allReply";
}	



	
	

}
