package com.fatec.esw.repositories;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.fatec.esw.domain.Candidato;

@Repository
public interface CandidatoRepository extends JpaRepository<Candidato, Long> {

}
