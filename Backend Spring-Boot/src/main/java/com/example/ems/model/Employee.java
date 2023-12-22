package com.example.ems.model;

import java.time.LocalDate;

import jakarta.persistence.*;

@Entity
@Table(name = "employees")
public class Employee {
	
	@Id
	@GeneratedValue(strategy = GenerationType.SEQUENCE, generator = "custom_sequence")
	@SequenceGenerator(name = "custom_sequence", sequenceName = "auto", initialValue = 198001, allocationSize = 1)
	private Long id;

	@Column(name = "first_name",nullable = false)
	private String firstName;
	
	@Column(name = "last_name",nullable = false)
	private String lastName;
	
	@Column(name = "dob",nullable = false)
	private LocalDate dob;
	
	@Column(name = "dept",nullable=false)
	private String dept;
	
	@Column(name = "phone",nullable=false,unique = true)
	private Long phone;
	
	@Column(name = "email_id",nullable=false,unique = true)
	private String emailId;
	
	@Column(name = "city",nullable=false)
	private String city;
	
	
	public Employee() {
		
	}


	public Long getId() {
		return id;
	}


	public void setId(Long id) {
		this.id = id;
	}


	public String getFirstName() {
		return firstName;
	}


	public void setFirstName(String firstName) {
		this.firstName = firstName;
	}


	public String getLastName() {
		return lastName;
	}


	public void setLastName(String lastName) {
		this.lastName = lastName;
	}


	public LocalDate getDob() {
		return dob;
	}


	public void setDob(LocalDate dob) {
		this.dob = dob;
	}


	public String getDept() {
		return dept;
	}


	public void setDept(String dept) {
		this.dept = dept;
	}


	public Long getPhone() {
		return phone;
	}


	public void setPhone(Long phone) {
		this.phone = phone;
	}


	public String getEmailId() {
		return emailId;
	}


	public void setEmailId(String emailId) {
		this.emailId = emailId;
	}


	public String getCity() {
		return city;
	}


	public void setCity(String city) {
		this.city = city;
	}
	
	
	
	
}