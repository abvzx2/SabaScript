package com.my.shop.vo;

import java.util.Date;

public class CartVO {

	private int cartNum, contents_id, cartStock;
	private String userId;
	private Date addDate;
	
	// Getter
	public int getCartNum() { return cartNum; }
	public int getContents_id() { return contents_id; }
	public int getCartStock() { return cartStock; }
	public String getUserId() { return userId; }
	public Date getAddDate() { return addDate; }

	// Setter
	public void setCartNum(int cartNum) { this.cartNum = cartNum; }
	public void setContents_id(int contents_id) { this.contents_id = contents_id; }
	public void setCartStock(int cartStock) { this.cartStock = cartStock; }
	public void setUserId(String userId) { this.userId = userId; }
	public void setAddDate(Date addDate) { this.addDate = addDate; }
	
}
