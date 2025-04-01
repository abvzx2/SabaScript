package com.my.shop.vo;

import java.util.Date;

public class GoodsVO {

	private int contents_id;
	private String contents_title;
	private String contents_category_code; 
	private int gdsPrice;
	private int gdsStock;
	private String contents_description;
	private String contents_poster_img;
	private String contents_thumb_img;
	private String contents_video_url;
	
	
	public String getcontents_video_url() {
		return contents_video_url;
	}
	public void setcontents_video_url(String contents_video_url) {
		this.contents_video_url = contents_video_url;
	}
	public String getcontents_thumb_img() {
		return contents_thumb_img;
	}
	public void setcontents_thumb_img(String contents_thumb_img) {
		this.contents_thumb_img = contents_thumb_img;
	}
	private Date contents_created_at;
	public int getcontents_id() {
		return contents_id;
	}
	public void setcontents_id(int contents_id) {
		this.contents_id = contents_id;
	}
	public String getcontents_title() {
		return contents_title;
	}
	public void setcontents_title(String contents_title) {
		this.contents_title = contents_title;
	}
	public String getcontents_category_code() {
		return contents_category_code;
	}
	public void setcontents_category_code(String contents_category_code) {
		this.contents_category_code = contents_category_code;
	}
	public int getGdsPrice() {
		return gdsPrice;
	}
	public void setGdsPrice(int gdsPrice) {
		this.gdsPrice = gdsPrice;
	}
	public int getGdsStock() {
		return gdsStock;
	}
	public void setGdsStock(int gdsStock) {
		this.gdsStock = gdsStock;
	}
	public String getcontents_description() {
		return contents_description;
	}
	public void setcontents_description(String contents_description) {
		this.contents_description = contents_description;
	}
	public String getcontents_poster_img() {
		return contents_poster_img;
	}
	public void setcontents_poster_img(String contents_poster_img) {
		this.contents_poster_img = contents_poster_img;
	}
	public Date getcontents_created_at() {
		return contents_created_at;
	}
	public void setcontents_created_at(Date contents_created_at) {
		this.contents_created_at = contents_created_at;
	}
	
	
	
	
	
	
}
