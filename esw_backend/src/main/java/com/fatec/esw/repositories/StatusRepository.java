package com.fatec.esw.repositories;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.fatec.esw.domain.Status;

@Repository
public interface StatusRepository extends JpaRepository<Status, Long> {

}
