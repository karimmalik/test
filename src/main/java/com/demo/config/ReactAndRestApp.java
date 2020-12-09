package com.demo.config;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.boot.autoconfigure.domain.EntityScan;
import org.springframework.context.annotation.ComponentScan;

@SpringBootApplication
@ComponentScan({"com.demo.web","com.demo.service"})
@EntityScan("com.demo.model")
public class ReactAndRestApp {

	public static void main(String[] args) {
		SpringApplication.run(ReactAndRestApp.class, args);
	}
	
}
