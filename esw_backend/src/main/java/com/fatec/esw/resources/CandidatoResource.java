package com.fatec.esw.resources;

import java.net.URI;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.servlet.support.ServletUriComponentsBuilder;

import com.fatec.dto.CandidatoDTO;
import com.fatec.dto.CandidatoEditadoDTO;
import com.fatec.esw.domain.Candidato;
import com.fatec.esw.services.CandidatoService;

@CrossOrigin()
@RestController
@RequestMapping(value="/candidatos")
public class CandidatoResource {

	//Associada a um dos verbos do http
	@Autowired
	private CandidatoService candidatoService;
	
	@GetMapping("/{id}")
	public ResponseEntity<?> find(@PathVariable("id") Long id) {
		Candidato obj = candidatoService.find(id);
		return ResponseEntity.ok().body(obj);
	}
	
	@GetMapping("/buscarTodos")
	public ResponseEntity<List<Candidato>> findAll() {
		List<Candidato> listaCandidatos = candidatoService.findAll();
		return ResponseEntity.ok().body(listaCandidatos);
	}
	
	@PostMapping()
	public ResponseEntity<CandidatoDTO> cadastrar( @RequestBody CandidatoDTO candidato) {
		candidatoService.cadastrar(candidato);
		URI uri = ServletUriComponentsBuilder.fromCurrentRequest().path("/{id}")
				.buildAndExpand(candidato.getId()).toUri();
		return ResponseEntity.created(uri).build();
	}
	
	@PutMapping()
	public ResponseEntity<CandidatoEditadoDTO> editar(@RequestBody CandidatoEditadoDTO candidato) {
		candidatoService.editar(candidato);
		return ResponseEntity.noContent().build();
	}
	
	@DeleteMapping("/{id}")
	public ResponseEntity<?> delete(@PathVariable("id") Long id) {
		candidatoService.delete(id);
		return ResponseEntity.noContent().build();
	}
}

	

