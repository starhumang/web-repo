package org.yedam.service.serviceImpl;

import java.sql.Connection;
import java.sql.PreparedStatement;
import java.sql.ResultSet;
import java.sql.SQLException;
import java.util.ArrayList;
import java.util.List;

import org.yedam.common.DataSource;
import org.yedam.service.BookService;
import org.yedam.service.BookVO;

public class BookServiceImpl implements BookService {
	DataSource dataSource = DataSource.getInstance();
	Connection conn;
	PreparedStatement psmt;
	ResultSet rs;
	
	
	@Override
	public List<BookVO> bookList() {
		List<BookVO> books = new ArrayList<>();
		String sql = "SELECT * FROM BOOK";
		
		conn = dataSource.getConnection();
		try {
			psmt = conn.prepareStatement(sql);
			rs = psmt.executeQuery();
			while(rs.next()) {
				BookVO bv = new BookVO();
				bv.setBOOK_CODE(rs.getString("CODE"));
				bv.setBOOK_TITLE(rs.getString("TITLE"));
				bv.setBOOK_AUTHOR(rs.getString("AUTHOR"));
				bv.setBOOK_PRESS(rs.getString("PRESS"));
				bv.setBOOK_PRICE(rs.getInt("PRICE"));
				books.add(bv);
			}
			
		} catch (SQLException e) {
			e.printStackTrace();
		}finally {
			try {
				if(rs !=null)
					rs.close();
				if(psmt !=null)
					psmt.close();
				if(conn !=null)
					conn.close();
				
			} catch (SQLException e) {
				e.printStackTrace();
			}
		}return books;
	}
}
