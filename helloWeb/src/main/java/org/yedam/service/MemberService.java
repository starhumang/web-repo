package org.yedam.service;
// 5. 인터페이스
import java.util.List;

public interface MemberService {
	//회원목록 : memberList()
	public List<MemberVO> memberList(); 
	public boolean addMember(MemberVO vo);
	public boolean modMember(MemberVO vo);
}
