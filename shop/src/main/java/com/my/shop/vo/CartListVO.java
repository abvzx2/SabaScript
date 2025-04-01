package com.my.shop.vo;

import java.util.Date;

public class CartListVO {

	private int cartNum, contents_id, cartStock, num, gdsPrice;
	private String userId, contents_title, contents_thumb_img;
	private Date addDate;
	public int getNum() {
		return num;
	}
	public void setNum(int num) {
		this.num = num;
	}
	public int getGdsPrice() {
		return gdsPrice;
	}
	public void setGdsPrice(int gdsPrice) {
		this.gdsPrice = gdsPrice;
	}
	public String getcontents_title() {
		return contents_title;
	}
	public void setcontents_title(String contents_title) {
		this.contents_title = contents_title;
	}
	public String getcontents_thumb_img() {
		return contents_thumb_img;
	}
	public void setcontents_thumb_img(String contents_thumb_img) {
		this.contents_thumb_img = contents_thumb_img;
	}

	
	public int getCartNum() {
		return cartNum;
	}
	public void setCartNum(int cartNum) {
		this.cartNum = cartNum;
	}
	public int getcontents_id() {
		return contents_id;
	}
	public void setcontents_id(int contents_id) {
		this.contents_id = contents_id;
	}
	public int getCartStock() {
		return cartStock;
	}
	public void setCartStock(int cartStock) {
		this.cartStock = cartStock;
	}
	public String getUserId() {
		return userId;
	}
	public void setUserId(String userId) {
		this.userId = userId;
	}
	public Date getAddDate() {
		return addDate;
	}
	public void setAddDate(Date addDate) {
		this.addDate = addDate;
	}
	
	
}
