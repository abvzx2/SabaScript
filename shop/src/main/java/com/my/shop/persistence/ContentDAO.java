package com.my.shop.persistence;

import com.my.shop.vo.GoodsViewVO;

public interface ContentDAO {

	public GoodsViewVO goodsView(int gdsNum)throws Exception;
}
