package org;

import java.io.IOException;
import java.io.PrintWriter;
import java.util.List;

import javax.servlet.ServletException;
import javax.servlet.annotation.WebServlet;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import org.yedam.service.BookService;
import org.yedam.service.BookVO;
import org.yedam.service.serviceImpl.BookServiceImpl;

/**
 * Servlet implementation class BookListServlet
 */
@WebServlet("/BookListServlet")
public class BookListServlet extends HttpServlet {
	private static final long serialVersionUID = 1L;
       
    /**
     * @see HttpServlet#HttpServlet()
     */
    public BookListServlet() {
        super();
        // TODO Auto-generated constructor stub
    }

	/**
	 * @see HttpServlet#doGet(HttpServletRequest request, HttpServletResponse response)
	 */
	protected void doGet(HttpServletRequest request, HttpServletResponse response) 
			throws ServletException, IOException {
			BookService bService = new BookServiceImpl();
			List<BookVO> list = bService.bookList();
			
			response.setContentType("text/json;charset=utf-8");
			PrintWriter out = response.getWriter();
			String str = "[";
			
			for(BookVO bv : list) {
				str += "{";
				str += "\"BOOK_CORD\":\"" + bv.getBOOK_CODE() + "\",";
				str += "\"BOOK_TITLE\":\"" + bv.getBOOK_TITLE() + "\",";
				str += "\"BOOK_AUTHOR\":\"" + bv.getBOOK_AUTHOR() + "\",";
				str += "\"BOOK_PRESS\":\"" + bv.getBOOK_PRESS() + "\",";
				str += "\"BOOK_PRICE\":\"" + bv.getBOOK_PRICE() + "\",";
				str += "}";	
			}
			str += "]";
			out.print(str);
		}
	

	/**
	 * @see HttpServlet#doPost(HttpServletRequest request, HttpServletResponse response)
	 */
	protected void doPost(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
		// TODO Auto-generated method stub
		doGet(request, response);
	}

}
