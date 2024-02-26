package com.wdai.lab4PB;

import com.wdai.lab4PB.dao.Person;
import com.wdai.lab4PB.repository.PersonsRepository;
import org.springframework.boot.CommandLineRunner;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.context.annotation.Bean;


@SpringBootApplication
public class Lab4PbApplication {
	@Bean
	public CommandLineRunner demo(PersonsRepository repository) {
		return (args) -> {
// save a few customers
			repository.save(new Person("John", "Doe","IT"));
			repository.save(new Person("John",
					"Smith","tester"));
// fetch all customers
			System.out.println("Customers found with findAll():");
			System.out.println("-------------------------------");
			repository.findAll().forEach(customer -> {
				System.out.println(customer.toString());
			});
		};
	}

	public static void main(String[] args) {
		SpringApplication.run(Lab4PbApplication.class, args);
	}

}
