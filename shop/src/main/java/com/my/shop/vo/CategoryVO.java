package com.my.shop.vo;

public class CategoryVO {
	
	private String cateName;
	private String contents_category_code;
	private String catecodeRef;
	private int level;
	


	//getter
	public String getCateName() {return cateName;}
	public String getcontents_category_code() {return contents_category_code;}
	public String getcatecodeRef() {return catecodeRef;}
	public int getLevel() {return level;}
	//setter
	public void setCateName(String cateName) {this.cateName = cateName;}
	public void setcontents_category_code(String contents_category_code) {this.contents_category_code = contents_category_code;}
	public void setcatecodeRef(String catecodeRef) {this.catecodeRef = catecodeRef;}
	public void setLevel(int level) {this.level = level;}

	

}
