package com.my.shop.service;

import javax.inject.Inject;
import javax.servlet.http.HttpSession;

import org.springframework.stereotype.Service;

import com.my.shop.persistence.MemberDAO;
import com.my.shop.vo.MemberVO;

@Service//비즈니스 로직을 처리하는 클래스에 사용 비즈니스계층
public class MemberServiceImpl implements MemberService {
	
	@Inject
	private MemberDAO dao;

	@Override
	public void signup(MemberVO vo) throws Exception {
		dao.signup(vo);

	}
	
	//로그인
	@Override
	public MemberVO signin(MemberVO vo) throws Exception {
		return dao.signin(vo);
	}
	
	//로그아웃
	@Override
	public void signout(HttpSession session) throws Exception {
		session.invalidate();//세션 정보를 제거
	}
}
