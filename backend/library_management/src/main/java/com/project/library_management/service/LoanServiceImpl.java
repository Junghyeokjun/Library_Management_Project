package com.project.library_management.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import com.project.library_management.constant.LoanAvailabilityOption;
import com.project.library_management.dto.LoanDto;
import com.project.library_management.dto.SearchDto;
import com.project.library_management.entity.Loan;
import com.project.library_management.mapper.LoanMapper;

@Service
public class LoanServiceImpl implements LoanService {

	@Autowired
	private LoanMapper loanMapper;

	@Transactional
	@Override
	public int createLoan(LoanDto loan) {
		int result=loanMapper.insertLoan(loan);
		//대출에 성공했을시
		if(result==1) {
			loanMapper.updateCopies(loan.getBookId(), LoanAvailabilityOption.LOAN_LOAN);
		}
		
		return result;
	}

	@Transactional
	@Override
	public int updateLoan(LoanDto loan) {
		int result=loanMapper.updateLoan(loan.getLoanId());
		//반납에 성공했을시
		if(result==1) {
			loanMapper.updateCopies(loan.getBookId(), LoanAvailabilityOption.LOAN_RETURN);
		}
		return result;
	}

	@Override
	public List<LoanDto> getLoans(SearchDto search) {

		return loanMapper.selectLoans(search);
	}

	@Override
	public long getLoanCount(SearchDto search) {
		return loanMapper.selectLoanCount(search);
	}

	@Override
	public LoanDto getLoan(long userId, long bookId) {
		Loan loan = loanMapper.selectLoan(userId, bookId);
		
		//대출하지 않았을경우 null반환
		if (loan == null) {
			return null;
		}
		LoanDto loanDto = new LoanDto();

		loanDto.setLoan(loan);
		return loanDto;
	}

}
