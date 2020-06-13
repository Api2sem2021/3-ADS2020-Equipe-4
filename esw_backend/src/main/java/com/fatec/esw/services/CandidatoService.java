package com.fatec.esw.services;

import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.fatec.dto.CandidatoDTO;
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
	
//	public Candidato cadastrar(String cpf, String email, String nome, String telefone, String curriculo, String facebook, String linkedin) {
//
//		CandidatoDTO candidatoDTO =  new CandidatoDTO(cpf, email, nome, telefone, curriculo, facebook, linkedin);
//		Candidato candidato = candidatoDTO.inserirEntidade(candidatoDTO);
//		
//		candidato.setCpf(candidatoDTO.getCpf() != null ? candidatoDTO.getCpf() : null);
//		candidato.setEmail(candidatoDTO.getEmail() != null ? candidatoDTO.getEmail() : null);
//		candidato.setNome(candidatoDTO.getNome() != null ? candidatoDTO.getNome() : null);
//		candidato.setTelefone(candidatoDTO.getTelefone() != null ? candidatoDTO.getTelefone() : null);
//		candidato.setCurriculo(candidatoDTO.getCurriculo() != null ? candidatoDTO.getCurriculo() : null);
//		candidato.setFacebook(candidatoDTO.getFacebook() != null ? candidatoDTO.getFacebook() : null);
//		candidato.setLinkedin(candidatoDTO.getLinkedin() != null ? candidatoDTO.getLinkedin() : null);
//		candidatoRepository.save(candidato);
//		return candidato;
//	}
	
	public Candidato cadastrar(CandidatoDTO candidatoDTO) {

		Candidato candidato = candidatoDTO.inserirEntidade(candidatoDTO);
		
		candidato.setCpf(candidatoDTO.getCpf() != null ? candidatoDTO.getCpf() : null);
		candidato.setEmail(candidatoDTO.getEmail() != null ? candidatoDTO.getEmail() : null);
		candidato.setNome(candidatoDTO.getNome() != null ? candidatoDTO.getNome() : null);
		candidato.setTelefone(candidatoDTO.getTelefone() != null ? candidatoDTO.getTelefone() : null);
		candidato.setCurriculo(candidatoDTO.getCurriculo() != null ? candidatoDTO.getCurriculo() : null);
		candidato.setFacebook(candidatoDTO.getFacebook() != null ? candidatoDTO.getFacebook() : null);
		candidato.setLinkedin(candidatoDTO.getLinkedin() != null ? candidatoDTO.getLinkedin() : null);
		candidatoRepository.save(candidato);
		return candidato;
	}
	
	
}
