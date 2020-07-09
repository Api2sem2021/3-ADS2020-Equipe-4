package com.fatec.esw.resources;

import java.net.URI;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.servlet.support.ServletUriComponentsBuilder;

import com.fatec.dto.VagaDTO;
import com.fatec.esw.domain.Vaga;
import com.fatec.esw.services.VagaService;

@CrossOrigin()
@RestController
@RequestMapping(value="/vagas")
public class VagaResource {

	//Associada a um dos verbos do http
	@Autowired
	private VagaService vagaService;
	
	@GetMapping("/{id}")
	public ResponseEntity<?> find(@PathVariable("id") Long id) {
		Vaga obj = vagaService.find(id);
		return ResponseEntity.ok().body(obj);
	}
	
	@GetMapping("/buscarTodas")
	public ResponseEntity<?> findAll() {
		List<Vaga> listaVagas = vagaService.findAll();
		return ResponseEntity.ok().body(listaVagas);
	}
	
	@PostMapping()
	public ResponseEntity<VagaDTO> cadastrar( @RequestBody VagaDTO vaga) {
		vagaService.cadastrar(vaga);
		URI uri = ServletUriComponentsBuilder.fromCurrentRequest().path("/{id}")
				.buildAndExpand(vaga.getId()).toUri();
		return ResponseEntity.created(uri).build();
	}
}

	

