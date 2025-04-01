package com.my.shop.vo;

import java.util.Date;

public class ReplyListVO {

	private int contents_id, repNum;
	private String userId, repCon, userName;
	private Date repDate;
	
	public int getcontents_id() {
		return contents_id;
	}
	public void setcontents_id(int contents_id) {
		this.contents_id = contents_id;
	}
	public int getRepNum() {
		return repNum;
	}
	public void setRepNum(int repNum) {
		this.repNum = repNum;
	}
	public String getUserId() {
		return userId;
	}
	public void setUserId(String userId) {
		this.userId = userId;
	}
	public String getRepCon() {
		return repCon;
	}
	public void setRepCon(String repCon) {
		this.repCon = repCon;
	}
	public String getUserName() {
		return userName;
	}
	public void setUserName(String userName) {
		this.userName = userName;
	}
	public Date getRepDate() {
		return repDate;
	}
	public void setRepDate(Date repDate) {
		this.repDate = repDate;
	}
	
	
}
