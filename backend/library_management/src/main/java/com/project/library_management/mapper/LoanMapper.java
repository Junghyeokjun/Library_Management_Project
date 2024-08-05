package com.project.library_management.mapper;

import java.util.List;

import org.apache.ibatis.annotations.Mapper;

import com.project.library_management.dto.LoanDto;
import com.project.library_management.dto.SearchDto;

@Mapper
public interface LoanMapper {

	//SerchDto를 이용하여 유저의 대출내역을 얻어오는 메서드
	public List<LoanDto> selectLoans(SearchDto search);
	
	//SerchDto를 이용하여 유저의 대출내역의 개수를 얻어오는 메서드
	public long selectLoanCount(SearchDto search);
	
	//LoanDto를 이용하여 대출정보를 추가하는 메서드
	public int insertLoan(LoanDto loan);
	
	//loan_id를 이용하여 유저의 대출정보를 업데이트 하는 메서드
	public int updateLoan(long id);
}
