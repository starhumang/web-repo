package org;
//7. 표형식을 만들어 넣은 곳
//JASON 데이터 방식으로 했음

import java.io.IOException;
import java.io.PrintWriter;
import java.util.List;

import javax.servlet.ServletException;
import javax.servlet.annotation.WebServlet;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import org.yedam.service.MemberService;
import org.yedam.service.MemberVO;
import org.yedam.service.serviceImpl.MemberServiceImpl;

/**
 * Servlet implementation class MemberListServ
 */
@WebServlet("/MemberListServ2")
public class MemberListServ2 extends HttpServlet {
	private static final long serialVersionUID = 1L;
       
    /**
     * @see HttpServlet#HttpServlet()
     */
    public MemberListServ2() {
        super();
        // TODO Auto-generated constructor stub
    }

	/**
	 * @see HttpServlet#doGet(HttpServletRequest request, HttpServletResponse response)
	 */
	protected void doGet(HttpServletRequest request, HttpServletResponse response) 
			throws ServletException, IOException {
		MemberService svc = new MemberServiceImpl();
		List<MemberVO> list = svc.memberList();
		System.out.println("JSON데이터 입니다..");
		
		response.setContentType("text/json;charset=utf-8");
		PrintWriter out = response.getWriter();
		//형식 예제 = [{"mid" : value, "pass" : value, "name" : value, "phone":value},{},{}]
		String str = "[";
		
		int cnt = 0;
		for(MemberVO vo : list) {
			str += "{";
			str += "\"mid\":\"" + vo.getMid() + "\",";
			str += "\"pass\":\"" + vo.getPass() + "\",";
			str += "\"name\":\"" + vo.getName() + "\",";
			str += "\"phone\":\"" + vo.getPhone() + "\"";
			str += "}";
			if(++cnt != list.size()) {
				str += ",";
			}
		}
		str += "]";	
		out.print(str);
	}

	/**
	 * @see HttpServlet#doPost(HttpServletRequest request, HttpServletResponse response)
	 */
	protected void doPost(HttpServletRequest request, HttpServletResponse response) 
			throws ServletException, IOException {
		// TODO Auto-generated method stub
		doGet(request, response);
	}

}
