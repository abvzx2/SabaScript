package com.my.shop.persistence;

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

public interface ShopDAO {

    // 상품 리스트
    public List<GoodsViewVO> list(int contents_category_code, int catecodeRef) throws Exception;
    public List<GoodsViewVO> list(int contents_category_code) throws Exception;

    // 상품 상세 조회 (View Page)
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

    // 장바구니 항목 삭제
    public void deleteCart(CartVO cart) throws Exception;

    // 주문 등록
    public void orderInfo(OrderVO order) throws Exception;

    // 주문 상세 등록
    public void orderInfo_Details(OrderDetailVO orderDetail) throws Exception;

    // 장바구니 전체 삭제
    public void cartAllDelete(String userId) throws Exception;

    // 특정 주문 리스트
    public List<OrderVO> orderList(OrderVO order) throws Exception;

    // 특정 주문 상세 리스트 (주문 View)
    public List<OrderListVO> orderView(OrderVO order) throws Exception;

    // 좋아요 여부 확인
    public int checkLike(String userId, int contents_id) throws Exception;

    // 좋아요 추가
    public void insertLike(String userId, int contents_id) throws Exception;

    // 좋아요 삭제
    public void deleteLike(String userId, int contents_id) throws Exception;

    // 좋아요 수 증가
    public void incrementLikes(int contents_id) throws Exception;

    // 좋아요 수 감소
    public void decrementLikes(int contents_id) throws Exception;

    // 사용자가 좋아요한 콘텐츠 리스트
    public List<Integer> getLikedGoodsNums(String userId) throws Exception;
    
    // QnA 등록
    public void registQna(QnaVO qna) throws Exception;
}
