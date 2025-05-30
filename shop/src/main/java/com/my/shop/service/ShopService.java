package com.my.shop.service;

import java.util.List;

import com.my.shop.vo.CartListVO;
import com.my.shop.vo.CartVO;
import com.my.shop.vo.GoodsViewVO;
import com.my.shop.vo.OrderDetailVO;
import com.my.shop.vo.OrderListVO;
import com.my.shop.vo.OrderVO;
import com.my.shop.vo.QnaVO;
import com.my.shop.vo.ReplyListVO;
import com.my.shop.vo.ReplyVO;

public interface ShopService {
	
	// 콘텐츠별 상품 리스트
	public List<GoodsViewVO> list(int contents_category_code, int level) throws Exception;

	// 상품 조회
	public GoodsViewVO goodsView(int contents_id) throws Exception;

	// 댓글 등록
	public void registReply(ReplyVO reply) throws Exception;

	// 댓글 리스트
	public List<ReplyListVO> replyList(int contents_id) throws Exception;

	// 댓글 삭제
	public void deleteReply(ReplyVO reply) throws Exception;

	// 아이디 체크
	public String idCheck(int repNum) throws Exception;

	// 댓글 수정
	public void modifyReply(ReplyVO reply) throws Exception;

	// 장바구니 추가
	public void addCart(CartVO cart) throws Exception;

	// 장바구니 리스트
	public List<CartListVO> cartList(String userId) throws Exception;
	
	// 카트 삭제
	public void deleteCart(CartVO cart) throws Exception;
	
	//주문정보
	public void orderInfo(OrderVO order) throws Exception;
	
	//주문상세정보
	public void orderInfo_Details(OrderDetailVO orderDetail)throws Exception;
	
	//카트비우기
	public void cartAllDelete(String userId) throws Exception;
	
	//오더리스트
	public List<OrderVO> orderList(OrderVO order)throws Exception;
	
	//오더뷰
	public List<OrderListVO> orderView(OrderVO order) throws Exception;
	
	//좋아요 콘텐츠 선별
	List<Integer> getLikedGoodsNums(String userId) throws Exception;
	
	//좋아요 상태 확인
	boolean toggleLike(String userId, int contents_id) throws Exception;
	
	//QnA 등록
	public void registQna(QnaVO qna) throws Exception;
	
	
	
	
	

}
