package com.fatec.esw.resources;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.fatec.esw.domain.Candidato;
import com.fatec.esw.services.CandidatoService;

@RestController
@RequestMapping(value="/candidatos")
public class CandidatoResource {

	//Associada a um dos verbos do http
	@Autowired
	private CandidatoService candidatoService;
	
	//Tipo especial que encapsula varias informações de uma resposta http
	@GetMapping("/{id}")
	public ResponseEntity<?> find(@PathVariable("id") Long id) {
		Candidato obj = candidatoService.find(id);
		return ResponseEntity.ok().body(obj);
	}
}

	

