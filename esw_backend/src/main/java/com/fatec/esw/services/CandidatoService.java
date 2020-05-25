package com.fatec.esw.services;

import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.fatec.esw.domain.Candidato;
import com.fatec.esw.repositories.CandidatoRepository;

@Service
public class CandidatoService {

	@Autowired //Anotação para instanciar automagicamente
	private CandidatoRepository candidatoRepository;
	
	//Objeto Optional é um objeto container que carrega um onjeto do tipo
	//informado e encapsula a questão do objeto estar encapsulado ou não
	public Candidato find(Long id) {
		Optional<Candidato> obj = candidatoRepository.findById(id);
		return obj.orElse(null);
	}
}
