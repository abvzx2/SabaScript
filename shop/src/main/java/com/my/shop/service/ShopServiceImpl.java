package com.my.shop.service;

import java.util.List;

import javax.inject.Inject;

import org.springframework.stereotype.Service;

import com.my.shop.persistence.ShopDAO;
import com.my.shop.vo.CartListVO;
import com.my.shop.vo.CartVO;
import com.my.shop.vo.GoodsViewVO;
import com.my.shop.vo.OrderDetailVO;
import com.my.shop.vo.OrderListVO;
import com.my.shop.vo.OrderVO;
import com.my.shop.vo.QnaVO;
import com.my.shop.vo.ReplyListVO;
import com.my.shop.vo.ReplyVO;

@Service // 실제 서비스로 등록되는 클래스
public class ShopServiceImpl implements ShopService {

    @Inject // 의존성 주입
    private ShopDAO dao;
    
    @Override // 받은 데이터를 조건에 따라 처리
    public List<GoodsViewVO> list(int contents_category_code, int level) throws Exception {
        int catecodeRef = 0; // 콘텐츠 카테고리 참조 코드
        /* 1차 분류와 2차 분류를 구분해서 처리 */
        if (level == 1) { // 1차 분류
            catecodeRef = contents_category_code;
            return dao.list(contents_category_code, catecodeRef);
        } else { // 2차 분류
            return dao.list(contents_category_code);
        }
    }

    @Override // 상품 조회
    public GoodsViewVO goodsView(int contents_id) throws Exception {
        return dao.goodsView(contents_id);
    }

    @Override // 댓글 등록
    public void registReply(ReplyVO reply) throws Exception {
        dao.registReply(reply);        
    }

    @Override // 댓글 리스트
    public List<ReplyListVO> replyList(int contents_id) throws Exception {
        return dao.replyList(contents_id);
    }

    @Override // 댓글 삭제
    public void deleteReply(ReplyVO reply) throws Exception {
        dao.deleteReply(reply);        
    }

    @Override // 아이디 체크
    public String idCheck(int repNum) throws Exception {
        return dao.idCheck(repNum);
    }

    @Override // 댓글 수정
    public void modifyReply(ReplyVO reply) throws Exception {
        dao.modifyReply(reply);        
    }

    @Override // 장바구니 추가
    public void addCart(CartVO cart) throws Exception {
        dao.addCart(cart);
    }

    @Override // 장바구니 리스트
    public List<CartListVO> cartList(String userId) throws Exception {
        return dao.cartList(userId);
    }
	
	// 카트 삭제
	@Override
	public void deleteCart(CartVO cart) throws Exception {
		dao.deleteCart(cart);
	}


	@Override//주문정보
	public void orderInfo(OrderVO order) throws Exception {
		dao.orderInfo(order);		
	}

	@Override//주문 상세 정보
	public void orderInfo_Details(OrderDetailVO orderDetail) throws Exception {
		dao.orderInfo_Details(orderDetail);	
	}

	@Override
	public void cartAllDelete(String userId) throws Exception {
	   dao.cartAllDelete(userId);
	}

	@Override
	public List<OrderVO> orderList(OrderVO order) throws Exception {
		return dao.orderList(order);
	}

	@Override
	public List<OrderListVO> orderView(OrderVO order) throws Exception {
		return dao.orderView(order);
	}

	@Override//좋아요-리스트
	public List<Integer> getLikedGoodsNums(String userId) throws Exception {
		return dao.getLikedGoodsNums(userId);
	}
	
	@Override//좋아요-뷰
	public boolean toggleLike(String userId, int contents_id) throws Exception {
		int check = dao.checkLike(userId, contents_id);
		if(check == 0) {
			dao.insertLike(userId, contents_id);
			dao.incrementLikes(contents_id);
			return true;
		}else {
			dao.deleteLike(userId, contents_id);
			dao.decrementLikes(contents_id);
			return false;
		}
	}

	@Override
	public void registQna(QnaVO qna) throws Exception {
		dao.registQna(qna);
		
	}
	
	
	
	
	
	
	
	
	

}
