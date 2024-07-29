package com.project.library_management.entity;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.Setter;

//이름          널?       유형            
//----------- -------- ------------- 
//CATEGORY_ID NOT NULL NUMBER        
//NAME        NOT NULL VARCHAR2(100) 

//카테고리 정보를 나타내는 엔티티 클래스입니다.
//이 클래스는 categories와 매핑됩니다.

@AllArgsConstructor
@Setter
@Getter
public class Category {

	//각 카테고리를 식별하는 아이디입니다.
	private long categoryId;
	
	//카테고리의 이름입니다.
	private String name;
}
