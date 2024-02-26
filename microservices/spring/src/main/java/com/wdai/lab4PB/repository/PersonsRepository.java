package com.wdai.lab4PB.repository;

import com.wdai.lab4PB.dao.Person;
import org.springframework.data.repository.CrudRepository;
import java.util.List;
import java.util.Optional;

public interface PersonsRepository extends CrudRepository<Person, Long>{
    List<Person> findAll();
    Person findBySurname(String surname);
    Person findById(int id);
    Person save(Person person);
    void delete(Person person);
}
