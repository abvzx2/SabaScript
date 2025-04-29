package com.my.shop.vo;

import java.util.Date;

public class QnaVO {

	private String userId, qnaTitle, contents_category_code;
	private int qnaNum;
	private Date qnaDate;
	
	public String getUserId() {
		return userId;
	}
	public void setUserId(String userId) {
		this.userId = userId;
	}
	public String getQnaTitle() {
		return qnaTitle;
	}
	public void setQnaTitle(String qnaTitle) {
		this.qnaTitle = qnaTitle;
	}
	public String getContents_category_code() {
		return contents_category_code;
	}
	public void setContents_category_code(String contents_category_code) {
		this.contents_category_code = contents_category_code;
	}
	public int getQnaNum() {
		return qnaNum;
	}
	public void setQnaNum(int qnaNum) {
		this.qnaNum = qnaNum;
	}
	public Date getQnaDate() {
		return qnaDate;
	}
	public void setQnaDate(Date qnaDate) {
		this.qnaDate = qnaDate;
	}
}
