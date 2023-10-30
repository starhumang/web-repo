package org.yedam.service;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

// 4. SQL setter, getter

@Data//아래에 getter, setter 적는걸 모두 대체해줌
@AllArgsConstructor // 모든 필드의 값을 매개값으로 가지는 생성자가 만들어짐
@NoArgsConstructor //기본생성자를 만드는 법(안에 아무것도 없음)
public class MemberVO {
	private String mid;
	private String pass;
	private String name;
	private String phone;
	
	
	
	
//	public String getMid() {
//		return mid;
//	}
//	public void setMid(String mid) {
//		this.mid = mid;
//	}
//	public String getPass() {
//		return pass;
//	}
//	public void setPass(String pass) {
//		this.pass = pass;
//	}
//	public String getName() {
//		return name;
//	}
//	public void setName(String name) {
//		this.name = name;
//	}
//	public String getPhone() {
//		return phone;
//	}
//	public void setPhone(String phone) {
//		this.phone = phone;
//	}
//	
}
