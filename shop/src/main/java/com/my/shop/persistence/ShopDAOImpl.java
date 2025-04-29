package com.my.shop.persistence;

import java.util.HashMap;
import java.util.List;
import java.util.Map;

import javax.inject.Inject;

import org.apache.ibatis.session.SqlSession;
import org.springframework.stereotype.Repository;

import com.my.shop.vo.CartListVO;
import com.my.shop.vo.CartVO;
import com.my.shop.vo.GoodsViewVO;
import com.my.shop.vo.OrderDetailVO;
import com.my.shop.vo.OrderListVO;
import com.my.shop.vo.OrderVO;
import com.my.shop.vo.QnaVO;
import com.my.shop.vo.ReplyListVO;
import com.my.shop.vo.ReplyVO;

@Repository
public class ShopDAOImpl implements ShopDAO {

    @Inject
    private SqlSession sql; // SqlSession 주입

    // 매퍼 네임스페이스 정의
    private static String namespace = "com.my.shop.mappers.shopMapper";

    // 상품 리스트 (1차, 2차 분류 구분)
    @Override
    public List<GoodsViewVO> list(int contents_category_code, int catecodeRef) throws Exception {
        HashMap<String, Object> map = new HashMap<>();
        map.put("contents_category_code", contents_category_code);
        map.put("catecodeRef", catecodeRef);
        return sql.selectList(namespace + ".list_1", map);
    }

    @Override
    public List<GoodsViewVO> list(int contents_category_code) throws Exception {
        return sql.selectList(namespace + ".list_2", contents_category_code);
    }

    // 상품 상세 조회 (View Page)
    @Override
    public GoodsViewVO goodsView(int contents_id) throws Exception {
        return sql.selectOne("com.my.shop.mappers.adminMapper" + ".goodsView", contents_id);
    }

    // 댓글 등록
    @Override
    public void registReply(ReplyVO reply) throws Exception {
        sql.insert(namespace + ".registReply", reply);
    }

    // 댓글 리스트 조회
    @Override
    public List<ReplyListVO> replyList(int contents_id) throws Exception {
        return sql.selectList(namespace + ".replyList", contents_id);
    }

    // 댓글 삭제
    @Override
    public void deleteReply(ReplyVO reply) throws Exception {
        sql.delete(namespace + ".deleteReply", reply);
    }

    // 댓글 작성자 아이디 확인
    @Override
    public String idCheck(int repNum) throws Exception {
        return sql.selectOne(namespace + ".replyUserIdCheck", repNum);
    }

    // 댓글 수정
    @Override
    public void modifyReply(ReplyVO reply) throws Exception {
        sql.update(namespace + ".modifyReply", reply);
    }

    // 장바구니 추가
    @Override
    public void addCart(CartVO cart) throws Exception {
        sql.insert(namespace + ".addCart", cart);
    }

    // 장바구니 리스트 조회
    @Override
    public List<CartListVO> cartList(String userId) throws Exception {
        return sql.selectList(namespace + ".cartList", userId);
    }

    // 장바구니 항목 삭제
    @Override
    public void deleteCart(CartVO cart) throws Exception {
        sql.delete(namespace + ".deleteCart", cart);
    }

    /*
     * 주문 리스트 관련 SQL 처리
     * 1) 장바구니에서 주문 시 주문 리스트 생성
     * 2) 변심으로 주문 일부 삭제하거나 전체 삭제 가능
     */
    @Override
    public void orderInfo(OrderVO order) throws Exception {
        sql.insert(namespace + ".orderInfo", order);
    }

    @Override
    public void orderInfo_Details(OrderDetailVO orderDetail) throws Exception {
        sql.insert(namespace + ".orderInfo_Details", orderDetail);
    }

    @Override
    public void cartAllDelete(String userId) throws Exception {
        sql.delete(namespace + ".cartAllDelete", userId);
    }

    @Override
    public List<OrderVO> orderList(OrderVO order) throws Exception {
        return sql.selectList(namespace + ".orderList", order);
    }

    @Override
    public List<OrderListVO> orderView(OrderVO order) throws Exception {
        return sql.selectList(namespace + ".orderView", order);
    }

    // 좋아요 확인
    @Override
    public int checkLike(String userId, int contents_id) throws Exception {
        Map<String, Object> map = new HashMap<>();
        map.put("userId", userId);
        map.put("contents_id", contents_id);
        return sql.selectOne(namespace + ".checkLike", map);
    }

    // 좋아요 등록
    @Override
    public void insertLike(String userId, int contents_id) throws Exception {
        Map<String, Object> map = new HashMap<>();
        map.put("userId", userId);
        map.put("contents_id", contents_id);
        sql.insert(namespace + ".insertLike", map);
    }

    // 좋아요 삭제
    @Override
    public void deleteLike(String userId, int contents_id) throws Exception {
        Map<String, Object> map = new HashMap<>();
        map.put("userId", userId);
        map.put("contents_id", contents_id);
        sql.delete(namespace + ".deleteLike", map);
    }

    // 좋아요 수 증가
    @Override
    public void incrementLikes(int contents_id) throws Exception {
        sql.update(namespace + ".incrementLikes", contents_id);
    }

    // 좋아요 수 감소
    @Override
    public void decrementLikes(int contents_id) throws Exception {
        sql.update(namespace + ".decrementLikes", contents_id);
    }

    // 사용자가 좋아요한 콘텐츠 번호 리스트
    @Override
    public List<Integer> getLikedGoodsNums(String userId) throws Exception {
        return sql.selectList(namespace + ".getLikedGoodsNums", userId);
    }

    // Q&A 등록 (아직 구현 전)
    @Override
    public void registQna(QnaVO qna) throws Exception {
    	sql.insert(namespace + ".registQna", qna);
    }
    
    // QnA 카테고리
    
}