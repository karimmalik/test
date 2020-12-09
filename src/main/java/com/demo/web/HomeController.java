package com.demo.web;

import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.bind.annotation.ResponseStatus;
import org.springframework.web.bind.annotation.RestController;

import com.demo.model.User;

@RestController
public class HomeController {
	
	@RequestMapping(value = {"/process/age1"},method = RequestMethod.POST)
	@ResponseStatus(HttpStatus.SWITCHING_PROTOCOLS) 					// 101
	@ResponseBody
	public void create1(@RequestBody User user) {
		System.out.println("create1");
		if (user.getAge()>=1 && user.getAge()<=20) {
			System.out.println("light blue");
		}else if(user.getAge()>=21 && user.getAge()<=50) {
			System.out.println("light red");
		}else if(user.getAge()>=51) {
			System.out.println("grey");
		}
	}
	
	@RequestMapping(value = {"/process/age2"},method = RequestMethod.POST)
	@ResponseStatus(HttpStatus.PROCESSING)								// 102
	@ResponseBody
	public void create2(@RequestBody User user) {
		System.out.println("create2");
		if (user.getAge()>=1 && user.getAge()<=20) {
			System.out.println("light blue");
		}else if(user.getAge()>=21 && user.getAge()<=50) {
			System.out.println("light red");
		}else if(user.getAge()>=51) {
			System.out.println("grey");
		}
	}
	
	@RequestMapping(value = {"/process/age3"},method = RequestMethod.POST)
	@ResponseStatus(HttpStatus.OK)										// 200
	@ResponseBody
	public void create3(@RequestBody User user) {
		System.out.println("create3");
		if (user.getAge()>=1 && user.getAge()<=20) {
			System.out.println("light blue");
		}else if(user.getAge()>=21 && user.getAge()<=50) {
			System.out.println("light red");
		}else if(user.getAge()>=51) {
			System.out.println("grey");
		}
	}
	
	@RequestMapping(value = {"/process/age"},method = RequestMethod.POST)
	@ResponseStatus(HttpStatus.CREATED)									// 201
	@ResponseBody
	public void create(@RequestBody User user) {
		System.out.println("create");
		if (user.getAge()>=1 && user.getAge()<=20) {
			create1(user);
		}else if(user.getAge()>=21 && user.getAge()<=50) {
			create2(user);
		}else if(user.getAge()>=51) {
			create3(user);
		}
	}

}
