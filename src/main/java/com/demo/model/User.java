/**
 * 
 */
package com.demo.model;


public class User {

	private Long id;
	private String userName;
	private int age;
	
	public User() {
	}

	public Long getId() {
		return id;
	}

	public void setId(Long id) {
		this.id = id;
	}

	public String getUserName() {
		return userName;
	}

	public void setUserName(String userName) {
		this.userName = userName;
	}

	public int getAge() {
		return age;
	}

	public void setAge(int age) {
		this.age = age;
	}

	public User(Long id, String userName, int age) {
		super();
		this.id = id;
		this.userName = userName;
		this.age = age;
	}

	

}
