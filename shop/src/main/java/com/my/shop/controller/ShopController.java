package com.my.shop.controller;

import java.text.DecimalFormat;
import java.util.ArrayList;
import java.util.Calendar;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

import javax.inject.Inject;
import javax.servlet.http.HttpSession;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.ResponseBody;

import com.my.shop.service.ShopService;
import com.my.shop.vo.CartListVO;
import com.my.shop.vo.CartVO;
import com.my.shop.vo.GoodsViewVO;
import com.my.shop.vo.MemberVO;
import com.my.shop.vo.OrderDetailVO;
import com.my.shop.vo.OrderListVO;
import com.my.shop.vo.OrderVO;
import com.my.shop.vo.QnaVO;
import com.my.shop.vo.ReplyListVO;
import com.my.shop.vo.ReplyVO;

@Controller
@RequestMapping("/shop/*")
public class ShopController {
	
	private static final Logger logger = LoggerFactory.getLogger(ShopController.class);
	
	@Inject
	ShopService service;
	
	
	// 카테고리별 상품 리스트
	// @GetMapping("/list")
	// public void getList(@RequestParam("c") int contents_category_code, @RequestParam("l") int level, Model model) throws Exception {
//	     logger.info("쇼핑몰 페이지 진입");
//	     List<GoodsViewVO> list = null;
//	     list = service.list(contents_category_code, level);
//	     model.addAttribute("list", list);
	// }

	// 상품 조회
	// @GetMapping("/view")
	// public void getView(@RequestParam("n") int contents_id, Model model) throws Exception {
//	     logger.info("get view");

//	     GoodsViewVO view = service.goodsView(contents_id);
//	     model.addAttribute("view", view);
	// }

	// 댓글 등록
	// Ajax를 통해 전송되며 클라이언트에 바로 전달
	@ResponseBody
	@PostMapping(value = "/view/registReply")
	public void registReply(ReplyVO reply, HttpSession session) throws Exception {
	    logger.info("regist reply");
	    // 로그인 세션(서버에서 사용자 정보 가져오는 uri)
	    MemberVO member = (MemberVO) session.getAttribute("member");
	    reply.setUserId(member.getUserId());
	    // 서비스 로직
	    // public void registReply(ReplyVO reply) throws Exception;
	    service.registReply(reply); 
	    // 데이터베이스 트랜잭션 단위에서 클래스와 클래스 사이를 연결하는 역할을 함
	    // 자바 단위로 보면 트랜잭션이 없지만, 두 번째 타임스탬프 단위 테스트에서 확인
	}

	// 댓글 리스트 로직에서 반환하는 3가지 상태 (list, read, 0=오류, 1=성공, -1=권한없음(클라이언트가 잘못된 요청))
	@ResponseBody
	@GetMapping(value = "/view/replyList")
	public List<ReplyListVO> getReplyList(@RequestParam("n") int contents_id) throws Exception {
	    logger.info("리플 리스트 진입");
	    List<ReplyListVO> reply = service.replyList(contents_id);
	    return reply;
	}

	// 댓글 삭제
	// 로그인한 아이디와 작성한 아이디를 비교해 일치하면 삭제, 그렇지 않으면 실패
	@ResponseBody
	@PostMapping(value = "/view/deleteReply")
	public int deleteReply(ReplyVO reply, HttpSession session) throws Exception {
	    int result = 0;

	    MemberVO member = (MemberVO) session.getAttribute("member");
	    // 댓글을 작성한 사용자의 아이디를 가져옴
	    String userId = service.idCheck(reply.getRepNum()); // 현재 로그인한 id vs 댓글 작성자 id

	    // 아이디 검증
	    if (member.getUserId().equals(userId)) { // 로그인한 아이디가 작성자 아이디와 같다면
	        reply.setUserId(member.getUserId()); // reply에 userId 저장
	        service.deleteReply(reply); // 서비스 메서드 실행
	        result = 1; // 성공
	    }
	    // oneway, option 둘 다 처리
	    return result; // 아이디가 다르면 삭제 실패
	}

	// 아이디 체크
	// 댓글 수정
	@ResponseBody
	@PostMapping(value = "/view/modifyReply")
	public int modifyReply(ReplyVO reply, HttpSession session) throws Exception {
	    int result = 0;
	    MemberVO member = (MemberVO) session.getAttribute("member");
	    String userId = service.idCheck(reply.getRepNum());

	    if (member.getUserId().equals(userId)) { // 로그인한 아이디가 작성자 아이디와 같다면
	        reply.setUserId(member.getUserId()); // reply에 userId 저장
	        service.modifyReply(reply); // 서비스 메서드 실행
	        result = 1; // 성공
	    }
	    return result;
	}

	
	//카트 추가 RDBMS ORM
	@ResponseBody
	@PostMapping("/view/addCart")
	public void addCart(CartVO cart, HttpSession session)throws Exception{
		MemberVO member = (MemberVO)session.getAttribute("member");
		cart.setUserId(member.getUserId());
		
		service.addCart(cart);
	}
	
	//카트 목록
	@GetMapping("/cartList")
public void getCartList(HttpSession session, Model model) throws Exception {
		
		MemberVO member = (MemberVO)session.getAttribute("member");
		String userId = member.getUserId();
		
		List<CartListVO> cartList = service.cartList(userId);
		model.addAttribute("cartList", cartList);
		
	}
	//주문
	@PostMapping(value = "/cartList")
	public String order(HttpSession session, OrderVO order, OrderDetailVO orderDetail)throws Exception{
		logger.info("order");
		
		MemberVO member = (MemberVO)session.getAttribute("member");
		String userId = member.getUserId();
		
		//캘린더 호출
		Calendar cal = Calendar.getInstance();
		int year = cal.get(Calendar.YEAR); //연도 추출
		String ym = year + new DecimalFormat("00").format(cal.get(Calendar.MONTH) + 1);//월 추출
		String ymd = ym + new DecimalFormat("00").format(cal.get(Calendar.DATE));
		String subNum = "";//랜덤 숫자를 저장할 문자열 변수
		
		for(int i=1; i <= 6; i++) {
			subNum += (int)(Math.random() * 10);//0~9까지의 숫자를 생성하여 subNum에 저장
		}
		
		String orderId = ymd + "_" + subNum; //[연월일]_[랜덤숫자]로 구성된 문자
		
		order.setOrderId(orderId);
		order.setUserId(userId);
		
		service.orderInfo(order);
		
		orderDetail.setOrderId(orderId);
		service.orderInfo_Details(orderDetail);
		
		//주문테이블, 주문 상세 테이블에 데이터를 전송하고 카트비우기
		service.cartAllDelete(userId);
		
		return "redirect:/shop/orderList";
	}
	
	
	// 카트 삭제
	@ResponseBody
	@PostMapping(value = "/deleteCart")
	public int deleteCart(HttpSession session, @RequestParam(value = "chbox[]") List<String> chArr, CartVO cart) throws Exception {
		logger.info("delete cart");
		
		MemberVO member = (MemberVO)session.getAttribute("member");
		String userId = member.getUserId();
		
		int result = 0;
		int cartNum = 0;		
		
		// 로그인 여부 구분
		if(member != null) {
			cart.setUserId(userId);
			
			for(String i : chArr) {  // 에이젝스에서 받은 chArr의 갯수만큼 반복
				cartNum = Integer.parseInt(i);  // i번째 데이터를 cartNum에 저장
				cart.setCartNum(cartNum);
				service.deleteCart(cart);
			}			
			result = 1;
		}		
		return result;		
	}
	
	//주문목록
	@GetMapping("/orderList")
	public void getOrderList(HttpSession session, OrderVO order, Model model)throws Exception{
logger.info("orderlist");

MemberVO member = (MemberVO)session.getAttribute("member");
String userId = member.getUserId();

order.setUserId(userId);
List<OrderVO> orderList = service.orderList(order);
model.addAttribute("orderList", orderList);
	}
	
//주문상세목록 pk를 기준으로 글에 순번이 다르기 때문에 
	@GetMapping("/orderView")
public void getOrderList(HttpSession session, @RequestParam("n") String orderId, OrderVO order,  Model model)throws Exception{
logger.info("get order view");

MemberVO member = (MemberVO)session.getAttribute("member");
String userId = member.getUserId();

order.setUserId(userId);//pk
order.setOrderId(orderId);//pk

List<OrderListVO> orderView = service.orderView(order);
model.addAttribute("orderView", orderView);

	}
	
	//콘텐츠전체보기리스트
		@GetMapping("/list")
		public void getList(@RequestParam("c") int contents_category_code, @RequestParam("l") int level, Model model, HttpSession session)throws Exception {
			logger.info("소비자 페이지 진입");
			List<GoodsViewVO> list = null;
			list = service.list(contents_category_code, level);
			model.addAttribute("list",list);
			//유저가 좋아요한 콘텐츠 선별
			MemberVO member = (MemberVO) session.getAttribute("member");
			if (member != null) {
		        List<Integer> likedList = service.getLikedGoodsNums(member.getUserId());
		        model.addAttribute("likedList", likedList);
		    }
		}
		
		//콘텐츠상세보기뷰
		@GetMapping("/view")
		public void getView(@RequestParam("n") int contents_id, Model model, HttpSession session) throws Exception {
			logger.info("get view");
			
			GoodsViewVO view = service.goodsView(contents_id);
			model.addAttribute("view",view);
			//좋아요 상태 체크
			MemberVO member = (MemberVO) session.getAttribute("member");
			if (member != null) {
		        boolean liked = service.toggleLike(member.getUserId(), contents_id);
		        model.addAttribute("liked", liked);
		    }
		}
		//좋아요
		@ResponseBody
		@PostMapping("/toggleLike")
		public Map<String, Object> toggleLike(@RequestParam("contents_id") int contents_id, HttpSession session) throws Exception {
			Map<String, Object> result = new HashMap<>();
			MemberVO member = (MemberVO) session.getAttribute("member");
			
			if(member == null) {
				result.put("status","unauthenticated");
				return result;
			}
			boolean liked = service.toggleLike(member.getUserId(), contents_id);
			result.put("status", "ok");
			result.put("liked", liked);
			return result;
		}

		//스크랩
		@GetMapping("/scrap")
		public String getScrap(Model model, HttpSession session) throws Exception {
		    MemberVO member = (MemberVO) session.getAttribute("member");
		    
		    if (member == null) {
		        return "redirect:/member/signin";
		    }

		    List<Integer> likedIds = service.getLikedGoodsNums(member.getUserId());
		    List<GoodsViewVO> likedContents = new ArrayList<>();

		    for (int id : likedIds) {
		    	GoodsViewVO contents = service.goodsView(id);
		        likedContents.add(contents);
		    }

		    model.addAttribute("list", likedContents);
		    return "shop/scrap";
		}
	
		//list
		// QnA
		@GetMapping("/QnAList")
		public void getQnAList() throws Exception{
			logger.info("QnA 리스트 화면 진입");
		}
	
		// QnA
				@GetMapping("/QnA")
				public void getQnA() throws Exception{
					logger.info("QnA 등록 화면 진입");
				}
		
		
	//QnA 등록
		@ResponseBody
		@PostMapping(value = "/view/registQna")
		public void registQna(QnaVO qna, HttpSession session) throws Exception {
		    logger.info("regist QnA");
		    // 로그인 세션(서버에서 사용자 정보 가져오는 uri)
		    MemberVO member = (MemberVO) session.getAttribute("member");
		    qna.setUserId(member.getUserId());
		    // 서비스 로직
		    // public void registReply(ReplyVO reply) throws Exception;
		    service.registQna(qna); 
		    // 데이터베이스 트랜잭션 단위에서 클래스와 클래스 사이를 연결하는 역할을 함
		    // 자바 단위로 보면 트랜잭션이 없지만, 두 번째 타임스탬프 단위 테스트에서 확인
		}

	
	
	
	
	
	
	
}
