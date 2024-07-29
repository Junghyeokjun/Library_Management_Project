package com.project.library_management.entity;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.Setter;

//이름          널?       유형     
//----------- -------- ------ 
//BOOK_ID     NOT NULL NUMBER 
//CATEGORY_ID NOT NULL NUMBER 

//어느 도서가 어느 카테고리를 가지고 있는지에 대한 엔티티클래스입니다.
//이 클래스는 bookcategories 테이블과 매핑됩니다. 

@AllArgsConstructor
@Setter
@Getter
public class BookCategory {
	
	//각 도서를 식별하는 ID입니다.
	private long bookId;
	
	//각 카테고리를 식별하는 ID입니다.
	private long categoryId;
}
