package com.my.shop.controller;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;

@Controller
@RequestMapping("/test/*")
public class TestController {

	//관리자 메인
		@GetMapping("/index")//admin/index
		public void getIndex() throws Exception{
			
		}
}
