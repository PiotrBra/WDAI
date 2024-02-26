package com.wdai.lab4PB.service;

import com.wdai.lab4PB.dao.Person;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import com.wdai.lab4PB.repository.PersonsRepository;

import java.util.List;

@Service
public class PersonServiceImpl implements PersonService{
    @Autowired
    private PersonsRepository personsRepository ;

    @Override
    public List<Person> getPersons() {
        return personsRepository.findAll();
    }

    @Override
    public Person getPersonBySurname(String surname) {
        return personsRepository.findBySurname(surname);
    }

    @Override
    public Person getPersonById(int id) {
        return personsRepository.findById(id);
    }

    @Override
    public Person create(Person person) {
        return personsRepository.save(person);
    }

    public void delete(Person person) {
        personsRepository.delete(person);
    }
}
