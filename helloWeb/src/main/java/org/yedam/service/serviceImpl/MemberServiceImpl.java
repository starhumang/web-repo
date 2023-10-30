package org.yedam.service.serviceImpl;
// 6. 인터페이스를 상속받고 sql이랑 연결하는 곳
import java.sql.Connection;
import java.sql.PreparedStatement;
import java.sql.ResultSet;
import java.sql.SQLException;
import java.util.ArrayList;
import java.util.List;

import org.yedam.common.DataSource;
import org.yedam.service.MemberService;
import org.yedam.service.MemberVO;

public class MemberServiceImpl implements MemberService {
	DataSource dataSource = DataSource.getInstance();
	Connection conn ;
	PreparedStatement psmt;
	ResultSet rs;
	
	
	@Override
	public List<MemberVO> memberList(){
		List<MemberVO> members = new ArrayList<>();
		String sql = "select * from member";
		
		conn = dataSource.getConnection();
		try {
			psmt = conn.prepareStatement(sql);
			rs = psmt.executeQuery();
			while(rs.next()) {
				MemberVO vo = new MemberVO();
				vo.setMid(rs.getString("mid"));
				vo.setPass(rs.getString("pass"));
				vo.setName(rs.getString("name"));
				vo.setPhone(rs.getString("phone"));
				members.add(vo);
			}
			
		} catch (SQLException e) {
			e.printStackTrace();
		}finally {
			try {
				if(rs != null)
					rs.close();
				if(psmt !=null)
					psmt.close();
				if(conn !=null)
					conn.close();
				
			} catch (SQLException e) {
				e.printStackTrace();
			}
		}return members;
	}


	@Override
	public boolean addMember(MemberVO vo) {
		String sql = "insert into member values(?, ?, ?, ?)";
		conn = dataSource.getConnection();
		
		try {
			psmt = conn.prepareStatement(sql);
			psmt.setString(1, vo.getMid());
			psmt.setString(2, vo.getPass());
			psmt.setString(3, vo.getName());
			psmt.setString(4, vo.getPhone());
			
			int r = psmt.executeUpdate(); //반환값은 데이터 처리 건수
			if(r == 1) {
				return true;
			}
			
		} catch (SQLException e) {
			e.printStackTrace();
		
		}finally {
			try {
				if(rs != null)
					rs.close();
				if(psmt !=null)
					psmt.close();
				if(conn !=null)
					conn.close();
				
			} catch (SQLException e) {
				e.printStackTrace();
			}		
		}
		return false;
	}
	
	@Override
	public boolean modMember(MemberVO vo) {
		String sql = "UPDATE MEMBER SET PASS = ?, NAME = ?, PHONE = ? WHERE MID = ?";
		conn = dataSource.getConnection();
		try {
			psmt = conn.prepareStatement(sql);
			psmt.setString(1, vo.getPass());
			psmt.setString(2, vo.getName());
			psmt.setString(3, vo.getPhone());
			psmt.setString(4, vo.getMid());
			
			int r = psmt.executeUpdate(); //반환값은 데이터 처리 건수
			if(r == 1) {
				return true;
			}
			
		} catch (SQLException e) {
			e.printStackTrace();
		
		}finally {
			try {
				if(rs != null)
					rs.close();
				if(psmt !=null)
					psmt.close();
				if(conn !=null)
					conn.close();
				
			} catch (SQLException e) {
				e.printStackTrace();
			}		
		}
		return false;
	}
	
}// end class