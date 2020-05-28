package com.fatec.esw.repositories;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.fatec.esw.domain.Vaga;

@Repository
public interface VagaRepository extends JpaRepository<Vaga, Long> {

}
