package com.fatec.esw.services;

import java.util.List;
import java.util.Optional;

import javax.persistence.EntityManager;
import javax.persistence.criteria.CriteriaBuilder;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.fatec.dto.CandidatoDTO;
import com.fatec.dto.CandidatoEditadoDTO;
import com.fatec.esw.domain.Candidato;
import com.fatec.esw.repositories.CandidatoRepository;

@Service
public class CandidatoService {

	@Autowired //Anotação para instanciar automagicamente
	private CandidatoRepository candidatoRepository;
	
	@Autowired
	private EntityManager entity;
	
	//Objeto Optional é um objeto container que carrega um onjeto do tipo
	//informado e encapsula a questão do objeto estar encapsulado ou não
	public Candidato find(Long id) {
		Optional<Candidato> obj = candidatoRepository.findById(id);
		return obj.orElse(null);
	}
	
	public List<Candidato> findAll() {
		List<Candidato> listaCandidatos = candidatoRepository.findAll();
		return listaCandidatos;
	}
	
	public Candidato cadastrar(CandidatoDTO candidatoDTO) {

		Candidato candidato = candidatoDTO.inserirEntidade(candidatoDTO);
		
		candidato.setCpf(candidatoDTO.getCpf() != null ? candidatoDTO.getCpf() : null);
		candidato.setEmail(candidatoDTO.getEmail() != null ? candidatoDTO.getEmail() : null);
		candidato.setNome(candidatoDTO.getNome() != null ? candidatoDTO.getNome() : null);
		candidato.setTelefone(candidatoDTO.getTelefone() != null ? candidatoDTO.getTelefone() : null);
		candidato.setCurriculo(candidatoDTO.getCurriculo() != null ? candidatoDTO.getCurriculo() : null);
		candidatoRepository.save(candidato);
		return candidato;
	}
	
	public Candidato editar(CandidatoEditadoDTO candidatoEditadoDTO) {
		
		Candidato candidato = candidatoEditadoDTO.inserirEntidade(candidatoEditadoDTO);
		candidato.setId(candidatoEditadoDTO.getId() != null ? candidatoEditadoDTO.getId() : null);
		candidato.setCpf(candidatoEditadoDTO.getCpf() != null ? candidatoEditadoDTO.getCpf() : null);
		candidato.setEmail(candidatoEditadoDTO.getEmail() != null ? candidatoEditadoDTO.getEmail() : null);
		candidato.setNome(candidatoEditadoDTO.getNome() != null ? candidatoEditadoDTO.getNome() : null);
		candidato.setTelefone(candidatoEditadoDTO.getTelefone() != null ? candidatoEditadoDTO.getTelefone() : null);
		candidato.setCurriculo(candidatoEditadoDTO.getCurriculo() != null ? candidatoEditadoDTO.getCurriculo() : null);
		candidato.setCargoAtual(candidatoEditadoDTO.getCargoAtual() != null ? candidatoEditadoDTO.getCargoAtual(): null);
		candidato.setDataAdmissao(candidatoEditadoDTO.getDataAdmissao() != null ? candidatoEditadoDTO.getDataAdmissao(): null);
		candidato.setFuncionario(candidatoEditadoDTO.getFuncionario());
		candidatoRepository.save(candidato);
		return candidato;
	}
	
	public void delete(Long id) {
		candidatoRepository.deleteById(id);
	}
	

}
