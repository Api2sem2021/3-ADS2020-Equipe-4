package com.fatec.esw.resources;

import java.net.URI;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.servlet.support.ServletUriComponentsBuilder;

import com.fatec.dto.CandidatoDTO;
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
	
//	@PostMapping("/inscricao")
//	public ResponseEntity<Candidato> cadastrar( @RequestAttribute String cpf, @RequestAttribute String email, @RequestAttribute String nome, @RequestAttribute String telefone,
//			@RequestAttribute String curriculo, @RequestAttribute String facebook, @RequestAttribute String linkedin) {
//		Candidato candidato = candidatoService.cadastrar(cpf, email, nome, telefone, curriculo, facebook, linkedin);
//		return ResponseEntity.ok(candidato);
//	}
	
	@PostMapping()
	public ResponseEntity<CandidatoDTO> cadastrar( @RequestBody CandidatoDTO candidato) {
		candidatoService.cadastrar(candidato);
		URI uri = ServletUriComponentsBuilder.fromCurrentRequest().path("/{id}")
				.buildAndExpand(candidato.getId()).toUri();
		return ResponseEntity.created(uri).build();
	}
}

	

