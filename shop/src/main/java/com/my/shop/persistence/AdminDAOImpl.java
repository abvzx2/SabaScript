package com.my.shop.persistence;

import java.util.List;

import javax.inject.Inject;

import org.apache.ibatis.session.SqlSession;
import org.springframework.stereotype.Repository;

import com.my.shop.vo.CategoryVO;
import com.my.shop.vo.GoodsVO;
import com.my.shop.vo.GoodsViewVO;
import com.my.shop.vo.OrderListVO;
import com.my.shop.vo.OrderVO;
import com.my.shop.vo.ReplyListVO;

@Repository
public class AdminDAOImpl implements AdminDAO {
	
	@Inject
	private SqlSession sql;
	
	//매퍼
	private static String namespace="com.my.shop.mappers.adminMapper";
	
//카테고리
	@Override
	public List<CategoryVO> category() throws Exception {
		return sql.selectList(namespace + ".category");
	}

//상품등록
	@Override
	public void register(GoodsVO vo) throws Exception {
		sql.insert(namespace + ".register", vo);
	}

	@Override//list
	public List<GoodsViewVO> goodslist() throws Exception {
		return sql.selectList(namespace + ".goodslist");
	}

	@Override//view
	public GoodsViewVO goodsView(int contents_id) throws Exception {
		return sql.selectOne(namespace + ".goodsView", contents_id);
	}

	@Override//modify
	public void goodsModify(GoodsVO vo) throws Exception {
		sql.update(namespace + ".goodsModify", vo);
		
	}

	@Override//delete
	public void goodsDelete(int contents_id) throws Exception {
		sql.delete(namespace + ".goodsDelete", contents_id);
		
	}

	@Override
	public List<OrderVO> orderList() throws Exception {
		return sql.selectList(namespace + ".orderList");
	}

	@Override
	public List<OrderListVO> orderView(OrderVO order) throws Exception {
		return sql.selectList(namespace + ".orderView", order);
	}

	@Override
	public void delivery(OrderVO order) throws Exception {
		sql.update(namespace + ".delivery", order);
	}

	@Override
	public void changeStock(GoodsVO goods) throws Exception {
		sql.update(namespace + ".changeStock", goods);
		
	}

	@Override
	public List<ReplyListVO> allReply() throws Exception {
		return sql.selectList(namespace + ".allReply");
	}

	@Override
	public void deleteReply(int repNum) throws Exception {
		sql.delete(namespace + ".deleteReply", repNum);
	}

}
