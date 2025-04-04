package com.my.shop.controller;

import java.text.DecimalFormat;
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
import com.my.shop.vo.ReplyListVO;
import com.my.shop.vo.ReplyVO;

@Controller
@RequestMapping("/shop/*")
public class ShopController {
	
	private static final Logger logger = LoggerFactory.getLogger(ShopController.class);
	
	@Inject
	ShopService service;


	
//	//카테고리蹂� �긽�뭹리스트
//	@GetMapping("/list")
//	public void getList(@RequestParam("c") int contents_category_code, @RequestParam("l") int level, Model model)throws Exception{
//		logger.info("�냼鍮꾩옄 �럹�씠吏� 진입");
//		List<GoodsViewVO> list = null;
//		list = service.list(contents_category_code, level);
//		model.addAttribute("list",list);
//	}
//	
//	//�긽�뭹조회
//	@GetMapping("/view")
//	public void getView(@RequestParam("n") int contents_id, Model model) throws Exception{
//		logger.info("get view");
//		
//		GoodsViewVO view = service.goodsView(contents_id);
//		model.addAttribute("view",view);
//	}
	
	//�뙎湲��벐湲�
	//酉곕�� �넻�빐 �젋�뜑留� �릺吏� �븡怨� �겢�씪�씠�뼵�듃�뿉寃� 吏곸젒�쟾�떖
	@ResponseBody
	@PostMapping(value="/view/registReply")
	public void registReply(ReplyVO reply, HttpSession session)throws Exception{
		logger.info("regist reply");
		//濡쒓렇�씤 �꽭�뀡(�쎒�뿉�꽌 �궗�슜�옄媛� 媛�吏��뒗 uri)
		MemberVO member = (MemberVO)session.getAttribute("member");
		reply.setUserId(member.getUserId());
		//서비스 로직
		//public void registReply(ReplyVO reply)throws Exception;
		service.registReply(reply);//湲곗궗�궛�뾽湲곗궗�뿉 �젙�쓽�븯�뒗 愿��젏�뿉�꽌�뒗 �겢�옒�뒪�� �겢�옒�뒪�궗�씠瑜� �뿰寃고븯�뒗 媛�援� �뿭�븷�쓣 �븯�뒗寃�
		//�옄諛붾쭔�뿉 愿��젏�쑝濡쒕뒗 諛붾뵒媛� �뾾�뒗 援ы쁽泥�  �몢�쓬踰뺤튃 �떒�쐞�뀒�뒪�듃 �넻�빀 �떆�씤
	}
//�뙎湲�리스트 로직�뿉�꽌 由ы꽩�쓣 �궗�슜�븯�뒗 3紐� (list,read, 0=�삤瑜�, 1=�꽦怨�, -1=�꽕�듃�썙�겕 �삤瑜�(�겕由ъ뿉�씠�듃�� �뵜由ы듃)
	@ResponseBody
	@GetMapping(value="/view/replyList")
public List<ReplyListVO> getReplyList(@RequestParam("n") int contents_id) throws Exception{
		logger.info("리플 리스트 진입");
List<ReplyListVO> reply = service.replyList(contents_id);
return reply;
	}
	
	//�뙎湲��궘�젣 濡쒓렇�씤�븳 �븘�씠�뵒�� �냼媛먯쓣 �옉�꽦�븳 �븘�씠�뵒 鍮꾧탳 �몮�떎�씪移섑븯硫� �궘�젣 洹몃젃吏� �븡�쑝硫� �떎�뙣
	@ResponseBody
	@PostMapping(value="/view/deleteReply")
public int getReplyList(ReplyVO reply, HttpSession session) throws Exception{
//�젙�긽�옉�룞 �뿬遺�瑜� �솗�씤�븯湲� �쐞�븳 蹂��닔
int result = 0; 

MemberVO member = (MemberVO)session.getAttribute("member");
//�뙎湲��쓣 �옉�꽦�븳 �궗�슜�옄�쓽 �븘�씠�뵒瑜� 媛��졇�샂
String userId = service.idCheck(reply.getRepNum()); //�쁽�옱�젒�냽�븳 id vs �뙎湲��쓣 �벖 �븘�씠�뵒

//�븘�씠�뵒 鍮꾧탳
if(member.getUserId().equals(userId)) {//濡쒓렇�씤�븳 �븘�씠�뵒媛� �옉�꽦�븳 �븘�씠�뵒�� 媛숇떎硫�
	
	reply.setUserId(member.getUserId());//reply�뿉 userId���옣
	service.deleteReply(reply);//서비스 메서드 �떎�뻾
	
	result = 1;//�꽦怨�
}
//�븯�굹留� oneway ,option
return result; //�븘�씠�뵒媛� �씪移섑븯硫� �궘�젣 洹몃젃吏� �븡�쑝硫� �븞�궘�젣
	}
	
	//�븘�씠�뵒 泥댄겕
//�뙎湲��닔�젙
	@ResponseBody
	@PostMapping(value="/view/modifyReply")	
public int modifyReply(ReplyVO reply, HttpSession session)throws Exception{

int result = 0;
MemberVO member = (MemberVO)session.getAttribute("member");
String userId = service.idCheck(reply.getRepNum());

if(member.getUserId().equals(userId)) {//濡쒓렇�씤�븳 �븘�씠�뵒媛� �옉�꽦�븳 �븘�씠�뵒�� 媛숇떎硫�
	
	reply.setUserId(member.getUserId());//reply�뿉 userId���옣
	service.modifyReply(reply);//서비스 메서드 �떎�뻾	
	result = 1;//�꽦怨�
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

	
	
	
	
	
	
	
	
	
	
	
	
}
